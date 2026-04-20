// Build tabContent["0-1"] — Project Knowledge Areas (sub-tab 2)
tabContent["0-1"] = `
<div class="section-header">
    <div class="icon pmp">📋</div>
    <h2>Project Knowledge Areas<small>PMBOK 6th Edition — Process Group and Knowledge Area Mapping</small></h2>
</div>
<div class="table-wrapper">
<table>
    <tr>
        <th>Knowledge Areas</th>
        <th>Initiating</th>
        <th>Planning</th>
        <th>Executing</th>
        <th>Monitoring & Controlling</th>
        <th>Closing</th>
    </tr>
    ${kaRows.join('\n')}
</table>
</div>
`;
