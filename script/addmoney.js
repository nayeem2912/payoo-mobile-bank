document.getElementById('add-money').addEventListener('click', function(event){
    event.preventDefault();
    const amOunt = document.getElementById('amount').value;
    const convertedAmount = parseFloat(amOunt);
    const pin = document.getElementById('pin').value;
    const convertedPin = parseInt(pin);
    const mainBalance = document.getElementById('main-balance').innerText;
    const convertedMainBalance = parseFloat(mainBalance);
    if (convertedPin === 1234) {
        const sum = convertedAmount + convertedMainBalance ;
        document.getElementById('main-balance').innerText = sum ;
    }
    else{
        alert('Enter Valid Pin')
    }
})