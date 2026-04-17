const processData = {

    // ===== 4. PROJECT INTEGRATION MANAGEMENT =====
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
    },

    // ===== 5. PROJECT SCOPE MANAGEMENT =====
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
    },

    // ===== 6. PROJECT SCHEDULE MANAGEMENT =====
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
    },

    // ===== 7. PROJECT COST MANAGEMENT =====
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
    },

    // ===== 8. PROJECT QUALITY MANAGEMENT =====
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
    },

    // ===== 9. PROJECT RESOURCE MANAGEMENT =====
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
    },

    // ===== 10. PROJECT COMMUNICATIONS MANAGEMENT =====
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
    },

    // ===== 11. PROJECT RISK MANAGEMENT =====
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
    },

    // ===== 12. PROJECT PROCUREMENT MANAGEMENT =====
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
    },

    // ===== 13. PROJECT STAKEHOLDER MANAGEMENT =====
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
};
