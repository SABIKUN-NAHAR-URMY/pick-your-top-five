//Budget work
function getElementValue(elementIdName)
{
    const elementName = document.getElementById(elementIdName);
    const elementValueString = elementName.value;
    const elementValue = parseInt(elementValueString);
    return elementValue;
}
document.getElementById('calculate').addEventListener('click',function(){
    const element = document.getElementById('select-item');
    const item = element.childNodes;
    const itemNumber = item.length-1;

    const perPlayer = getElementValue('per-player-amount');

    // calculate
    const playerExpenses = itemNumber * perPlayer;

    const playerExpensesValue = document.getElementById('player-expenses');
    playerExpensesValue.innerText = playerExpenses;

})

document.getElementById('calculate-total').addEventListener('click',function()
{
    const managerAmount = getElementValue('manager-amount');
    const coachAmount = getElementValue('coach-amount');

    const playerExpensesValue = document.getElementById('player-expenses');
    const playerExpensesInner = parseInt(playerExpensesValue.innerText);

    const total = managerAmount + coachAmount + playerExpensesInner;
    
    const totalAmont = document.getElementById('total');
    totalAmont.innerText = total;

})