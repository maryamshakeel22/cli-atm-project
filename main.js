import inquirer from "inquirer";
let myBalance = 10000;
console.log(`total balance is: ${myBalance}`);
let myPin = 1234;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter your pin number:",
        type: "number"
    }
]);
if (pinAnswer.pin === myPin) {
    console.log("Correct pin code!");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "please select option:",
            type: "list",
            choices: ["withdraw", "check balance", "fast cash"]
        }
    ]);
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "Enter your amount:",
                type: "number"
            }
        ]);
        myBalance -= amountAns.amount;
        console.log(`Your remaining balance is: ${myBalance}`);
    }
    else if (operationAns.operation === "check balance") {
        console.log(`Your balance is: ${myBalance}`);
    }
    else if (operationAns.operation === "fast cash") {
        let fastAns = await inquirer.prompt([
            {
                name: "fastcash",
                message: "Choose your amount:",
                type: "list",
                choices: [1000, 2000, 5000, 10000],
            },
        ]);
        myBalance -= fastAns.fastcash;
        console.log(`Your remaining balance is: ${myBalance}`);
    }
}
else {
    console.log("Incorrect pincode");
}
