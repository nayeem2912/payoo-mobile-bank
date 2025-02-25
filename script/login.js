// step : id k dorchi getelementbyid diye
document.getElementById('login-btn').addEventListener('click', function(event){
    event.preventDefault();
    const accountNumber = document.getElementById('account-number').value ;
    const accountPin = document.getElementById('pin').value;
    const convertedPin = parseInt(accountPin);
    if (accountNumber.length === 11) {
        if (convertedPin === 1234) {
           window.location.href="main.html"
        }
        else{
            alert('Wrong Pin')
        }
    }
    else{
        alert('Need valid account number')
    }
})