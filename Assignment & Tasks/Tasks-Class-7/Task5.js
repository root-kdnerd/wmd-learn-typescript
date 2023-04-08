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
function convertToMilitaryTime() {
    return __awaiter(this, void 0, void 0, function* () {
        const answer = yield inquirer_1.default.prompt({
            name: "time",
            message: "Enter time in the format HH:MM AM/PM: ",
        });
        const time = answer.time;
        const [hours, minutes, meridian] = time.split(/:|\s/);
        let militaryHours = parseInt(hours);
        if (meridian === "PM" && militaryHours !== 12) {
            militaryHours += 12;
        }
        else if (meridian === "AM" && militaryHours === 12) {
            militaryHours = 0;
        }
        const militaryTime = `${militaryHours.toString().padStart(2, "0")}:${minutes} hrs`;
        console.log(`The Military time is: ${militaryTime}`);
    });
}
convertToMilitaryTime();
