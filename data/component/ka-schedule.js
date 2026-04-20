// KA 6: Project Schedule Management
kaRows.push(`
    <tr>
        <td onclick="openModal('Project Schedule Management')">6. Project Schedule Management</td>
        <td></td>
        <td><span class="process-link" onclick="openModal('6.1 Plan Schedule Management')">6.1 Plan Schedule Management</span><br><span class="process-link" onclick="openModal('6.2 Define Activities')">6.2 Define Activities</span><br><span class="process-link" onclick="openModal('6.3 Sequence Activities')">6.3 Sequence Activities</span><br><span class="process-link" onclick="openModal('6.4 Estimate Activity Durations')">6.4 Estimate Activity Durations</span><br><span class="process-link" onclick="openModal('6.5 Develop Schedule')">6.5 Develop Schedule</span></td>
        <td></td>
        <td><span class="process-link" onclick="openModal('6.6 Control Schedule')">6.6 Control Schedule</span></td>
        <td></td>
    </tr>
`);

Object.assign(processData, {
    "Project Schedule Management": {
        description: "Includes the processes required to manage the timely completion of the project.",
        processes: ["6.1 Plan Schedule Management", "6.2 Define Activities", "6.3 Sequence Activities", "6.4 Estimate Activity Durations", "6.5 Develop Schedule", "6.6 Control Schedule"]
    },

    "6.1 Plan Schedule Management": {
        inputs: [
            "Project charter",
            "Project management plan (Scope management plan, Development approach)",
            "Enterprise environmental factors",
            "Organizational process assets"
        ],
        tools: [
            "Expert judgment",
            "Data analysis (Alternatives analysis)",
            "Meetings"
        ],
        outputs: [
            "Schedule management plan"
        ]
    },

    "6.2 Define Activities": {
        inputs: [
            "Project management plan (Schedule management plan, Scope baseline)",
            "Enterprise environmental factors",
            "Organizational process assets"
        ],
        tools: [
            "Expert judgment",
            "Decomposition",
            "Rolling wave planning",
            "Meetings"
        ],
        outputs: [
            "Activity list",
            "Activity attributes",
            "Milestone list",
            "Change requests",
            "Project management plan updates"
        ]
    },

    "6.3 Sequence Activities": {
        inputs: [
            "Project management plan (Schedule management plan, Scope baseline)",
            "Project documents (Activity attributes, Activity list, Assumption log, Milestone list)",
            "Enterprise environmental factors",
            "Organizational process assets"
        ],
        tools: [
            "Precedence diagramming method (PDM)",
            "Dependency determination and integration",
            "Leads and lags",
            "Project management information system"
        ],
        outputs: [
            "Project schedule network diagrams",
            "Project documents updates"
        ]
    },

    "6.4 Estimate Activity Durations": {
        inputs: [
            "Project management plan (Schedule management plan, Scope baseline)",
            "Project documents (Activity attributes, Activity list, Assumption log, Lessons learned register, Milestone list, Project team assignments, Resource breakdown structure, Resource calendars, Resource requirements, Risk register)",
            "Enterprise environmental factors",
            "Organizational process assets"
        ],
        tools: [
            "Expert judgment",
            "Analogous estimating",
            "Parametric estimating",
            "Three-point estimating",
            "Bottom-up estimating",
            "Data analysis (Alternatives analysis, Reserve analysis)",
            "Decision making",
            "Meetings"
        ],
        outputs: [
            "Duration estimates",
            "Basis of estimates",
            "Project documents updates"
        ]
    },

    "6.5 Develop Schedule": {
        inputs: [
            "Project management plan (Schedule management plan, Scope baseline)",
            "Project documents (Activity attributes, Activity list, Assumption log, Basis of estimates, Duration estimates, Lessons learned register, Milestone list, Project schedule network diagrams, Project team assignments, Resource calendars, Resource requirements, Risk register)",
            "Agreements",
            "Enterprise environmental factors",
            "Organizational process assets"
        ],
        tools: [
            "Schedule network analysis",
            "Critical path method",
            "Resource optimization (Resource leveling, Resource smoothing)",
            "Data analysis (What-if scenario analysis, Simulation)",
            "Leads and lags",
            "Schedule compression (Crashing, Fast tracking)",
            "Project management information system",
            "Agile release planning"
        ],
        outputs: [
            "Schedule baseline",
            "Project schedule",
            "Schedule data",
            "Project calendars",
            "Change requests",
            "Project management plan updates",
            "Project documents updates"
        ]
    },

    "6.6 Control Schedule": {
        inputs: [
            "Project management plan (Schedule management plan, Schedule baseline, Scope baseline, Performance measurement baseline)",
            "Project documents (Lessons learned register, Project calendars, Project schedule, Resource calendars, Schedule data)",
            "Work performance data",
            "Organizational process assets"
        ],
        tools: [
            "Data analysis (Earned value analysis, Iteration burndown chart, Performance reviews, Trend analysis, Variance analysis, What-if scenario analysis)",
            "Critical path method",
            "Project management information system",
            "Resource optimization",
            "Leads and lags",
            "Schedule compression"
        ],
        outputs: [
            "Work performance information",
            "Schedule forecasts",
            "Change requests",
            "Project management plan updates",
            "Project documents updates"
        ]
    }
});
