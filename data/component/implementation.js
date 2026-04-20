// ===== IMPLEMENTATION: TAB CONTENT (Orchestrator) =====
// Assembles the activity diagram HTML template for sub-tab 0-0.
// Depends on: impl/impl-config.js, impl/impl-activities.js,
//             impl/impl-render.js, impl/impl-interaction.js

tabContent["0-0"] = `
<div class="section-header">
    <div class="icon pmp">🚀</div>
    <h2>Quy trình Phát triển phần mềm — Waterfall<small>Theo QT.VTIT.PQLCL.11 — Interactive Activity Diagram</small></h2>
</div>

<div class="impl-legend">
    <span class="impl-legend-item"><span class="impl-dot plan"></span>Lập kế hoạch</span>
    <span class="impl-legend-item"><span class="impl-dot analysis"></span>Phân tích yêu cầu</span>
    <span class="impl-legend-item"><span class="impl-dot design"></span>Thiết kế</span>
    <span class="impl-legend-item"><span class="impl-dot dev"></span>Lập trình</span>
    <span class="impl-legend-item"><span class="impl-dot test"></span>Kiểm thử</span>
    <span class="impl-legend-item"><span class="impl-dot uat"></span>UAT</span>
    <span class="impl-legend-item"><span class="impl-dot deploy"></span>Triển khai & Đóng DA</span>
    <span class="impl-legend-item" style="margin-left:auto"><span class="act-legend-node"></span>Activity</span>
    <span class="impl-legend-item"><span class="act-legend-decision"></span>OK / NOK Gate</span>
</div>

<div class="act-diagram-container" id="act-diagram-wrap" style="position:relative">
<table class="impl-table act-table">
    <thead>
        ${buildActivityHeaders()}
    </thead>
    <tbody>
        ${buildActivityDiagram()}
    </tbody>
</table>
</div>

<div class="impl-note">
    <p>💡 Click vào activity node để xem chi tiết — bước trước/sau sẽ được highlight. Click vào tên vai trò để xem trách nhiệm & KPI.</p>
</div>
`;
