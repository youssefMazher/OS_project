function preemptivePriority(processes) {
    let n = processes.length;
    let remaining = processes.map(p => p.burst);
    let start_time = new Array(n).fill(-1);
    let completed_count = 0;
    let current_time = 0;
    let timeline = [];

    while (completed_count < n) {
        let best_process = -1;
        for (let i = 0; i < n; i++) {
            if (processes[i].arrival <= current_time && remaining[i] > 0) {
                if (best_process === -1 || processes[i].priority < processes[best_process].priority) {
                    best_process = i;
                } else if (processes[i].priority === processes[best_process].priority) {
                    if (processes[i].arrival < processes[best_process].arrival) {
                        best_process = i;
                    } else if ( processes[i].arrival === processes[best_process].arrival){
                        if(i < best_process){best_process = i;}
                    }
                }
            }
        }

        if (best_process === -1) {
            timeline.push("Idle");
            current_time++;
        } else {
            if (start_time[best_process] === -1) {
                start_time[best_process] = current_time;
                processes[best_process].RT = start_time[best_process] - processes[best_process].arrival;
            }

            timeline.push(processes[best_process].id);
            remaining[best_process]--;
            current_time++;

            if (remaining[best_process] === 0) {
                completed_count++;
                processes[best_process].TAT = current_time - processes[best_process].arrival;
                processes[best_process].WT = processes[best_process].TAT - processes[best_process].burst;
            }
        }
    }

    return calculateAverages(processes, timeline);
}
