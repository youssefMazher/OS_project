function calculateAverages(processes, timeline) {
    let avgWT = processes.reduce((sum, p) => sum + p.WT, 0) / processes.length;
    let avgTAT = processes.reduce((sum, p) => sum + p.TAT, 0) / processes.length;
    let avgRT = processes.reduce((sum, p) => sum + p.RT, 0) / processes.length;
    
    return { processes, timeline, avgWT, avgTAT, avgRT };
}

function compare(p, s, np) {
    
    function getBestAlgorithm(pVal, sVal, npVal) {
        let minVal = Math.min(pVal, sVal, npVal);
        let winners = [];
        
        if (pVal === minVal) winners.push("Preemptive Priority");
        if (sVal === minVal) winners.push("SRTF");
        if (npVal === minVal) winners.push("Non-Preemptive Priority");
        
        if (winners.length === 3) return "Tie (All Equal)";
        return winners.join(" & ");
    }

    let bestRT = getBestAlgorithm(p.avgRT, s.avgRT, np.avgRT);
    let bestWT = getBestAlgorithm(p.avgWT, s.avgWT, np.avgWT);
    let bestTAT = getBestAlgorithm(p.avgTAT, s.avgTAT, np.avgTAT);

    document.getElementById("bestRtAlgorithm").innerText = bestRT;
    document.getElementById("bestWtAlgorithm").innerText = bestWT;
    document.getElementById("bestTatAlgorithm").innerText = bestTAT;

    let conclusionBox = document.getElementById("finalConclusionBox");
    conclusionBox.className = "alert alert-success"; 
    
    let minWT = Math.min(p.avgWT, s.avgWT, np.avgWT);
    let winnersWT = [];
    
    if (p.avgWT === minWT) winnersWT.push("<strong>Preemptive Priority</strong>");
    if (s.avgWT === minWT) winnersWT.push("<strong>SRTF</strong>");
    if (np.avgWT === minWT) winnersWT.push("<strong>Non-Preemptive Priority</strong>");

    if (winnersWT.length === 3) {
        conclusionBox.innerHTML = `<strong>Conclusion:</strong> All three algorithms performed identically for this specific input in terms of average waiting time.`;
    } else if (winnersWT.length === 2) {
        conclusionBox.innerHTML = `<strong>Conclusion:</strong> For this specific set of processes, ${winnersWT.join(" and ")} performed best as they equally minimized the average waiting time.`;
    } else {
        conclusionBox.innerHTML = `<strong>Conclusion:</strong> For this specific set of processes, ${winnersWT[0]} is more optimal as it minimized the average waiting time effectively.`;
    }
}

