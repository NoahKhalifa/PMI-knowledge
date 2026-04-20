// KA 12: Project Procurement Management
kaRows.push(`
    <tr>
        <td onclick="openModal('Project Procurement Management')">12. Project Procurement Management</td>
        <td></td>
        <td><span class="process-link" onclick="openModal('12.1 Plan Procurement Management')">12.1 Plan Procurement Management</span></td>
        <td><span class="process-link" onclick="openModal('12.2 Conduct Procurements')">12.2 Conduct Procurements</span></td>
        <td><span class="process-link" onclick="openModal('12.3 Control Procurements')">12.3 Control Procurements</span></td>
        <td></td>
    </tr>
`);

Object.assign(processData, {
    "Project Procurement Management": {
        description: "Includes the processes necessary to purchase or acquire products, services, or results needed from outside the project team.",
        processes: ["12.1 Plan Procurement Management", "12.2 Conduct Procurements", "12.3 Control Procurements"]
    },

    "12.1 Plan Procurement Management": {
        inputs: [
            "Project charter",
            "Business documents (Business case, Benefits management plan)",
            "Project management plan (Scope management plan, Quality management plan, Resource management plan, Scope baseline)",
            "Project documents (Milestone list, Project team assignments, Requirements documentation, Requirements traceability matrix, Resource requirements, Risk register, Stakeholder register)",
            "Enterprise environmental factors",
            "Organizational process assets"
        ],
        tools: [
            "Expert judgment",
            "Data gathering (Market research)",
            "Data analysis (Make-or-buy analysis)",
            "Source selection analysis",
            "Meetings"
        ],
        outputs: [
            "Procurement management plan",
            "Procurement strategy",
            "Bid documents",
            "Procurement statement of work",
            "Source selection criteria",
            "Make-or-buy decisions",
            "Independent cost estimates",
            "Change requests",
            "Project documents updates",
            "Organizational process assets updates"
        ]
    },

    "12.2 Conduct Procurements": {
        inputs: [
            "Project management plan (Scope management plan, Requirements management plan, Communications management plan, Risk management plan, Procurement management plan, Configuration management plan, Cost baseline)",
            "Project documents (Lessons learned register, Project schedule, Requirements documentation, Risk register, Stakeholder register)",
            "Procurement documentation",
            "Seller proposals",
            "Enterprise environmental factors",
            "Organizational process assets"
        ],
        tools: [
            "Expert judgment",
            "Advertising",
            "Bidder conferences",
            "Data analysis (Proposal evaluation)",
            "Interpersonal and team skills (Negotiation)"
        ],
        outputs: [
            "Selected sellers",
            "Agreements",
            "Change requests",
            "Project management plan updates",
            "Project documents updates",
            "Organizational process assets updates"
        ]
    },

    "12.3 Control Procurements": {
        inputs: [
            "Project management plan (Requirements management plan, Risk management plan, Procurement management plan, Change management plan, Schedule baseline)",
            "Project documents (Assumption log, Lessons learned register, Milestone list, Quality reports, Requirements documentation, Requirements traceability matrix, Risk register, Stakeholder register)",
            "Agreements",
            "Procurement documentation",
            "Approved change requests",
            "Work performance data",
            "Enterprise environmental factors",
            "Organizational process assets"
        ],
        tools: [
            "Expert judgment",
            "Claims administration",
            "Data analysis (Performance reviews, Earned value analysis, Trend analysis)",
            "Inspection",
            "Audits"
        ],
        outputs: [
            "Closed procurements",
            "Work performance information",
            "Procurement documentation updates",
            "Change requests",
            "Project management plan updates",
            "Project documents updates",
            "Organizational process assets updates"
        ]
    }
});
