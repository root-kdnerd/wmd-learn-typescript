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
exports.calculateAverage = void 0;
const inquirer_1 = __importDefault(require("inquirer"));
function calculateAverage() {
    return __awaiter(this, void 0, void 0, function* () {
        // Use Inquirer to prompt the user for a list of numbers
        const { numbers } = yield inquirer_1.default.prompt([
            {
                type: 'input',
                name: 'numbers',
                message: 'Enter a list of numbers, separated by commas:',
                validate: (input) => {
                    // Check that the input is a comma-separated list of numbers
                    const nums = input.split(',').map(Number);
                    return nums.every((num) => !isNaN(num)) || 'Please enter a valid list of numbers.';
                },
            },
        ]);
        // Calculate the average of the list of numbers
        const nums = numbers.split(',').map(Number);
        const avg = nums.reduce((sum, num) => sum + num, 0) / nums.length;
        return avg;
    });
}
exports.calculateAverage = calculateAverage;
