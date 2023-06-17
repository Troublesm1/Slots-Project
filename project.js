// 1. Deposit some money
// 2. Number of lines user wants to bet
// 3. Collect amount of bet from user
// 4. Spin slots
// 5. Did they win
// 6. Pay user winnings or take bet
// 7. Play again
const prompt = require('prompt-sync')();

const deposit = () => {
    const depositAmount = prompt("Enter a deposit amount: ");
        const numberDepositAmount = parseFloat(depositAmount);

        if (isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
            console.log("Invalid deposit amount, please try again.");
    }
};

deposit();