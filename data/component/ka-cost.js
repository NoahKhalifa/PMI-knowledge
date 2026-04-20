// KA 7: Project Cost Management
kaRows.push(`
    <tr>
        <td onclick="openModal('Project Cost Management')">7. Project Cost Management</td>
        <td></td>
        <td><span class="process-link" onclick="openModal('7.1 Plan Cost Management')">7.1 Plan Cost Management</span><br><span class="process-link" onclick="openModal('7.2 Estimate Costs')">7.2 Estimate Costs</span><br><span class="process-link" onclick="openModal('7.3 Determine Budget')">7.3 Determine Budget</span></td>
        <td></td>
        <td><span class="process-link" onclick="openModal('7.4 Control Costs')">7.4 Control Costs</span></td>
        <td></td>
    </tr>
`);

Object.assign(processData, {
    "Project Cost Management": {
        description: "Includes the processes involved in planning, estimating, budgeting, financing, funding, managing, and controlling costs so the project can be completed within the approved budget.",
        processes: ["7.1 Plan Cost Management", "7.2 Estimate Costs", "7.3 Determine Budget", "7.4 Control Costs"]
    },

    "7.1 Plan Cost Management": {
        inputs: [
            "Project charter",
            "Project management plan (Schedule management plan, Risk management plan)",
            "Enterprise environmental factors",
            "Organizational process assets"
        ],
        tools: [
            "Expert judgment",
            "Data analysis (Alternatives analysis)",
            "Meetings"
        ],
        outputs: [
            "Cost management plan"
        ]
    },

    "7.2 Estimate Costs": {
        inputs: [
            "Project management plan (Cost management plan, Quality management plan, Scope baseline)",
            "Project documents (Lessons learned register, Project schedule, Resource requirements, Risk register)",
            "Enterprise environmental factors",
            "Organizational process assets"
        ],
        tools: [
            "Expert judgment",
            "Analogous estimating",
            "Parametric estimating",
            "Bottom-up estimating",
            "Three-point estimating",
            "Data analysis (Alternatives analysis, Reserve analysis, Cost of quality)",
            "Project management information system",
            "Decision making (Voting)"
        ],
        outputs: [
            "Cost estimates",
            "Basis of estimates",
            "Project documents updates"
        ]
    },

    "7.3 Determine Budget": {
        inputs: [
            "Project management plan (Cost management plan, Resource management plan, Scope baseline)",
            "Project documents (Basis of estimates, Cost estimates, Project schedule, Risk register)",
            "Business documents (Business case, Benefits management plan)",
            "Agreements",
            "Enterprise environmental factors",
            "Organizational process assets"
        ],
        tools: [
            "Expert judgment",
            "Cost aggregation",
            "Data analysis (Reserve analysis)",
            "Historical information review",
            "Funding limit reconciliation",
            "Financing"
        ],
        outputs: [
            "Cost baseline",
            "Project funding requirements",
            "Project documents updates"
        ]
    },

    "7.4 Control Costs": {
        inputs: [
            "Project management plan (Cost management plan, Cost baseline, Performance measurement baseline)",
            "Project documents (Lessons learned register)",
            "Project funding requirements",
            "Work performance data",
            "Organizational process assets"
        ],
        tools: [
            "Expert judgment",
            "Data analysis (Earned value analysis, Variance analysis, Trend analysis, Reserve analysis)",
            "To-complete performance index (TCPI)",
            "Project management information system"
        ],
        outputs: [
            "Work performance information",
            "Cost forecasts",
            "Change requests",
            "Project management plan updates",
            "Project documents updates"
        ]
    }
});
