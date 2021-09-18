const billInput = document.querySelector('#bill-amount');
const cashInput = document.querySelector('#cash-given');
const btnCheck = document.querySelector('#check-btn');
const errorDiv = document.querySelector('#error-div');
const notesClassArray = document.querySelectorAll('.number');

btnCheck.addEventListener('click',validateInput);

const notes = [2000,500,100,20,10,5,1];

function showError(error) {
    errorDiv.firstElementChild.innerText = error;
    errorDiv.classList.add('show');
    setTimeout(() => errorDiv.classList.remove('show'),4000);
}
function clearDenominations() {
    for(let i = 0; i < notes.length; i++) {
        notesClassArray[i].innerText = "";
    }

}

function calcDenominations(billAmount,cashGiven) {
    let balanceCash = cashGiven - billAmount;
    for(i=0; i<notes.length; i++) {
        let numberOfNotes = Math.trunc(balanceCash/notes[i]);
        balanceCash = balanceCash % notes[i];
        notesClassArray[i].innerText = numberOfNotes;
    }

}

function validateInput() {
    clearDenominations();
    let billAmount = billInput.value;
    let cashGiven = cashInput.value;
    if(isNaN(billAmount) || isNaN(cashGiven)) {
        showError('Are you from the parallel universe? cause people in this dimension are not capable of dealing with these amounts yet.');
    } else if(billAmount < 0 || cashGiven < 0) {
        showError('Am i a joke to you? How on earth did you end up with a negative amount?');
    } else if(Number(cashGiven) < Number(billAmount)) {
        showError('We accept Kidneys too..');
    } else {
        calcDenominations(billAmount,cashGiven);
    }
}
