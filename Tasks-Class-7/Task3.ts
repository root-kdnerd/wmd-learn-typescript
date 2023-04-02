import inquirer from 'inquirer';

interface Task {
  name: string;
  completed: boolean;
}

const tasks: Task[] = [];

async function promptUser() {
  const { action } = await inquirer.prompt([
    {
      type: 'list',
      name: 'action',
      message: 'What would you like to do?',
      choices: ['Add a task', 'Display task list', 'Mark a task as completed', 'Delete a task', 'Quit'],
    },
  ]);
  return action;
}

async function addTask() {
  const { taskName } = await inquirer.prompt([
    {
      type: 'input',
      name: 'taskName',
      message: 'Enter task name:',
    },
  ]);
  tasks.push({ name: taskName, completed: false });
  console.log('Task added successfully!\n');
}

async function markTaskAsCompleted() {
  const { taskIndex } = await inquirer.prompt([
    {
      type: 'list',
      name: 'taskIndex',
      message: 'Which task would you like to mark as completed?',
      choices: tasks.map((task, index) => ({ name: task.name, value: index })),
      when: () => tasks.some((task) => !task.completed),
    },
  ]);
  if (taskIndex !== undefined) {
    tasks[taskIndex].completed = true;
    console.log('Task marked as completed!\n');
  } else {
    console.log('No uncompleted tasks found!\n');
  }
}

async function deleteTask() {
  const { taskIndex } = await inquirer.prompt([
    {
      type: 'list',
      name: 'taskIndex',
      message: 'Which task would you like to delete?',
      choices: tasks.map((task, index) => ({ name: task.name, value: index })),
    },
  ]);
  tasks.splice(taskIndex, 1);
  console.log('Task deleted successfully!\n');
}

function showTasks() {
  if (tasks.length === 0) {
    console.log('No tasks found!\n');
  } else {
    console.log('Task List:');
    tasks.forEach((task) => {
      console.log(`${task.completed ? '[X]' : '[ ]'} ${task.name}`);
    });
    console.log('');
  }
}

async function main() {
  let action = '';
  while (action !== 'Quit') {
    action = await promptUser();
    switch (action) {
      case 'Add a task':
        await addTask();
        showTasks();
        break;
        case 'Display task list':
        showTasks();
        break;
      case 'Mark a task as completed':
        await markTaskAsCompleted();
        showTasks();
        break;
      case 'Delete a task':
        await deleteTask();
        showTasks();
        break;
      case 'Quit':
        console.log('Goodbye!');
        break;
    }
  }
}

main();
