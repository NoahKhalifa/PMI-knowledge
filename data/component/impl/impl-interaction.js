// ===== IMPLEMENTATION: INTERACTION =====
// Highlight, activity modal, and diagram initialization
// Depends on: impl-config.js, impl-activities.js

// ───── HIGHLIGHT: Previous / Next activities ─────
let _activeActivityId = null;

function highlightActivity(id) {
    const container = document.getElementById('act-diagram-wrap');
    if (!container) return;

    container.querySelectorAll('.act-node').forEach(n => {
        n.classList.remove('act-active', 'act-prev', 'act-next');
    });
    _activeActivityId = id;
    if (!id) return;

    const act = activityMap[id];
    if (!act) return;

    const node = container.querySelector('[data-id="' + id + '"]:not(.act-ghost)');
    if (node) node.classList.add('act-active');

    (act.previousActivities || []).forEach(pid => {
        const el = container.querySelector('[data-id="' + pid + '"]:not(.act-ghost)');
        if (el) el.classList.add('act-prev');
    });
    (act.nextActivities || []).forEach(nid => {
        const el = container.querySelector('[data-id="' + nid + '"]:not(.act-ghost)');
        if (el) el.classList.add('act-next');
    });

    if (act.decisionBranches) {
        Object.values(act.decisionBranches).flat().forEach(nid => {
            const el = container.querySelector('[data-id="' + nid + '"]:not(.act-ghost)');
            if (el) el.classList.add('act-next');
        });
    }
}

// ───── MODAL: Activity detail popup ─────
function openActivityModal(id) {
    const act = activityMap[id];
    if (!act) return;

    highlightActivity(id);

    const roleIcon = implRoleIcons[act.role] || '';
    document.getElementById("modalTitle").innerText = roleIcon + ' ' + act.id + ' — ' + act.title;
    const body = document.querySelector(".modal-body");

    const listHtml = (arr, emptyMsg) => {
        if (!arr || arr.length === 0) return `<p class="act-empty">${emptyMsg || '—'}</p>`;
        return '<ul>' + arr.map(item => `<li>▸ ${item}</li>`).join('') + '</ul>';
    };

    const prevLinks = (act.previousActivities || []).map(pid => {
        const p = activityMap[pid];
        return p ? `<span class="act-link act-link-prev" onclick="openActivityModal('${pid}')">${pid}: ${p.shortLabel}</span>` : pid;
    }).join('') || '<span class="act-empty">Không có (bước khởi đầu)</span>';

    const nextLinks = (act.nextActivities || []).map(nid => {
        const n = activityMap[nid];
        return n ? `<span class="act-link act-link-next" onclick="openActivityModal('${nid}')">${nid}: ${n.shortLabel}</span>` : nid;
    }).join('');

    let decisionHtml = '';
    if (act.decisionBranches) {
        decisionHtml = '<div class="act-detail-section act-detail-decision"><h4>⚖️ Nhánh quyết định</h4><div class="act-branches">';
        for (const [label, targets] of Object.entries(act.decisionBranches)) {
            const links = targets.map(tid => {
                const t = activityMap[tid];
                return t ? `<span class="act-link act-link-next" onclick="openActivityModal('${tid}')">${tid}: ${t.shortLabel}</span>` : '';
            }).join('') || '<span class="act-empty">Kết thúc nhánh</span>';
            decisionHtml += `<div class="act-branch"><span class="act-branch-label">${label}</span>${links}</div>`;
        }
        decisionHtml += '</div></div>';
    }

    body.innerHTML = `
        <div class="act-detail-grid">
            <div class="act-detail-header">
                <div class="act-detail-meta">
                    <span class="act-meta-tag act-meta-role">${roleIcon} ${act.role}</span>
                    <span class="act-meta-tag act-meta-phase">${act.phase}</span>
                    ${act.nodeType === 'decision' ? '<span class="act-meta-tag act-meta-decision">⚖️ Decision Gate</span>' : ''}
                </div>
                <p class="act-detail-desc">${act.description}</p>
            </div>

            <div class="act-detail-section act-detail-objective">
                <h4>🎯 Mục tiêu</h4>
                <p>${act.objective}</p>
            </div>

            ${act.sla ? '<div class="act-detail-section act-detail-sla"><h4>⏱️ SLA</h4><p>' + act.sla + '</p></div>' : ''}

            <div class="act-detail-section act-detail-inputs">
                <h4>📥 Đầu vào (Inputs)</h4>
                ${listHtml(act.inputs)}
            </div>

            <div class="act-detail-section act-detail-steps">
                <h4>📋 Công việc thực hiện</h4>
                ${listHtml(act.steps)}
            </div>

            <div class="act-detail-section act-detail-outputs">
                <h4>📤 Đầu ra (Outputs)</h4>
                ${listHtml(act.outputs)}
            </div>

            <div class="act-detail-section act-detail-deliverables">
                <h4>📦 Deliverables</h4>
                ${listHtml(act.deliverables)}
            </div>

            <div class="act-detail-section act-detail-risks">
                <h4>⚠️ Rủi ro cần lưu ý</h4>
                ${listHtml(act.risks)}
            </div>

            ${decisionHtml}

            <div class="act-detail-section act-detail-nav">
                <h4>🔗 Workflow</h4>
                <div class="act-nav-row">
                    <div class="act-nav-group"><span class="act-nav-label">⬅ Bước trước:</span>${prevLinks}</div>
                    <div class="act-nav-group"><span class="act-nav-label">➡ Bước sau:</span>${nextLinks || '<span class="act-empty">Chuyển sang phase tiếp theo</span>'}</div>
                </div>
            </div>
        </div>
    `;

    document.getElementById("modal").style.display = "flex";
}

// ───── INIT: Render + draw after DOM ready ─────
function initActivityDiagram() {
    setTimeout(drawConnectors, 100);
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(drawConnectors, 200);
    });
}
