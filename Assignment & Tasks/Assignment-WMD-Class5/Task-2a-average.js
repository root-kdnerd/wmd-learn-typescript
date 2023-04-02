import inquirer from 'inquirer';
export async function calculateAverage() {
    // Use Inquirer to prompt the user for a list of numbers
    const { numbers } = await inquirer.prompt([
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
}
