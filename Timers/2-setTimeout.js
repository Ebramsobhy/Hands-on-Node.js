// Simulating task scheduler using setTimeout()

const tasks = [
    { name: "Fetch users", delay: 1000 },
    { name: "Send emails", delay: 5000 },
    { name: "Generate report", delay: 7000 }
];

function executeTask(task){
    console.log(`[${new Date().toLocaleTimeString()}] Starting task: ${task.name}`);

    setTimeout(() => {
        console.log(`[${new Date().toLocaleTimeString()}] Completed task: ${task.name}`);
    }, 2000);
}

function scheduleTasks(taskList) {
    console.log("Task Scheduler started...\n");
  
    taskList.forEach(task => {
      setTimeout(() => {
        executeTask(task);
      }, task.delay);
    });
}

scheduleTasks(tasks);