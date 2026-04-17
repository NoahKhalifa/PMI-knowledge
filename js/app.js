/**
 * App - Main application logic for Management Dashboard.
 * Depends on: glossary.js, components.js, process-data.js
 */

// tabContent is declared in index.html before data files load

/**
 * Render all tab content from tabContent registry into DOM.
 * Then enhance process links and KA cells with emojis and tooltips.
 */
function renderTabs() {
    for (const [index, html] of Object.entries(tabContent)) {
        const container = document.getElementById('tab' + index);
        if (container) container.innerHTML = html;
    }
    enhanceTableItems();
}

/**
 * Add emojis and Vietnamese tooltips to all process-links and KA cells in the table.
 */
function enhanceTableItems() {
    // Enhance process links with emoji + tooltip
    document.querySelectorAll('.process-link').forEach(el => {
        const text = el.textContent.trim();
        const emoji = getProcessEmoji(text);
        const tip = getTooltip(text);

        // Add emoji if not already present
        if (!el.dataset.enhanced) {
            el.innerHTML = emoji + ' ' + text;
            if (tip) {
                const tipEl = document.createElement('span');
                tipEl.className = 'table-tooltip';
                tipEl.textContent = tip;
                el.appendChild(tipEl);
            }
            el.dataset.enhanced = '1';
        }
    });

    // Enhance Knowledge Area cells (first column) with tooltip
    document.querySelectorAll('#tab0 tr td:first-child').forEach(td => {
        const text = td.textContent.trim();
        // Extract the KA name (e.g. "4. Project Integration Management" -> "Project Integration Management")
        const kaName = text.replace(/^\d+\.\s*/, '');
        const tip = getTooltip(kaName);

        if (tip && !td.dataset.enhanced) {
            td.classList.add('ka-cell');
            const tipEl = document.createElement('span');
            tipEl.className = 'table-tooltip';
            tipEl.textContent = tip;
            td.appendChild(tipEl);
            td.dataset.enhanced = '1';
        }
    });
}

/**
 * Switch between tabs.
 */
function showTab(index) {
    const tabs = document.querySelectorAll(".tab-content");
    const buttons = document.querySelectorAll(".tab");

    tabs.forEach(t => t.style.display = "none");
    buttons.forEach(b => b.classList.remove("active"));

    tabs[index].style.display = "block";
    buttons[index].classList.add("active");
}

/**
 * Open modal with ITTO data or Knowledge Area overview.
 * Uses components.js for rendering and glossary.js for tooltips.
 */
function openModal(title) {
    document.getElementById("modalTitle").innerText = title;
    const body = document.querySelector(".modal-body");
    const data = processData[title];

    if (!data) {
        body.innerHTML = '<p>Content not available for: ' + title + '</p>';
    } else if (data.description) {
        body.innerHTML = renderKnowledgeArea(data);
    } else {
        body.innerHTML = renderIttoGrid(data);
    }

    document.getElementById("modal").style.display = "flex";
}

/**
 * Close modal.
 */
function closeModal() {
    document.getElementById("modal").style.display = "none";
}
