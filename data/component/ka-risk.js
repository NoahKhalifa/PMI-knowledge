// KA 11: Project Risk Management
kaRows.push(`
    <tr>
        <td onclick="openModal('Project Risk Management')">11. Project Risk Management</td>
        <td></td>
        <td><span class="process-link" onclick="openModal('11.1 Plan Risk Management')">11.1 Plan Risk Management</span><br><span class="process-link" onclick="openModal('11.2 Identify Risks')">11.2 Identify Risks</span><br><span class="process-link" onclick="openModal('11.3 Perform Qualitative Risk Analysis')">11.3 Perform Qualitative Risk Analysis</span><br><span class="process-link" onclick="openModal('11.4 Perform Quantitative Risk Analysis')">11.4 Perform Quantitative Risk Analysis</span><br><span class="process-link" onclick="openModal('11.5 Plan Risk Responses')">11.5 Plan Risk Responses</span></td>
        <td><span class="process-link" onclick="openModal('11.6 Implement Risk Responses')">11.6 Implement Risk Responses</span></td>
        <td><span class="process-link" onclick="openModal('11.7 Monitor Risks')">11.7 Monitor Risks</span></td>
        <td></td>
    </tr>
`);

Object.assign(processData, {
    "Project Risk Management": {
        description: "Includes the processes of conducting risk management planning, identification, analysis, response planning, response implementation, and monitoring risk on a project.",
        processes: ["11.1 Plan Risk Management", "11.2 Identify Risks", "11.3 Perform Qualitative Risk Analysis", "11.4 Perform Quantitative Risk Analysis", "11.5 Plan Risk Responses", "11.6 Implement Risk Responses", "11.7 Monitor Risks"]
    },

    "11.1 Plan Risk Management": {
        inputs: [
            "Project charter",
            "Project management plan (all components)",
            "Project documents (Stakeholder register)",
            "Enterprise environmental factors",
            "Organizational process assets"
        ],
        tools: [
            "Expert judgment",
            "Data analysis (Stakeholder analysis)",
            "Meetings"
        ],
        outputs: [
            "Risk management plan"
        ]
    },

    "11.2 Identify Risks": {
        inputs: [
            "Project management plan (Requirements management plan, Schedule management plan, Cost management plan, Quality management plan, Resource management plan, Risk management plan, Scope baseline, Schedule baseline, Cost baseline)",
            "Project documents (Assumption log, Cost estimates, Duration estimates, Issue log, Lessons learned register, Requirements documentation, Resource requirements, Stakeholder register)",
            "Agreements",
            "Procurement documentation",
            "Enterprise environmental factors",
            "Organizational process assets"
        ],
        tools: [
            "Expert judgment",
            "Data gathering (Brainstorming, Checklists, Interviews)",
            "Data analysis (Root cause analysis, Assumption and constraint analysis, SWOT analysis, Document analysis)",
            "Interpersonal and team skills (Facilitation)",
            "Prompt lists",
            "Meetings"
        ],
        outputs: [
            "Risk register",
            "Risk report",
            "Project documents updates"
        ]
    },

    "11.3 Perform Qualitative Risk Analysis": {
        inputs: [
            "Project management plan (Risk management plan)",
            "Project documents (Assumption log, Risk register, Stakeholder register)",
            "Enterprise environmental factors",
            "Organizational process assets"
        ],
        tools: [
            "Expert judgment",
            "Data gathering (Interviews)",
            "Data analysis (Risk data quality assessment, Risk probability and impact assessment)",
            "Interpersonal and team skills (Facilitation)",
            "Risk categorization",
            "Data representation (Probability and impact matrix, Hierarchical charts)",
            "Meetings"
        ],
        outputs: [
            "Project documents updates (Assumption log, Issue log, Risk register, Risk report)"
        ]
    },

    "11.4 Perform Quantitative Risk Analysis": {
        inputs: [
            "Project management plan (Risk management plan, Scope baseline, Schedule baseline, Cost baseline)",
            "Project documents (Assumption log, Basis of estimates, Cost estimates, Cost forecasts, Duration estimates, Milestone list, Resource requirements, Risk register, Risk report, Schedule forecasts)",
            "Enterprise environmental factors",
            "Organizational process assets"
        ],
        tools: [
            "Expert judgment",
            "Data gathering (Interviews)",
            "Interpersonal and team skills (Facilitation)",
            "Representations of uncertainty",
            "Data analysis (Simulations, Sensitivity analysis, Decision tree analysis, Influence diagrams)"
        ],
        outputs: [
            "Project documents updates (Risk report)"
        ]
    },

    "11.5 Plan Risk Responses": {
        inputs: [
            "Project management plan (Resource management plan, Risk management plan, Cost baseline)",
            "Project documents (Lessons learned register, Project schedule, Project team assignments, Resource calendars, Risk register, Risk report, Stakeholder register)",
            "Enterprise environmental factors",
            "Organizational process assets"
        ],
        tools: [
            "Expert judgment",
            "Data gathering (Interviews)",
            "Interpersonal and team skills (Facilitation)",
            "Strategies for threats (Escalate, Avoid, Transfer, Mitigate, Accept)",
            "Strategies for opportunities (Escalate, Exploit, Share, Enhance, Accept)",
            "Contingent response strategies",
            "Strategies for overall project risk",
            "Data analysis (Alternatives analysis, Cost-benefit analysis)",
            "Decision making (Multicriteria decision analysis)"
        ],
        outputs: [
            "Change requests",
            "Project management plan updates",
            "Project documents updates"
        ]
    },

    "11.6 Implement Risk Responses": {
        inputs: [
            "Project management plan (Risk management plan)",
            "Project documents (Lessons learned register, Risk register, Risk report)",
            "Organizational process assets"
        ],
        tools: [
            "Expert judgment",
            "Interpersonal and team skills (Influencing)",
            "Project management information system"
        ],
        outputs: [
            "Change requests",
            "Project documents updates"
        ]
    },

    "11.7 Monitor Risks": {
        inputs: [
            "Project management plan (Risk management plan)",
            "Project documents (Issue log, Lessons learned register, Risk register, Risk report)",
            "Work performance data",
            "Work performance reports"
        ],
        tools: [
            "Data analysis (Technical performance analysis, Reserve analysis)",
            "Audits",
            "Meetings"
        ],
        outputs: [
            "Work performance information",
            "Change requests",
            "Project management plan updates",
            "Project documents updates",
            "Organizational process assets updates"
        ]
    }
});
