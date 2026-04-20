// KA 8: Project Quality Management
kaRows.push(`
    <tr>
        <td onclick="openModal('Project Quality Management')">8. Project Quality Management</td>
        <td></td>
        <td><span class="process-link" onclick="openModal('8.1 Plan Quality Management')">8.1 Plan Quality Management</span></td>
        <td><span class="process-link" onclick="openModal('8.2 Manage Quality')">8.2 Manage Quality</span></td>
        <td><span class="process-link" onclick="openModal('8.3 Control Quality')">8.3 Control Quality</span></td>
        <td></td>
    </tr>
`);

Object.assign(processData, {
    "Project Quality Management": {
        description: "Includes the processes for incorporating the organization's quality policy regarding planning, managing, and controlling project and product quality requirements.",
        processes: ["8.1 Plan Quality Management", "8.2 Manage Quality", "8.3 Control Quality"]
    },

    "8.1 Plan Quality Management": {
        inputs: [
            "Project charter",
            "Project management plan (Requirements management plan, Risk management plan, Stakeholder engagement plan, Scope baseline)",
            "Project documents (Assumption log, Requirements documentation, Requirements traceability matrix, Risk register, Stakeholder register)",
            "Enterprise environmental factors",
            "Organizational process assets"
        ],
        tools: [
            "Expert judgment",
            "Data gathering (Benchmarking, Brainstorming, Interviews)",
            "Data analysis (Cost-benefit analysis, Cost of quality)",
            "Decision making (Multicriteria decision analysis)",
            "Data representation (Flowcharts, Logical data model, Matrix diagrams, Mind mapping)",
            "Test and inspection planning",
            "Meetings"
        ],
        outputs: [
            "Quality management plan",
            "Quality metrics",
            "Project management plan updates",
            "Project documents updates"
        ]
    },

    "8.2 Manage Quality": {
        inputs: [
            "Project management plan (Quality management plan)",
            "Project documents (Lessons learned register, Quality control measurements, Quality metrics, Risk report)",
            "Organizational process assets"
        ],
        tools: [
            "Data gathering (Checklists)",
            "Data analysis (Alternatives analysis, Document analysis, Process analysis, Root cause analysis)",
            "Decision making (Multicriteria decision analysis)",
            "Data representation (Affinity diagrams, Cause-and-effect diagrams, Flowcharts, Histograms, Matrix diagrams, Scatter diagrams)",
            "Audits",
            "Design for X",
            "Problem solving",
            "Quality improvement methods"
        ],
        outputs: [
            "Quality reports",
            "Test and evaluation documents",
            "Change requests",
            "Project management plan updates",
            "Project documents updates"
        ]
    },

    "8.3 Control Quality": {
        inputs: [
            "Project management plan (Quality management plan)",
            "Project documents (Lessons learned register, Quality metrics, Test and evaluation documents)",
            "Approved change requests",
            "Deliverables",
            "Work performance data",
            "Enterprise environmental factors",
            "Organizational process assets"
        ],
        tools: [
            "Data gathering (Checklists, Check sheets, Statistical sampling, Questionnaires and surveys)",
            "Data analysis (Performance reviews, Root cause analysis)",
            "Inspection",
            "Testing/product evaluations",
            "Data representation (Cause-and-effect diagrams, Control charts, Histograms, Scatter diagrams)",
            "Meetings"
        ],
        outputs: [
            "Quality control measurements",
            "Verified deliverables",
            "Work performance information",
            "Change requests",
            "Project management plan updates",
            "Project documents updates"
        ]
    }
});
