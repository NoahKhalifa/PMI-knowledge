// KA 13: Project Stakeholder Management
kaRows.push(`
    <tr>
        <td onclick="openModal('Project Stakeholder Management')">13. Project Stakeholder Management</td>
        <td><span class="process-link" onclick="openModal('13.1 Identify Stakeholders')">13.1 Identify Stakeholders</span></td>
        <td><span class="process-link" onclick="openModal('13.2 Plan Stakeholder Engagement')">13.2 Plan Stakeholder Engagement</span></td>
        <td><span class="process-link" onclick="openModal('13.3 Manage Stakeholder Engagement')">13.3 Manage Stakeholder Engagement</span></td>
        <td><span class="process-link" onclick="openModal('13.4 Monitor Stakeholder Engagement')">13.4 Monitor Stakeholder Engagement</span></td>
        <td></td>
    </tr>
`);

Object.assign(processData, {
    "Project Stakeholder Management": {
        description: "Includes the processes required to identify the people, groups, or organizations that could impact or be impacted by the project, to analyze stakeholder expectations and their impact on the project.",
        processes: ["13.1 Identify Stakeholders", "13.2 Plan Stakeholder Engagement", "13.3 Manage Stakeholder Engagement", "13.4 Monitor Stakeholder Engagement"]
    },

    "13.1 Identify Stakeholders": {
        inputs: [
            "Project charter",
            "Business documents (Business case, Benefits management plan)",
            "Project management plan (Communications management plan, Stakeholder engagement plan)",
            "Project documents (Change log, Issue log, Requirements documentation)",
            "Agreements",
            "Enterprise environmental factors",
            "Organizational process assets"
        ],
        tools: [
            "Expert judgment",
            "Data gathering (Questionnaires and surveys, Brainstorming)",
            "Data analysis (Stakeholder analysis, Document analysis)",
            "Data representation (Stakeholder mapping/representation)",
            "Meetings"
        ],
        outputs: [
            "Stakeholder register",
            "Change requests",
            "Project management plan updates",
            "Project documents updates"
        ]
    },

    "13.2 Plan Stakeholder Engagement": {
        inputs: [
            "Project charter",
            "Project management plan (Resource management plan, Communications management plan, Risk management plan)",
            "Project documents (Assumption log, Change log, Issue log, Project schedule, Risk register, Stakeholder register)",
            "Agreements",
            "Enterprise environmental factors",
            "Organizational process assets"
        ],
        tools: [
            "Expert judgment",
            "Data gathering (Benchmarking)",
            "Data analysis (Assumption and constraint analysis, Root cause analysis)",
            "Decision making (Prioritization/ranking)",
            "Data representation (Mind mapping, Stakeholder engagement assessment matrix)",
            "Meetings"
        ],
        outputs: [
            "Stakeholder engagement plan"
        ]
    },

    "13.3 Manage Stakeholder Engagement": {
        inputs: [
            "Project management plan (Communications management plan, Risk management plan, Stakeholder engagement plan, Change management plan)",
            "Project documents (Change log, Issue log, Lessons learned register, Stakeholder register)",
            "Enterprise environmental factors",
            "Organizational process assets"
        ],
        tools: [
            "Expert judgment",
            "Communication skills",
            "Interpersonal and team skills (Conflict management, Cultural awareness, Negotiation, Observation/conversation, Political awareness)",
            "Ground rules",
            "Meetings"
        ],
        outputs: [
            "Change requests",
            "Project management plan updates",
            "Project documents updates"
        ]
    },

    "13.4 Monitor Stakeholder Engagement": {
        inputs: [
            "Project management plan (Resource management plan, Communications management plan, Stakeholder engagement plan)",
            "Project documents (Issue log, Lessons learned register, Project communications, Risk register, Stakeholder register)",
            "Work performance data",
            "Enterprise environmental factors",
            "Organizational process assets"
        ],
        tools: [
            "Data analysis (Alternatives analysis, Root cause analysis, Stakeholder analysis)",
            "Decision making (Multicriteria decision analysis, Voting)",
            "Data representation (Stakeholder engagement assessment matrix)",
            "Communication skills (Feedback, Presentations)",
            "Interpersonal and team skills (Active listening, Cultural awareness, Leadership, Networking, Political awareness)",
            "Meetings"
        ],
        outputs: [
            "Work performance information",
            "Change requests",
            "Project management plan updates",
            "Project documents updates"
        ]
    }
});
