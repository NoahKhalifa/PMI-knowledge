// KA 9: Project Resource Management
kaRows.push(`
    <tr>
        <td onclick="openModal('Project Resource Management')">9. Project Resource Management</td>
        <td></td>
        <td><span class="process-link" onclick="openModal('9.1 Plan Resource Management')">9.1 Plan Resource Management</span><br><span class="process-link" onclick="openModal('9.2 Estimate Activity Resources')">9.2 Estimate Activity Resources</span></td>
        <td><span class="process-link" onclick="openModal('9.3 Acquire Resources')">9.3 Acquire Resources</span><br><span class="process-link" onclick="openModal('9.4 Develop Team')">9.4 Develop Team</span><br><span class="process-link" onclick="openModal('9.5 Manage Team')">9.5 Manage Team</span></td>
        <td><span class="process-link" onclick="openModal('9.6 Control Resources')">9.6 Control Resources</span></td>
        <td></td>
    </tr>
`);

Object.assign(processData, {
    "Project Resource Management": {
        description: "Includes the processes to identify, acquire, and manage the resources needed for the successful completion of the project.",
        processes: ["9.1 Plan Resource Management", "9.2 Estimate Activity Resources", "9.3 Acquire Resources", "9.4 Develop Team", "9.5 Manage Team", "9.6 Control Resources"]
    },

    "9.1 Plan Resource Management": {
        inputs: [
            "Project charter",
            "Project management plan (Quality management plan, Scope baseline)",
            "Project documents (Project schedule, Requirements documentation, Risk register, Stakeholder register)",
            "Enterprise environmental factors",
            "Organizational process assets"
        ],
        tools: [
            "Expert judgment",
            "Data representation (Hierarchical charts, Responsibility assignment matrix, Text-oriented formats)",
            "Organizational theory",
            "Meetings"
        ],
        outputs: [
            "Resource management plan",
            "Team charter",
            "Project documents updates"
        ]
    },

    "9.2 Estimate Activity Resources": {
        inputs: [
            "Project management plan (Resource management plan, Scope baseline)",
            "Project documents (Activity attributes, Activity list, Assumption log, Cost estimates, Resource calendars, Risk register)",
            "Enterprise environmental factors",
            "Organizational process assets"
        ],
        tools: [
            "Expert judgment",
            "Bottom-up estimating",
            "Analogous estimating",
            "Parametric estimating",
            "Data analysis (Alternatives analysis)",
            "Project management information system",
            "Meetings"
        ],
        outputs: [
            "Resource requirements",
            "Basis of estimates",
            "Resource breakdown structure",
            "Project documents updates"
        ]
    },

    "9.3 Acquire Resources": {
        inputs: [
            "Project management plan (Resource management plan, Procurement management plan, Cost baseline)",
            "Project documents (Project schedule, Resource calendars, Resource requirements, Stakeholder register)",
            "Enterprise environmental factors",
            "Organizational process assets"
        ],
        tools: [
            "Decision making (Multicriteria decision analysis)",
            "Interpersonal and team skills (Negotiation)",
            "Pre-assignment",
            "Virtual teams"
        ],
        outputs: [
            "Physical resource assignments",
            "Project team assignments",
            "Resource calendars",
            "Change requests",
            "Project management plan updates",
            "Project documents updates",
            "Enterprise environmental factors updates",
            "Organizational process assets updates"
        ]
    },

    "9.4 Develop Team": {
        inputs: [
            "Project management plan (Resource management plan)",
            "Project documents (Lessons learned register, Project schedule, Project team assignments, Resource calendars, Team charter)",
            "Enterprise environmental factors",
            "Organizational process assets"
        ],
        tools: [
            "Colocation",
            "Virtual teams",
            "Communication technology",
            "Interpersonal and team skills (Conflict management, Influencing, Motivation, Negotiation, Team building)",
            "Recognition and rewards",
            "Training",
            "Individual and team assessments",
            "Meetings"
        ],
        outputs: [
            "Team performance assessments",
            "Change requests",
            "Project management plan updates",
            "Project documents updates",
            "Enterprise environmental factors updates",
            "Organizational process assets updates"
        ]
    },

    "9.5 Manage Team": {
        inputs: [
            "Project management plan (Resource management plan)",
            "Project documents (Issue log, Lessons learned register, Project team assignments, Team charter)",
            "Work performance reports",
            "Team performance assessments",
            "Enterprise environmental factors",
            "Organizational process assets"
        ],
        tools: [
            "Interpersonal and team skills (Conflict management, Decision making, Emotional intelligence, Influencing, Leadership)",
            "Project management information system"
        ],
        outputs: [
            "Change requests",
            "Project management plan updates",
            "Project documents updates",
            "Enterprise environmental factors updates"
        ]
    },

    "9.6 Control Resources": {
        inputs: [
            "Project management plan (Resource management plan)",
            "Project documents (Issue log, Lessons learned register, Physical resource assignments, Project schedule, Resource breakdown structure, Resource requirements, Risk register)",
            "Work performance data",
            "Agreements",
            "Organizational process assets"
        ],
        tools: [
            "Data analysis (Alternatives analysis, Cost-benefit analysis, Performance reviews, Trend analysis)",
            "Problem solving",
            "Interpersonal and team skills (Negotiation, Influencing)",
            "Project management information system"
        ],
        outputs: [
            "Work performance information",
            "Change requests",
            "Project management plan updates",
            "Project documents updates"
        ]
    }
});
