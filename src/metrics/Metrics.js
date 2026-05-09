function calculateAverages(processes, timeline) {
    let avgWT = processes.reduce((sum, p) => sum + p.WT, 0) / processes.length;
    let avgTAT = processes.reduce((sum, p) => sum + p.TAT, 0) / processes.length;
    let avgRT = processes.reduce((sum, p) => sum + p.RT, 0) / processes.length;
    
    return { processes, timeline, avgWT, avgTAT, avgRT };
}

function compare(p, s, np) {
    let bestRT = (p.avgRT < s.avgRT &&p.avgRT < np.avgRT ) ? "Priority Scheduling" : (s.avgRT < p.avgRT && s.avgRT < np.avgRT) ? "SRTF Scheduling" :(np.avgRT < p.avgRT && np.avgRT < s.avgRT)? "Nonpreemptive Priority Scheduling ": "Tie (Both Equal)";
    let bestWT = (p.avgWT < s.avgWT &&p.avgWT < np.avgWT ) ? "Priority Scheduling" : (s.avgWT < p.avgWT && s.avgWT < np.avgWT) ? "SRTF Scheduling" :(np.avgWT < p.avgWT && np.avgWT < s.avgWT)? "Nonpreemptive Priority Scheduling ": "Tie (Both Equal)";
    let bestTAT =(p.avgTAT < s.avgTAT &&p.avgTAT < np.avgTAT ) ? "Priority Scheduling" : (s.avgTAT < p.avgTAT && s.avgTAT < np.avgTAT) ? "SRTF Scheduling" :(np.avgTAT < p.avgTAT && np.avgTAT < s.avgTAT)? "Nonpreemptive Priority Scheduling ": "Tie (Both Equal)";


    document.getElementById("bestRtAlgorithm").innerText = bestRT;
    document.getElementById("bestWtAlgorithm").innerText = bestWT;
    document.getElementById("bestTatAlgorithm").innerText = bestTAT;

    let conclusionBox = document.getElementById("finalConclusionBox");
    conclusionBox.className = "alert alert-success"; 
    
    if (p.avgWT < s.avgWT && p.avgWT < np.avgWT) {
        conclusionBox.innerHTML = `<strong>Conclusion:</strong> For this specific set of processes, <strong>Priority Scheduling</strong> performed better overall due to lower waiting times.`;
    } else if (s.avgWT < p.avgWT && s.avgWT < np.avgWT) {
        conclusionBox.innerHTML = `<strong>Conclusion:</strong> For this specific set of processes, <strong>SRTF Scheduling</strong> is more optimal as it minimized the average waiting time effectively.`;
    }else if(np.avgWT < s.avgWT && np.avgWT < p.avgWT) {
        conclusionBox.innerHTML = `<strong>Conclusion:</strong> For this specific set of processes, <strong>Nonpreemptive Priority Scheduling</strong> is more optimal as it minimized the average waiting time effectively.`;
    }else {
        conclusionBox.innerHTML = `<strong>Conclusion:</strong> Both algorithms performed identically for this specific input in terms of average waiting time.`;
    }
}

