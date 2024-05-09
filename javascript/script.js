

const bottone = document.querySelector('body > input[type="button"]');
bottone.addEventListener('click', function(){
    let userTravKmEl = document.querySelector('input[type="text"');
    let userAgeEl = document.querySelector('input[type="number"');

     userTravKmEl = Number.parseFloat( prompt('Type the km to travel'), 10);
     userAgeEl = Number.parseInt( prompt('Type your age'), 10);

     const costKmEl = 0.267113;

     let discount = 0;
     if(userAgeEl<21){
        discount =24.552;
     }else if(userAge > 63){
        discount =37.893;
     }

     let costTicket = costKmEl * userTravKmEl;
    costTicket = costTicket - ((costTicket/100) * discount);
    console.log(costTicket.toFixed(2), costTicket)
})