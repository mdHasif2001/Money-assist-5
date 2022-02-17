// input function
function getInputValue(inputId){
    const inputFeild = document.getElementById(inputId);
    const inputAmountText = inputFeild.value;
    const amountValue = parseFloat(inputAmountText);
    // clear input
    // inputFeild.value = '';

    return amountValue;
}


// cost

document.getElementById('calc-button').addEventListener('click', function(){
    // Cost
    const FoodInput = getInputValue('food-input');
    const rentInput = getInputValue('rent-input');
    const clothsInput = getInputValue('cloths-input');
    
    const expensesTotal = document.getElementById('expenses-total');
    const expensesTotalText = expensesTotal.innerText;
    const previousExpensesTotal = parseFloat(expensesTotalText);

    const totalCost = FoodInput + rentInput + clothsInput;
    const expensesTotalCost = totalCost + previousExpensesTotal;
    expensesTotal.innerText = expensesTotalCost;

    // balance
    const income = getInputValue('income-input');

    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);

    const totalBalance = income - expensesTotalCost;
    balanceTotal.innerText = totalBalance;

})

