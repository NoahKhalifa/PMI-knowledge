// KA 5: Project Scope Management
kaRows.push(`
    <tr>
        <td onclick="openModal('Project Scope Management')">5. Project Scope Management</td>
        <td></td>
        <td><span class="process-link" onclick="openModal('5.1 Plan Scope Management')">5.1 Plan Scope Management</span><br><span class="process-link" onclick="openModal('5.2 Collect Requirements')">5.2 Collect Requirements</span><br><span class="process-link" onclick="openModal('5.3 Define Scope')">5.3 Define Scope</span><br><span class="process-link" onclick="openModal('5.4 Create WBS')">5.4 Create WBS</span></td>
        <td></td>
        <td><span class="process-link" onclick="openModal('5.5 Validate Scope')">5.5 Validate Scope</span><br><span class="process-link" onclick="openModal('5.6 Control Scope')">5.6 Control Scope</span></td>
        <td></td>
    </tr>
`);

Object.assign(processData, {
    "Project Scope Management": {
        description: "Includes the processes required to ensure that the project includes all the work required, and only the work required, to complete the project successfully.",
        processes: ["5.1 Plan Scope Management", "5.2 Collect Requirements", "5.3 Define Scope", "5.4 Create WBS", "5.5 Validate Scope", "5.6 Control Scope"]
    },

    "5.1 Plan Scope Management": {
        inputs: [
            "Project charter",
            "Project management plan (Quality management plan, Project life cycle description, Development approach)",
            "Enterprise environmental factors",
            "Organizational process assets"
        ],
        tools: [
            "Expert judgment",
            "Data analysis (Alternatives analysis)",
            "Meetings"
        ],
        outputs: [
            "Scope management plan",
            "Requirements management plan"
        ]
    },

    "5.2 Collect Requirements": {
        inputs: [
            "Project charter",
            "Project management plan (Scope management plan, Requirements management plan, Stakeholder engagement plan)",
            "Project documents (Assumption log, Lessons learned register, Stakeholder register)",
            "Business documents",
            "Agreements",
            "Enterprise environmental factors",
            "Organizational process assets"
        ],
        tools: [
            "Expert judgment",
            "Data gathering (Brainstorming, Interviews, Focus groups, Questionnaires and surveys, Benchmarking)",
            "Data analysis (Document analysis)",
            "Decision making (Voting, Multicriteria decision analysis)",
            "Data representation (Affinity diagrams, Mind mapping)",
            "Interpersonal and team skills (Nominal group technique, Observation/conversation, Facilitation)",
            "Context diagram",
            "Prototypes"
        ],
        outputs: [
            "Requirements documentation",
            "Requirements traceability matrix"
        ]
    },

    "5.3 Define Scope": {
        inputs: [
            "Project charter",
            "Project management plan (Scope management plan)",
            "Project documents (Assumption log, Requirements documentation, Risk register)",
            "Enterprise environmental factors",
            "Organizational process assets"
        ],
        tools: [
            "Expert judgment",
            "Data analysis (Alternatives analysis)",
            "Decision making (Multicriteria decision analysis)",
            "Interpersonal and team skills (Facilitation)",
            "Product analysis"
        ],
        outputs: [
            "Project scope statement",
            "Project documents updates"
        ]
    },

    "5.4 Create WBS": {
        inputs: [
            "Project management plan (Scope management plan)",
            "Project documents (Project scope statement, Requirements documentation)",
            "Enterprise environmental factors",
            "Organizational process assets"
        ],
        tools: [
            "Expert judgment",
            "Decomposition"
        ],
        outputs: [
            "Scope baseline",
            "Project documents updates"
        ]
    },

    "5.5 Validate Scope": {
        inputs: [
            "Project management plan (Scope management plan, Requirements management plan, Scope baseline)",
            "Project documents (Lessons learned register, Quality reports, Requirements documentation, Requirements traceability matrix)",
            "Verified deliverables",
            "Work performance data"
        ],
        tools: [
            "Inspection",
            "Decision making (Voting)"
        ],
        outputs: [
            "Accepted deliverables",
            "Work performance information",
            "Change requests",
            "Project documents updates"
        ]
    },

    "5.6 Control Scope": {
        inputs: [
            "Project management plan (Scope management plan, Requirements management plan, Change management plan, Configuration management plan, Scope baseline, Performance measurement baseline)",
            "Project documents (Lessons learned register, Requirements documentation, Requirements traceability matrix)",
            "Work performance data",
            "Organizational process assets"
        ],
        tools: [
            "Data analysis (Variance analysis, Trend analysis)"
        ],
        outputs: [
            "Work performance information",
            "Change requests",
            "Project management plan updates",
            "Project documents updates"
        ]
    }
});
