tabContent[0] = `
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

    <tr>
        <td onclick="openModal('Project Integration Management')">4. Project Integration Management</td>
        <td><span class="process-link" onclick="openModal('4.1 Develop Project Charter')">4.1 Develop Project Charter</span></td>
        <td><span class="process-link" onclick="openModal('4.2 Develop Project Management Plan')">4.2 Develop Project Management Plan</span></td>
        <td><span class="process-link" onclick="openModal('4.3 Direct and Manage Project Work')">4.3 Direct and Manage Project Work</span><br><span class="process-link" onclick="openModal('4.4 Manage Project Knowledge')">4.4 Manage Project Knowledge</span></td>
        <td><span class="process-link" onclick="openModal('4.5 Monitor and Control Project Work')">4.5 Monitor and Control Project Work</span><br><span class="process-link" onclick="openModal('4.6 Perform Integrated Change Control')">4.6 Perform Integrated Change Control</span></td>
        <td><span class="process-link" onclick="openModal('4.7 Close Project or Phase')">4.7 Close Project or Phase</span></td>
    </tr>

    <tr>
        <td onclick="openModal('Project Scope Management')">5. Project Scope Management</td>
        <td></td>
        <td><span class="process-link" onclick="openModal('5.1 Plan Scope Management')">5.1 Plan Scope Management</span><br><span class="process-link" onclick="openModal('5.2 Collect Requirements')">5.2 Collect Requirements</span><br><span class="process-link" onclick="openModal('5.3 Define Scope')">5.3 Define Scope</span><br><span class="process-link" onclick="openModal('5.4 Create WBS')">5.4 Create WBS</span></td>
        <td></td>
        <td><span class="process-link" onclick="openModal('5.5 Validate Scope')">5.5 Validate Scope</span><br><span class="process-link" onclick="openModal('5.6 Control Scope')">5.6 Control Scope</span></td>
        <td></td>
    </tr>

    <tr>
        <td onclick="openModal('Project Schedule Management')">6. Project Schedule Management</td>
        <td></td>
        <td><span class="process-link" onclick="openModal('6.1 Plan Schedule Management')">6.1 Plan Schedule Management</span><br><span class="process-link" onclick="openModal('6.2 Define Activities')">6.2 Define Activities</span><br><span class="process-link" onclick="openModal('6.3 Sequence Activities')">6.3 Sequence Activities</span><br><span class="process-link" onclick="openModal('6.4 Estimate Activity Durations')">6.4 Estimate Activity Durations</span><br><span class="process-link" onclick="openModal('6.5 Develop Schedule')">6.5 Develop Schedule</span></td>
        <td></td>
        <td><span class="process-link" onclick="openModal('6.6 Control Schedule')">6.6 Control Schedule</span></td>
        <td></td>
    </tr>

    <tr>
        <td onclick="openModal('Project Cost Management')">7. Project Cost Management</td>
        <td></td>
        <td><span class="process-link" onclick="openModal('7.1 Plan Cost Management')">7.1 Plan Cost Management</span><br><span class="process-link" onclick="openModal('7.2 Estimate Costs')">7.2 Estimate Costs</span><br><span class="process-link" onclick="openModal('7.3 Determine Budget')">7.3 Determine Budget</span></td>
        <td></td>
        <td><span class="process-link" onclick="openModal('7.4 Control Costs')">7.4 Control Costs</span></td>
        <td></td>
    </tr>

    <tr>
        <td onclick="openModal('Project Quality Management')">8. Project Quality Management</td>
        <td></td>
        <td><span class="process-link" onclick="openModal('8.1 Plan Quality Management')">8.1 Plan Quality Management</span></td>
        <td><span class="process-link" onclick="openModal('8.2 Manage Quality')">8.2 Manage Quality</span></td>
        <td><span class="process-link" onclick="openModal('8.3 Control Quality')">8.3 Control Quality</span></td>
        <td></td>
    </tr>

    <tr>
        <td onclick="openModal('Project Resource Management')">9. Project Resource Management</td>
        <td></td>
        <td><span class="process-link" onclick="openModal('9.1 Plan Resource Management')">9.1 Plan Resource Management</span><br><span class="process-link" onclick="openModal('9.2 Estimate Activity Resources')">9.2 Estimate Activity Resources</span></td>
        <td><span class="process-link" onclick="openModal('9.3 Acquire Resources')">9.3 Acquire Resources</span><br><span class="process-link" onclick="openModal('9.4 Develop Team')">9.4 Develop Team</span><br><span class="process-link" onclick="openModal('9.5 Manage Team')">9.5 Manage Team</span></td>
        <td><span class="process-link" onclick="openModal('9.6 Control Resources')">9.6 Control Resources</span></td>
        <td></td>
    </tr>

    <tr>
        <td onclick="openModal('Project Communications Management')">10. Project Communications Management</td>
        <td></td>
        <td><span class="process-link" onclick="openModal('10.1 Plan Communications Management')">10.1 Plan Communications Management</span></td>
        <td><span class="process-link" onclick="openModal('10.2 Manage Communications')">10.2 Manage Communications</span></td>
        <td><span class="process-link" onclick="openModal('10.3 Monitor Communications')">10.3 Monitor Communications</span></td>
        <td></td>
    </tr>

    <tr>
        <td onclick="openModal('Project Risk Management')">11. Project Risk Management</td>
        <td></td>
        <td><span class="process-link" onclick="openModal('11.1 Plan Risk Management')">11.1 Plan Risk Management</span><br><span class="process-link" onclick="openModal('11.2 Identify Risks')">11.2 Identify Risks</span><br><span class="process-link" onclick="openModal('11.3 Perform Qualitative Risk Analysis')">11.3 Perform Qualitative Risk Analysis</span><br><span class="process-link" onclick="openModal('11.4 Perform Quantitative Risk Analysis')">11.4 Perform Quantitative Risk Analysis</span><br><span class="process-link" onclick="openModal('11.5 Plan Risk Responses')">11.5 Plan Risk Responses</span></td>
        <td><span class="process-link" onclick="openModal('11.6 Implement Risk Responses')">11.6 Implement Risk Responses</span></td>
        <td><span class="process-link" onclick="openModal('11.7 Monitor Risks')">11.7 Monitor Risks</span></td>
        <td></td>
    </tr>

    <tr>
        <td onclick="openModal('Project Procurement Management')">12. Project Procurement Management</td>
        <td></td>
        <td><span class="process-link" onclick="openModal('12.1 Plan Procurement Management')">12.1 Plan Procurement Management</span></td>
        <td><span class="process-link" onclick="openModal('12.2 Conduct Procurements')">12.2 Conduct Procurements</span></td>
        <td><span class="process-link" onclick="openModal('12.3 Control Procurements')">12.3 Control Procurements</span></td>
        <td></td>
    </tr>

    <tr>
        <td onclick="openModal('Project Stakeholder Management')">13. Project Stakeholder Management</td>
        <td><span class="process-link" onclick="openModal('13.1 Identify Stakeholders')">13.1 Identify Stakeholders</span></td>
        <td><span class="process-link" onclick="openModal('13.2 Plan Stakeholder Engagement')">13.2 Plan Stakeholder Engagement</span></td>
        <td><span class="process-link" onclick="openModal('13.3 Manage Stakeholder Engagement')">13.3 Manage Stakeholder Engagement</span></td>
        <td><span class="process-link" onclick="openModal('13.4 Monitor Stakeholder Engagement')">13.4 Monitor Stakeholder Engagement</span></td>
        <td></td>
    </tr>
</table>
</div>
`;
