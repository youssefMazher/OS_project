function drawGantt(elementId, timeline) {
    let container = document.getElementById(elementId);
    container.innerHTML = "";

    if (timeline.length === 0) return;

    let currentBlock = timeline[0];
    let duration = 1;

    for (let i = 1; i <= timeline.length; i++) {
        if (i < timeline.length && timeline[i] === currentBlock) {
            duration++;
        } else {
            let div = document.createElement("div");
            div.className = "d-inline-block border text-center p-2 m-1 rounded shadow-sm";
            div.style.minWidth = "60px";
            div.style.backgroundColor = currentBlock === "Idle" ? "#e9ecef" : "#cce5ff";
            div.innerHTML = `<strong class="text-primary">${currentBlock}</strong><br><small class="text-muted">${duration} unit(s)</small>`;
            container.appendChild(div);

            if (i < timeline.length) {
                currentBlock = timeline[i];
                duration = 1;
            }
        }
    }
}

function drawTable(tbodyId, processes, prefixId) {
    let tbody = document.getElementById(tbodyId);
    tbody.innerHTML = "";

    processes.forEach(p => {
        tbody.innerHTML += `
            <tr>
                <td><strong>${p.id}</strong></td>
                <td>${p.RT}</td>
                <td>${p.WT}</td>
                <td>${p.TAT}</td>
            </tr>
        `;
    });

    let avgWT = processes.reduce((sum, p) => sum + p.WT, 0) / processes.length;
    let avgTAT = processes.reduce((sum, p) => sum + p.TAT, 0) / processes.length;
    let avgRT = processes.reduce((sum, p) => sum + p.RT, 0) / processes.length;

    document.getElementById(`${prefixId}RT`).innerText = avgRT.toFixed(2);
    document.getElementById(`${prefixId}WT`).innerText = avgWT.toFixed(2);
    document.getElementById(`${prefixId}TAT`).innerText = avgTAT.toFixed(2);
}