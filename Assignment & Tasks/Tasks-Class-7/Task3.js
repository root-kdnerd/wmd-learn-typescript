"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
const tasks = [];
function promptUser() {
    return __awaiter(this, void 0, void 0, function* () {
        const { action } = yield inquirer_1.default.prompt([
            {
                type: 'list',
                name: 'action',
                message: 'What would you like to do?',
                choices: ['Add a task', 'Display task list', 'Mark a task as completed', 'Delete a task', 'Quit'],
            },
        ]);
        return action;
    });
}
function addTask() {
    return __awaiter(this, void 0, void 0, function* () {
        const { taskName } = yield inquirer_1.default.prompt([
            {
                type: 'input',
                name: 'taskName',
                message: 'Enter task name:',
            },
        ]);
        tasks.push({ name: taskName, completed: false });
        console.log('Task added successfully!\n');
    });
}
function markTaskAsCompleted() {
    return __awaiter(this, void 0, void 0, function* () {
        const { taskIndex } = yield inquirer_1.default.prompt([
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
        }
        else {
            console.log('No uncompleted tasks found!\n');
        }
    });
}
function deleteTask() {
    return __awaiter(this, void 0, void 0, function* () {
        const { taskIndex } = yield inquirer_1.default.prompt([
            {
                type: 'list',
                name: 'taskIndex',
                message: 'Which task would you like to delete?',
                choices: tasks.map((task, index) => ({ name: task.name, value: index })),
            },
        ]);
        tasks.splice(taskIndex, 1);
        console.log('Task deleted successfully!\n');
    });
}
function showTasks() {
    if (tasks.length === 0) {
        console.log('No tasks found!\n');
    }
    else {
        console.log('Task List:');
        tasks.forEach((task) => {
            console.log(`${task.completed ? '[X]' : '[ ]'} ${task.name}`);
        });
        console.log('');
    }
}
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        let action = '';
        while (action !== 'Quit') {
            action = yield promptUser();
            switch (action) {
                case 'Add a task':
                    yield addTask();
                    showTasks();
                    break;
                case 'Display task list':
                    showTasks();
                    break;
                case 'Mark a task as completed':
                    yield markTaskAsCompleted();
                    showTasks();
                    break;
                case 'Delete a task':
                    yield deleteTask();
                    showTasks();
                    break;
                case 'Quit':
                    console.log('Goodbye!');
                    break;
            }
        }
    });
}
main();
