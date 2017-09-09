$(function(){
    chrome.storage.sync.get('total',function(budget){
          $("#total").text(budget.total); 
       });
   $("#spenAmt").click(function(){
       
       chrome.storage.sync.get('total',function(budget){
           var n = 0;
           if(budget.total){
               n += parseInt(budget.total);
           }
           
           var amt = $("#amount").val();
           if(amt){
               n += parseInt(amt);
           }
           
           chrome.storage.sync.set({'total': n});
           
           $("#total").text(n);
           $("#amount").val('');
       });
   }); 
});