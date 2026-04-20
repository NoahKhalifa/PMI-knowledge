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
        // Check if this is a sub-tab key like "0-0", "0-1", "0-2"
        if (String(index).includes('-')) {
            const container = document.getElementById('tab' + index.replace('-', '-sub'));
            if (container) container.innerHTML = html;
        } else {
            const container = document.getElementById('tab' + index);
            if (container) container.innerHTML = html;
        }
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
    document.querySelectorAll('#tab0 tr td:first-child, #tab0-sub1 tr td:first-child').forEach(td => {
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
 * Switch between sub-tabs within a parent tab.
 */
function showSubTab(parentIndex, subIndex) {
    const parent = document.getElementById('tab' + parentIndex);
    if (!parent) return;

    const subContents = parent.querySelectorAll('.sub-tab-content');
    const subButtons = parent.querySelectorAll('.sub-tab');

    subContents.forEach(s => s.style.display = 'none');
    subButtons.forEach(b => b.classList.remove('active'));

    subContents[subIndex].style.display = 'block';
    subButtons[subIndex].classList.add('active');

    // Re-enhance items in newly visible sub-tab
    enhanceTableItems();

    // Redraw activity diagram connectors when switching to Implementation tab
    if (parentIndex === 0 && subIndex === 0 && typeof drawConnectors === 'function') {
        setTimeout(drawConnectors, 150);
    }
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
    // Clear activity diagram highlights when modal closes
    if (typeof highlightActivity === 'function') highlightActivity(null);
}

/**
 * Open modal with role detail from Implementation matrix.
 */
function openRoleModal(roleName) {
    const data = roleData[roleName];
    if (!data) return;

    document.getElementById("modalTitle").innerText = data.icon + ' ' + roleName;
    const body = document.querySelector(".modal-body");

    const respList = data.responsibilities.map(r => `<li>▸ ${r}</li>`).join('');
    const kpiTags = data.kpis.map(k => `<span class="kpi-tag">${k.icon} ${k.name}</span>`).join('');
    const focusCards = (data.focusAreas || []).map(f =>
        `<div class="focus-card">
            <div class="focus-card-title">${f.icon} ${f.name}</div>
            <div class="focus-card-desc">${f.desc}</div>
        </div>`
    ).join('');

    body.innerHTML = `
        <div class="role-modal-grid">
            <div class="role-desc">${data.shortDesc}</div>

            <div class="role-section responsibilities">
                <h4>📌 Vai trò & Trách nhiệm</h4>
                <ul>${respList}</ul>
            </div>

            <div class="role-section kpis">
                <h4>📊 KPI / Chỉ số theo dõi</h4>
                <div class="kpi-tags">${kpiTags}</div>
            </div>

            <div class="role-section focus">
                <h4>🎯 Key Focus Areas</h4>
                <div class="focus-cards">${focusCards}</div>
            </div>
        </div>
    `;

    document.getElementById("modal").style.display = "flex";
}
