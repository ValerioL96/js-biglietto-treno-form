

const bottone = document.querySelector('button');
bottone.addEventListener('click', function() {
    let userTravKmEl = document.querySelector('input[type="text"');
    let userAgeEl = document.querySelector('input[type="number"');

     userTravKmEl = Number.parseFloat('Type the km to travel'), 10;
     userAgeEl = Number.parseInt('Type your age'), 10;

     console.log(userTravKmEl.value , userAgeEl.value);

     const costKmEl = 0.267113;

     let discount = 0;
     if(userAgeEl<21){
        discount =24.552;
     }else if(userAgeEl>63){
        discount =37.893;
     }


     let costTicket = costKmEl.value * userTravKmEl.value;
     costTicket = costTicket - ((costTicket/100) * discount);
     let hTwo =document.querySelector('h2');
     hTwo.innerHTML += console.log(costTicket.toFixed(2), costTicket);
} )