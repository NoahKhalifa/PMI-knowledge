// KA 10: Project Communications Management
kaRows.push(`
    <tr>
        <td onclick="openModal('Project Communications Management')">10. Project Communications Management</td>
        <td></td>
        <td><span class="process-link" onclick="openModal('10.1 Plan Communications Management')">10.1 Plan Communications Management</span></td>
        <td><span class="process-link" onclick="openModal('10.2 Manage Communications')">10.2 Manage Communications</span></td>
        <td><span class="process-link" onclick="openModal('10.3 Monitor Communications')">10.3 Monitor Communications</span></td>
        <td></td>
    </tr>
`);

Object.assign(processData, {
    "Project Communications Management": {
        description: "Includes the processes necessary to ensure that the information needs of the project and its stakeholders are met through development of artifacts and implementation of activities designed to achieve effective information exchange.",
        processes: ["10.1 Plan Communications Management", "10.2 Manage Communications", "10.3 Monitor Communications"]
    },

    "10.1 Plan Communications Management": {
        inputs: [
            "Project charter",
            "Project management plan (Resource management plan, Stakeholder engagement plan)",
            "Project documents (Requirements documentation, Stakeholder register)",
            "Enterprise environmental factors",
            "Organizational process assets"
        ],
        tools: [
            "Expert judgment",
            "Communication requirements analysis",
            "Communication technology",
            "Communication models",
            "Communication methods",
            "Interpersonal and team skills (Communication styles assessment, Political awareness, Cultural awareness)",
            "Data representation (Stakeholder engagement assessment matrix)",
            "Meetings"
        ],
        outputs: [
            "Communications management plan",
            "Project management plan updates",
            "Project documents updates"
        ]
    },

    "10.2 Manage Communications": {
        inputs: [
            "Project management plan (Resource management plan, Communications management plan, Stakeholder engagement plan)",
            "Project documents (Change log, Issue log, Lessons learned register, Quality reports, Risk report, Stakeholder register)",
            "Work performance reports",
            "Enterprise environmental factors",
            "Organizational process assets"
        ],
        tools: [
            "Communication technology",
            "Communication methods",
            "Communication skills (Communication competence, Feedback, Nonverbal, Presentations, Writing style)",
            "Project management information system",
            "Project reporting",
            "Interpersonal and team skills (Active listening, Conflict management, Cultural awareness, Meeting management, Networking, Political awareness)",
            "Meetings"
        ],
        outputs: [
            "Project communications",
            "Project management plan updates",
            "Project documents updates",
            "Organizational process assets updates"
        ]
    },

    "10.3 Monitor Communications": {
        inputs: [
            "Project management plan (Resource management plan, Communications management plan, Stakeholder engagement plan)",
            "Project documents (Issue log, Lessons learned register, Project communications)",
            "Work performance data",
            "Enterprise environmental factors",
            "Organizational process assets"
        ],
        tools: [
            "Expert judgment",
            "Project management information system",
            "Data representation (Stakeholder engagement assessment matrix)",
            "Interpersonal and team skills (Observation/conversation)",
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
