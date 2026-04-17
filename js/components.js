/**
 * Components - Reusable UI components for ITTO rendering with tooltips.
 * Depends on: glossary.js (Vietnamese tooltip data)
 */

// Emoji mapping for ITTO items
const ittoEmoji = {
    // Common Inputs
    'project charter': '📜',
    'project management plan': '📋',
    'business documents': '💼',
    'agreements': '🤝',
    'enterprise environmental factors': '🌐',
    'organizational process assets': '🏢',
    'work performance data': '📊',
    'work performance reports': '📈',
    'work performance information': '📉',
    'change requests': '🔄',
    'approved change requests': '✅',
    'project documents': '📁',
    'assumption log': '📝',
    'lessons learned register': '📖',
    'risk register': '⚠️',
    'issue log': '🚩',
    'stakeholder register': '👥',
    'requirements documentation': '📄',
    'requirements traceability matrix': '🔗',
    'project schedule': '📅',
    'cost estimates': '💰',
    'cost baseline': '💵',
    'schedule baseline': '⏱️',
    'scope baseline': '🎯',
    'resource calendars': '📆',
    'team charter': '🏷️',
    'project team assignments': '👷',
    'resource management plan': '🧑‍💼',
    'quality management plan': '✨',
    'risk management plan': '🛡️',
    'communications management plan': '📨',
    'procurement management plan': '🛒',
    'stakeholder engagement plan': '🤝',
    'schedule management plan': '🗓️',
    'cost management plan': '💳',
    'scope management plan': '🔍',
    'activity list': '📋',
    'activity attributes': '🏷️',
    'milestone list': '🏁',
    'basis of estimates': '🧮',
    'duration estimates': '⏳',
    'project funding requirements': '🏦',
    'quality metrics': '📐',
    'quality reports': '📊',
    'procurement documentation': '📑',
    'procurement strategy': '🎯',
    'source selection criteria': '☑️',
    'seller proposals': '📩',
    'selected sellers': '🏪',
    'closed procurements': '🔒',
    'final product': '🎁',
    'final report': '📃',

    // Common Tools & Techniques
    'expert judgment': '🧠',
    'data gathering': '🔬',
    'data analysis': '📊',
    'data representation': '📉',
    'meetings': '🤝',
    'interpersonal and team skills': '🗣️',
    'decision making': '⚖️',
    'communication skills': '💬',
    'conflict management': '🕊️',
    'facilitation': '🎙️',
    'negotiation': '🤝',
    'leadership': '👨‍💼',
    'networking': '🌐',
    'political awareness': '🏛️',
    'project management information system': '🖥️',
    'pmis': '🖥️',
    'earned value analysis': '📈',
    'trend analysis': '📉',
    'variance analysis': '📊',
    'critical path method': '🛤️',
    'resource optimization': '⚙️',
    'schedule compression': '⏩',
    'leads and lags': '↔️',
    'precedence diagramming method': '🔀',
    'analogous estimating': '📏',
    'parametric estimating': '📐',
    'three-point estimating': '🎯',
    'bottom-up estimating': '🔢',
    'reserve analysis': '🏦',
    'cost-benefit analysis': '⚖️',
    'quality audits': '🔎',
    'inspection': '🔍',
    'testing': '🧪',
    'multicriteria decision analysis': '📋',
    'alternatives analysis': '🔄',
    'brainstorming': '💡',
    'interviews': '🎤',
    'focus groups': '👥',
    'questionnaires and surveys': '📝',
    'benchmarking': '📏',
    'context diagram': '🗺️',
    'prototypes': '🔧',
    'design for x': '🎨',
    'simulation': '🎲',
    'probability and impact matrix': '🎯',
    'risk categorization': '📂',
    'strategies for threats': '🛡️',
    'strategies for opportunities': '🌟',
    'swot analysis': '📊',
    'assumption and constraint analysis': '🔗',
    'root cause analysis': '🔬',
    'influence diagrams': '🔀',
    'sensitivity analysis': '📈',
    'monte carlo simulation': '🎲',
    'decision tree analysis': '🌳',
    'communication methods': '📡',
    'communication technology': '📱',
    'communication models': '📬',
    'claims administration': '⚖️',
    'advertising': '📢',
    'bidder conferences': '🏛️',
    'proposal evaluation techniques': '📋',

    // Common Outputs
    'project charter': '📜',
    'project management plan': '📋',
    'deliverables': '📦',
    'work performance data': '📊',
    'work performance reports': '📈',
    'work performance information': '📉',
    'change requests': '🔄',
    'project documents updates': '🔃',
    'project management plan updates': '🔃',
    'organizational process assets updates': '🏢',
    'change log': '📝',
    'accepted deliverables': '✅',
    'verified deliverables': '☑️',
    'validated changes': '✔️',
    'final product, service, or result transition': '🎁',
    'final report': '📃',
    'updates': '🔃',
    'risk report': '⚠️',
};

// Emoji mapping for Knowledge Area processes
const processEmoji = {
    // Integration
    '4.1': '📜', '4.2': '📋', '4.3': '🎬', '4.4': '🧠', '4.5': '👁️', '4.6': '🔄', '4.7': '🏁',
    // Scope
    '5.1': '📝', '5.2': '🔬', '5.3': '📄', '5.4': '🧩', '5.5': '✅', '5.6': '🔍',
    // Schedule
    '6.1': '🗓️', '6.2': '📋', '6.3': '🔀', '6.4': '⏳', '6.5': '⏱️', '6.6': '📅',
    // Cost
    '7.1': '💳', '7.2': '💰', '7.3': '💵', '7.4': '📊',
    // Quality
    '8.1': '📐', '8.2': '✨', '8.3': '🔎',
    // Resource
    '9.1': '🧑‍💼', '9.2': '📊', '9.3': '👥', '9.4': '🏋️', '9.5': '👷', '9.6': '🔧',
    // Communications
    '10.1': '📨', '10.2': '📡', '10.3': '📈',
    // Risk
    '11.1': '🛡️', '11.2': '🔍', '11.3': '📊', '11.4': '📉', '11.5': '🎯', '11.6': '⚡', '11.7': '👁️',
    // Procurement
    '12.1': '🛒', '12.2': '📝', '12.3': '📦',
    // Stakeholder
    '13.1': '👤', '13.2': '📋', '13.3': '🤝', '13.4': '👁️',
};

/**
 * Look up Vietnamese tooltip for an ITTO item.
 * Supports exact match and partial/keyword matching.
 */
function getTooltip(text) {
    if (!text) return '';
    const clean = text.replace(/\(.*?\)/g, '').trim();

    // Exact match
    if (glossary[text]) return glossary[text];
    if (glossary[clean]) return glossary[clean];

    // Partial match: find glossary key contained in the text
    for (const key in glossary) {
        if (text.toLowerCase().includes(key.toLowerCase()) || key.toLowerCase().includes(clean.toLowerCase())) {
            return glossary[key];
        }
    }

    return '';
}

/**
 * Get emoji for an ITTO item via fuzzy matching.
 */
function getIttoEmoji(text) {
    const lower = text.toLowerCase().replace(/\(.*?\)/g, '').trim();
    if (ittoEmoji[lower]) return ittoEmoji[lower];
    for (const key in ittoEmoji) {
        if (lower.includes(key) || key.includes(lower)) return ittoEmoji[key];
    }
    return '•';
}

/**
 * Get emoji for a process by its number prefix (e.g. "4.1").
 */
function getProcessEmoji(processName) {
    const match = processName.match(/^(\d+\.\d+)/);
    if (match && processEmoji[match[1]]) return processEmoji[match[1]];
    return '📌';
}

/**
 * Render a single ITTO item with optional tooltip and emoji.
 * @param {string} text - The ITTO item text
 * @returns {string} HTML string
 */
function renderIttoItem(text) {
    const emoji = getIttoEmoji(text);
    const tooltip = getTooltip(text);
    if (tooltip) {
        const safeTooltip = tooltip.replace(/"/g, '&quot;').replace(/'/g, '&#39;');
        return `<li><span class="itto-item">${emoji} ${text}<span class="itto-tooltip">${safeTooltip}</span></span></li>`;
    }
    return `<li>${emoji} ${text}</li>`;
}

/**
 * Render an ITTO section (Inputs, Tools, or Outputs).
 * @param {string} type - 'inputs' | 'tools' | 'outputs'
 * @param {string} icon - Emoji icon
 * @param {string} title - Section title
 * @param {string[]} items - List of items
 * @returns {string} HTML string
 */
function renderIttoSection(type, icon, title, items) {
    let html = `<div class="itto-section ${type}">`;
    html += `<h4>${icon} ${title}</h4>`;
    html += '<ul>';
    (items || []).forEach(item => {
        html += renderIttoItem(item);
    });
    html += '</ul></div>';
    return html;
}

/**
 * Render the full ITTO grid (3 columns: Inputs, Tools & Techniques, Outputs).
 * @param {object} data - Object with inputs[], tools[], outputs[]
 * @returns {string} HTML string
 */
function renderIttoGrid(data) {
    let html = '<div class="itto-grid">';
    html += renderIttoSection('inputs', '📥', 'Inputs', data.inputs);
    html += renderIttoSection('tools', '🔧', 'Tools & Techniques', data.tools);
    html += renderIttoSection('outputs', '📤', 'Outputs', data.outputs);
    html += '</div>';
    return html;
}

/**
 * Render Knowledge Area overview with description and clickable process tags.
 * @param {object} data - Object with description and processes[]
 * @returns {string} HTML string
 */
function renderKnowledgeArea(data) {
    let html = `<p class="ka-description">${data.description}</p>`;
    if (data.processes) {
        html += '<h4 style="font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:#636e72;margin-bottom:12px;">Processes</h4>';
        html += '<div class="ka-processes">';
        data.processes.forEach(p => {
            const safe = p.replace(/'/g, "\\'");
            const emoji = getProcessEmoji(p);
            html += `<span class="process-tag" onclick="openModal('${safe}')">${emoji} ${p}</span>`;
        });
        html += '</div>';
    }
    return html;
}
