



const bottone = document.querySelector('button');
bottone.addEventListener('click', function(){
    
   const userTravKm = Number.parseFloat(document.querySelector('input[type="text"').value, 10);
   const userAge = Number.parseInt(document.querySelector('input[type="number"').value, 10);

     const costKm = 0.267113;
     let discount = 0;

      if(userAge < 21){
         discount =24.552;
      }else if(userAge > 63){
         discount =37.893;
      } 


     let costTicket = costKm * userTravKm;
        costTicket = costTicket - ((costTicket/100) * discount);
        console.log(costTicket);
     let hTwo =document.querySelector('h2');
        hTwo.innerHTML += costTicket + '$';
} )






