// ===== IMPLEMENTATION: RENDER FUNCTIONS =====
// Table rendering + SVG connector drawing
// Depends on: impl-config.js, impl-activities.js

// ───── HELPER: Group activities by phase in order ─────
function getPhaseActivities() {
    const result = {};
    implPhases.forEach(p => { result[p] = []; });
    activityList.forEach(a => { result[a.phase].push(a); });
    implPhases.forEach(p => {
        if (result[p].length === 0) result[p] = [null];
    });
    return result;
}

// ───── RENDER: Build thead with phase colspan + activity sub-headers ─────
function buildActivityHeaders() {
    const pa = getPhaseActivities();
    const phaseIcons = { "Lập kế hoạch": "📋", "Phân tích yêu cầu": "🔍", "Thiết kế": "📐", "Lập trình": "💻", "Kiểm thử": "🧪", "UAT": "✅", "Triển khai & Đóng dự án": "🚀" };

    let phaseRow = '<th class="impl-th-role" rowspan="2">Vai trò</th>';
    implPhases.forEach(phase => {
        const count = pa[phase].length;
        const cls = implPhaseColors[phase];
        phaseRow += `<th class="impl-th impl-th-${cls}" colspan="${count}">${phaseIcons[phase]} ${phase}</th>`;
    });

    let actRow = '';
    implPhases.forEach(phase => {
        const cls = implPhaseColors[phase];
        pa[phase].forEach(a => {
            if (!a) {
                actRow += `<th class="act-sub-th act-sub-${cls}">—</th>`;
            } else {
                const dec = a.nodeType === 'decision' ? ' act-sub-decision' : '';
                actRow += `<th class="act-sub-th act-sub-${cls}${dec}" title="${a.title}">${a.id}</th>`;
            }
        });
    });

    return `<tr>${phaseRow}</tr>\n        <tr class="act-sub-row">${actRow}</tr>`;
}

// ───── RENDER: Build tbody — each activity = one column ─────
function buildActivityDiagram() {
    const pa = getPhaseActivities();

    return implRoles.map(role => {
        const icon = implRoleIcons[role];
        let cells = '';

        implPhases.forEach(phase => {
            const cls = implPhaseColors[phase];
            pa[phase].forEach(a => {
                if (!a) {
                    cells += `<td class="act-cell act-phase-${cls} act-cell-empty"></td>`;
                    return;
                }
                const isOwner = a.role === role;
                const isAdditional = a.additionalRoles && a.additionalRoles.includes(role);

                if (isOwner) {
                    const isDecision = a.nodeType === 'decision';
                    const nodeClass = isDecision ? 'act-node act-decision' : 'act-node';
                    cells += `<td class="act-cell act-phase-${cls}"><div class="${nodeClass}" data-id="${a.id}" onclick="openActivityModal('${a.id}')" title="${a.title}"><span class="act-id">${a.id}</span><span class="act-label">${a.shortLabel}</span></div></td>`;
                } else if (isAdditional) {
                    cells += `<td class="act-cell act-phase-${cls}"><div class="act-node act-ghost" data-id="${a.id}" title="${a.title}"><span class="act-id">${a.id}</span><span class="act-label">${a.shortLabel}</span></div></td>`;
                } else {
                    cells += `<td class="act-cell act-phase-${cls} act-cell-empty"></td>`;
                }
            });
        });

        return `<tr>
            <td class="impl-role-cell" onclick="openRoleModal('${role}')">
                <div class="role-cell-inner">
                    <span class="impl-role-icon">${icon}</span>
                    <span class="impl-role-name">${role}</span>
                </div>
            </td>
            ${cells}
        </tr>`;
    }).join('\n');
}

// ───── RENDER: SVG connectors ─────
function drawConnectors() {
    const container = document.getElementById('act-diagram-wrap');
    if (!container) return;

    const oldSvg = container.querySelector('.act-svg-overlay');
    if (oldSvg) oldSvg.remove();

    const scrollW = container.scrollWidth;
    const scrollH = container.scrollHeight;
    const containerRect = container.getBoundingClientRect();
    const scrollLeft = container.scrollLeft;
    const scrollTop = container.scrollTop;

    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.classList.add('act-svg-overlay');
    svg.setAttribute('width', scrollW);
    svg.setAttribute('height', scrollH);
    svg.style.position = 'absolute';
    svg.style.top = '0';
    svg.style.left = '0';
    svg.style.pointerEvents = 'none';
    svg.style.zIndex = '5';
    svg.style.overflow = 'visible';

    svg.innerHTML = `<defs>
        <marker id="arrowHead" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto" markerUnits="strokeWidth">
            <path d="M0,0 L8,3 L0,6 Z" fill="#0077b6"/>
        </marker>
        <marker id="arrowHeadLoop" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto" markerUnits="strokeWidth">
            <path d="M0,0 L8,3 L0,6 Z" fill="#e67e22"/>
        </marker>
    </defs>`;

    workflowConnections.forEach(conn => {
        const fromEl = container.querySelector('[data-id="' + conn.from + '"]:not(.act-ghost)');
        const toEl = container.querySelector('[data-id="' + conn.to + '"]:not(.act-ghost)');
        if (!fromEl || !toEl) return;

        const fRect = fromEl.getBoundingClientRect();
        const tRect = toEl.getBoundingClientRect();

        const x1 = fRect.left - containerRect.left + scrollLeft + fRect.width / 2;
        const y1 = fRect.top - containerRect.top + scrollTop + fRect.height / 2;
        const x2 = tRect.left - containerRect.left + scrollLeft + tRect.width / 2;
        const y2 = tRect.top - containerRect.top + scrollTop + tRect.height / 2;

        const isLoop = conn.type === 'loop';

        if (isLoop) {
            const cpx = Math.min(x1, x2) - 60;
            const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            path.setAttribute('d', `M${x1},${y1} C${cpx},${y1} ${cpx},${y2} ${x2},${y2}`);
            path.setAttribute('fill', 'none');
            path.setAttribute('stroke', '#e67e22');
            path.setAttribute('stroke-width', '2');
            path.setAttribute('stroke-dasharray', '6,4');
            path.setAttribute('marker-end', 'url(#arrowHeadLoop)');
            path.setAttribute('opacity', '0.7');
            svg.appendChild(path);
        } else {
            const line = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            let d;
            const dx = Math.abs(x2 - x1);
            const dy = Math.abs(y2 - y1);

            if (dy < 10) {
                d = `M${x1},${y1} L${x2},${y2}`;
            } else if (dx < 10) {
                d = `M${x1},${y1} L${x2},${y2}`;
            } else {
                const midY = y1 + (y2 - y1) * 0.5;
                d = `M${x1},${y1} L${x1},${midY} L${x2},${midY} L${x2},${y2}`;
            }

            line.setAttribute('d', d);
            line.setAttribute('fill', 'none');
            line.setAttribute('stroke', '#0077b6');
            line.setAttribute('stroke-width', '2');
            line.setAttribute('marker-end', 'url(#arrowHead)');
            line.setAttribute('opacity', '0.5');
            svg.appendChild(line);
        }

        if (conn.label) {
            const lx = (x1 + x2) / 2 + (isLoop ? -40 : 0);
            const ly = (y1 + y2) / 2 - 8;
            const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
            text.setAttribute('x', lx);
            text.setAttribute('y', ly);
            text.setAttribute('font-size', '11');
            text.setAttribute('fill', isLoop ? '#e67e22' : '#0077b6');
            text.setAttribute('font-weight', '600');
            text.setAttribute('text-anchor', 'middle');
            text.textContent = conn.label;
            svg.appendChild(text);
        }
    });

    container.appendChild(svg);
}
