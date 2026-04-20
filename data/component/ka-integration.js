// KA 4: Project Integration Management
kaRows.push(`
    <tr>
        <td onclick="openModal('Project Integration Management')">4. Project Integration Management</td>
        <td><span class="process-link" onclick="openModal('4.1 Develop Project Charter')">4.1 Develop Project Charter</span></td>
        <td><span class="process-link" onclick="openModal('4.2 Develop Project Management Plan')">4.2 Develop Project Management Plan</span></td>
        <td><span class="process-link" onclick="openModal('4.3 Direct and Manage Project Work')">4.3 Direct and Manage Project Work</span><br><span class="process-link" onclick="openModal('4.4 Manage Project Knowledge')">4.4 Manage Project Knowledge</span></td>
        <td><span class="process-link" onclick="openModal('4.5 Monitor and Control Project Work')">4.5 Monitor and Control Project Work</span><br><span class="process-link" onclick="openModal('4.6 Perform Integrated Change Control')">4.6 Perform Integrated Change Control</span></td>
        <td><span class="process-link" onclick="openModal('4.7 Close Project or Phase')">4.7 Close Project or Phase</span></td>
    </tr>
`);

Object.assign(processData, {
    "Project Integration Management": {
        description: "Includes processes and activities to identify, define, combine, unify, and coordinate the various processes and project management activities within the Project Management Process Groups.",
        processes: ["4.1 Develop Project Charter", "4.2 Develop Project Management Plan", "4.3 Direct and Manage Project Work", "4.4 Manage Project Knowledge", "4.5 Monitor and Control Project Work", "4.6 Perform Integrated Change Control", "4.7 Close Project or Phase"]
    },

    "4.1 Develop Project Charter": {
        inputs: [
            "Business documents (Business case, Benefits management plan)",
            "Agreements",
            "Enterprise environmental factors",
            "Organizational process assets"
        ],
        tools: [
            "Expert judgment",
            "Data gathering (Brainstorming, Focus groups, Interviews)",
            "Interpersonal and team skills (Conflict management, Facilitation, Meeting management)",
            "Meetings"
        ],
        outputs: [
            "Project charter",
            "Assumption log"
        ]
    },

    "4.2 Develop Project Management Plan": {
        inputs: [
            "Project charter",
            "Outputs from other processes",
            "Enterprise environmental factors",
            "Organizational process assets"
        ],
        tools: [
            "Expert judgment",
            "Data gathering (Brainstorming, Checklists, Focus groups, Interviews)",
            "Interpersonal and team skills (Conflict management, Facilitation, Meeting management)",
            "Meetings"
        ],
        outputs: [
            "Project management plan"
        ]
    },

    "4.3 Direct and Manage Project Work": {
        inputs: [
            "Project management plan",
            "Project documents (Change log, Lessons learned register, Milestone list, Project communications, Project schedule, Requirements traceability matrix, Risk register, Risk report)",
            "Approved change requests",
            "Enterprise environmental factors",
            "Organizational process assets"
        ],
        tools: [
            "Expert judgment",
            "Project management information system (PMIS)",
            "Meetings"
        ],
        outputs: [
            "Deliverables",
            "Work performance data",
            "Issue log",
            "Change requests",
            "Project management plan updates",
            "Project documents updates",
            "Organizational process assets updates"
        ]
    },

    "4.4 Manage Project Knowledge": {
        inputs: [
            "Project management plan",
            "Project documents (Lessons learned register, Project team assignments, Resource breakdown structure, Stakeholder register)",
            "Deliverables",
            "Enterprise environmental factors",
            "Organizational process assets"
        ],
        tools: [
            "Expert judgment",
            "Knowledge management",
            "Information management",
            "Interpersonal and team skills (Active listening, Facilitation, Leadership, Networking, Political awareness)"
        ],
        outputs: [
            "Lessons learned register",
            "Project management plan updates",
            "Organizational process assets updates"
        ]
    },

    "4.5 Monitor and Control Project Work": {
        inputs: [
            "Project management plan",
            "Project documents (Assumption log, Basis of estimates, Cost forecasts, Issue log, Lessons learned register, Milestone list, Quality reports, Risk register, Risk report, Schedule forecasts)",
            "Work performance information",
            "Agreements",
            "Enterprise environmental factors",
            "Organizational process assets"
        ],
        tools: [
            "Expert judgment",
            "Data analysis (Alternatives analysis, Cost-benefit analysis, Earned value analysis, Root cause analysis, Trend analysis, Variance analysis)",
            "Decision making",
            "Meetings"
        ],
        outputs: [
            "Work performance reports",
            "Change requests",
            "Project management plan updates",
            "Project documents updates"
        ]
    },

    "4.6 Perform Integrated Change Control": {
        inputs: [
            "Project management plan (Change management plan, Configuration management plan, Scope baseline, Schedule baseline, Cost baseline)",
            "Project documents (Basis of estimates, Requirements traceability matrix, Risk report)",
            "Work performance reports",
            "Change requests",
            "Enterprise environmental factors",
            "Organizational process assets"
        ],
        tools: [
            "Expert judgment",
            "Change control tools",
            "Data analysis (Alternatives analysis, Cost-benefit analysis)",
            "Decision making (Voting, Autocratic decision making, Multicriteria decision analysis)",
            "Meetings"
        ],
        outputs: [
            "Approved change requests",
            "Project management plan updates",
            "Project documents updates"
        ]
    },

    "4.7 Close Project or Phase": {
        inputs: [
            "Project charter",
            "Project management plan",
            "Project documents (Assumption log, Basis of estimates, Change log, Issue log, Lessons learned register, Milestone list, Project communications, Quality control measurements, Quality reports, Requirements documentation, Risk register, Risk report)",
            "Accepted deliverables",
            "Business documents",
            "Agreements",
            "Procurement documentation",
            "Organizational process assets"
        ],
        tools: [
            "Expert judgment",
            "Data analysis (Document analysis, Regression analysis, Trend analysis, Variance analysis)",
            "Meetings"
        ],
        outputs: [
            "Project documents updates",
            "Final product, service, or result transition",
            "Final report",
            "Organizational process assets updates"
        ]
    }
});
