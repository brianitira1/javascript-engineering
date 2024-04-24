//the eventloop in javascript
function executeAsyncTasks() {
  function performTask(taskName, delay) {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(`${taskName} completed after ${delay / 1000} seconds`);
        resolve();
      }, delay);
    });
  }

  async function runTasks() {
    const tasks = [
      { name: "Task 1", delay: 2000 },
      { name: "Task 2", delay: 1000 },
      { name: "Task 3", delay: 3000 },
    ];

    for (const task of tasks) {
      await performTask(task.name, task.delay);
    }
  }

  runTasks();
}

// Example usage
executeAsyncTasks();
