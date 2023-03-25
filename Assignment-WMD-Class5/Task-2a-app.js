import { calculateAverage } from './Task-2a-average.js';
(async () => {
    const avg = await calculateAverage();
    console.log(`The average is ${avg.toFixed(3)}.`);
})();
