// input function
function getInputValue(inputId){
    const inputFeild = document.getElementById(inputId);
    const inputAmountText = inputFeild.value;
    const amountValue = parseFloat(inputAmountText);
    // clear input
    // inputFeild.value = '';

    return amountValue;
}

// total expenses and balance

document.getElementById('calc-button').addEventListener('click', function(){
    // Cost
    const FoodInput = getInputValue('food-input');
    const rentInput = getInputValue('rent-input');
    const clothsInput = getInputValue('cloths-input');
    
    const expensesTotal = document.getElementById('expenses-total');
    const expensesTotalText = expensesTotal.innerText;
    const previousExpensesTotal = parseFloat(expensesTotalText);

    if(FoodInput<0 || rentInput <0 || clothsInput<0){
        alert("Please input positive number")
    }
    else{
        const totalCost = FoodInput + rentInput + clothsInput;
        const expensesTotalCost = totalCost + previousExpensesTotal;
        expensesTotal.innerText = expensesTotalCost; 
        
    // balance
    const income = getInputValue('income-input');

    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);

    const totalBalance = (income - expensesTotalCost) + previousBalanceTotal;
    balanceTotal.innerText = totalBalance;
    }
    
})

// saving amount and remaining balance

document.getElementById('save-button').addEventListener('click', function(){
    // balance

    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const myBalance = parseFloat(balanceTotalText)

    // save

    const saveInput = getInputValue('save-input');
    const saveCost = parseFloat(saveInput)

    const savingTotal = document.getElementById('saving-total');
    const savingTotalText = savingTotal.innerText;
    const mySavings = parseFloat(savingTotalText);

    const mySavingsCost = myBalance * ((saveCost)/100);
    savingTotal.innerText = mySavingsCost;

    // remaining balance

    const remainingTotal = document.getElementById('remaining-total');
    const remainingTotalText = remainingTotal.innerText;
    const remainingTotalCost = parseFloat(remainingTotalText);

    const totalRemainingBalance = myBalance - mySavingsCost;
    remainingTotal.innerText = totalRemainingBalance;
})
