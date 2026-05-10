# Priority-vs-SRTF Comparison
## Team Members:
1-Youssef Ahmed Mohamed Mazher

2- Mohamed Yousry Fouad Mohamed

3- Ahmed Alaa Kamal Hussein

4- Jana Mohamed Shebl Ibrahim

5- Haneen Khaled Sayed Masoud

6- Malak Refaat Farag Abd elghany

7- Malak Wael Mohamed Abd elhady

## Project Description:

-This project is an Operating System CPU scheduling simulator.

-It compares two algorithms: Priority & SRTF.

-It calculates and visualizes the waiting time (WT) , Turnaround time(TAT) , Response time(RT) ,and generates a Gantt chart for the processes.


## Built With:
- HTML5:  For the core structure of the simulator.
- Bootstrap 5: Used for responsive layout, styled buttons, and professional-looking tables.
- JavaScript:  For the scheduling logic, calculations, and dynamic UI updates.

## Repository Structure:

src/: Main source code organized into packages (model, scheduler, GUI, metrics, util, assets).

test-cases/: contain the documentation for the 4 required test cases.

Screenshots/: contain the Gantt charts and the execution screenshots.

assets/: contain details about used CPU algoriithms and pseudocode.


## Algorithms Explained

### 1-Priority Scheduling:

-	A priority number is associated with each process.

-	CPU is allocated to the process with the highest priority.
  
-	The smallest priority number is the highest priority.
  
-	It can be preemptive (interrupts the current process if a higher priority arrives) or non-preemptive (there isn't any interrupts in other words CPU doesn't stop running any process until it terminates)

-	Tie-Breaking Rule: If two processes have the same priority level, the process with the earliest Arrival Time (FCFS) is selected or If they arrive at the exact  same time, the process with the smaller PID (Index) is selected first..
  
-	Problem: the starvation problem (Low-priority processes may wait indefinitely and never execute).
  
-	Solution: Aging – as time progresses increase the priority of the process



  ### 2-Shortest Remaining Time First (SRTF):

 - SRTF is the preemptive version of Shortest Job First (SJF) scheduling (always preemptive).
  
 - Shortest Job First (SJF) scheduling is special case of Priority.
   
 - When a new process arrives in the ready queue the scheduler compares the remaining time of the current process with the burst time of the new one.

- The process with the shortest remaining time is selected for execution (Remaining Time = Burst Time − Executed Time).

- Tie-Breaking Rule: If remaining times are equal, the earliest Arrival Time is used.
- If they arrive at the exact same time, the process with the smaller ID runs first.
- If a new process arrives with a priority or remaining time equal to the currently running process, the system will not preempt. The current process continues to run to minimize Context Switching overhead.
  
- It is considered optimal because it provides the minimum average waiting time for a given set of processes.

- Disadvantage: It requires knowing or predicting the length of the next CPU burst, which is often unknown.

## Comparison quality & Fairness:

- Fairness: Priority scheduling is "Policy-based" (favors important tasks) but is less fair because of Starvation. SRTF is "Performance-based" and more efficient but can also starve very long processes.
  
- Efficiency: SRTF typically yields the lowest Average Waiting Time compared to Priority scheduling.

- Overhead: Preemptive modes (SRTF/Preemptive Priority) have higher overhead due to frequent Context Switching, while Non-Preemptive is more stable but may lead to the "Convoy Effect".


  ## Mathematical Formulas:

- Turnaround Time( TAT) : is an amount of time to execute a specific process.
  
        Turn Around Time = Completion Time – Arrival Time
  Or
  
        Turnaround time = Burst time + Waiting time



-  Waiting time: Waiting time is an amount that specific process needs to wait in the ready queue.
  
        Waiting Time = Turn Around Time – Burst Time
-  Average waiting time:

       Avg WT = (sum Waiting Times)/(Number of Processes)

-  Average Turnarroundtime:
  
       Avg TAT = (sum Turnaround Times)/(Number of Processes)

-   Response time: It is an amount to time in which the request was submitted until 
     the first response is produced
    
            Response time = FirstStartExcussion − ArrivalTime



##  Test Scenarios & Simulation Results

To demonstrate the accuracy and reliability of our scheduling algorithms, we have documented 4 different scenarios covering various edge cases:

| Scenario | Focus | Link |
| :--- | :--- | :--- |
| Scenario A | Preemption & Priority Comparison | [View Details](./test-cases/Scenario_A.md) |
| Scenario B | Long High-Priority vs. Short Jobs | [View Details](./test-cases/Scenario_B.md) |
| Scenario C | Identical Behavior (Priority vs. SRTF Tie) | [View Details](./test-cases/Scenario_C.md) |
| Scenario D | Input Validation & Error Handling | [View Details](./test-cases/Scenario_D.md) |

##  How to Run 
1- git clone [(https://github.com/youssefMazher/OS_project.git)]

2- Open Project Folder: Navigate to the project directory on your computer.

3- Go to Source: Open the src folder.

4- Launch: Right-click index.html and open it with any web browser (Chrome, Firefox, or Edge).

