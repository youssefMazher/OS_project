let processesData = [];
let processCount = 0;

function addProcess() {
    let arrivalInput = document.getElementById("ArrivalTime").value;
    let burstInput = document.getElementById("BurstTime").value;
    let priorityInput = document.getElementById("PriorityValue").value;

    if (arrivalInput === "" || burstInput === "" || priorityInput === "") {
        alert("Please fill all fields (Arrival, Burst, Priority)!");
        return;
    }

    if (parseInt(arrivalInput) < 0 || parseInt(burstInput) <= 0 || parseInt(priorityInput) < 0){
        alert("Invalid values!");
        return;
    }

    processCount++;
    let pId = "P" + processCount;

    processesData.push({
        id: pId,
        arrival: parseInt(arrivalInput),
        burst: parseInt(burstInput),
        priority: parseInt(priorityInput)
    });

    let tableBody = document.getElementById("processTableBody");
    
    if (processCount === 1) {
        tableBody.innerHTML = "";
    }

    let row = document.createElement("tr");
    row.innerHTML = `
        <td>${pId}</td>
        <td>${arrivalInput}</td>
        <td>${burstInput}</td>
        <td>${priorityInput}</td>
    `;
    tableBody.appendChild(row);

    document.getElementById("ArrivalTime").value = "";
    document.getElementById("BurstTime").value = "";
    document.getElementById("PriorityValue").value = "";
}

function runSimulation() {
    if (processesData.length === 0) {
        alert("Please add at least one process!");
        return;
    }

    let priorityResult = preemptivePriority(JSON.parse(JSON.stringify(processesData)));
    let srtfResult = srtfScheduling(JSON.parse(JSON.stringify(processesData)));

    drawGantt("priorityGantt", priorityResult.timeline);
    drawGantt("strfGantt", srtfResult.timeline);

    drawTable("priorityResultsBody", priorityResult.processes, "priorityAvg");
    drawTable("srtfResultsBody", srtfResult.processes, "srtfAvg");

    compare(priorityResult, srtfResult);
}
function resetAll(){
    processesData = [];
    processCount = 0;
    document.getElementById("processTableBody" ).innerHTML = `

    <tr>
        <td colspan="4" class="text-muted">No processes added yet.</td>
    </tr> `;
    
    document.getElementById("priorityGantt").innerHTML = "";
    document.getElementById("strfGantt").innerHTML = "";
}

