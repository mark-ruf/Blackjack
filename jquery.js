$(document).ready(function(){
 

  var hitcount = 4*(1.0); 
   
    $(".new-deal").click(function(){
       



      





       
      $('#card').removeClass('face-up');
      $('#card').addClass('face-down');
      $('#card').addClass('deck');

      shuffle(card.id);
    shuffle(card.suit);
      
      $("#0").appendTo("#flop1");
      $("#0").removeClass("deck");
      
      $("#1").appendTo("#flop1");
      $("#1").removeClass("deck");
      $("#1").removeClass("face-down");
      $("#1").addClass("face-up", "dealt");    

      $("#2").appendTo("#flop2");
      $("#2").removeClass("deck");
      $("#2").removeClass("face-down");
      $("#2").addClass("face-up", "dealt");

      $("#3").appendTo("#flop2");
      $("#3").removeClass("deck");
      $("#3").removeClass("face-down");
      $("#3").addClass("face-up", "dealt");


      $(".decision").toggleClass("display");
    
      $(".new-deal").removeClass("display");

      $(".placemarker").removeClass("display2");

      $(".restart").addClass("display2");

      $('#bust').removeClass("display2");

      myscore = card.value[2] + card.value[3];
    dealerscore = card.value[0] + card.value[1];
      

    





    });

    $("#hitme").click(function(){
      
      $("#" + hitcount).appendTo("#flop2");
      $("#" + hitcount).removeClass("deck");
      $("#" + hitcount).removeClass("face-down");
      $("#" + hitcount).addClass("face-up", "dealt");

      console.log(myscore);
      console.log(card.value[hitcount]);
      
      myscore = (myscore + card.value[hitcount]);

      if (card.number[hitcount]){
      if (myscore < 11 && myscore > 21 == 1){
      card.value[hitcount] = 11;
    }
      
      hitcount = hitcount + 1;

      if (myscore > 21){
        $('#bust').addClass("display2");
        $(".new-deal").addClass("display");
        $(".decision").toggleClass("display");
        $("#0").addClass('box_rotate box_transition');
        $("#0").removeClass("face-down");
        $("#0").addClass("face-up");

      }

      console.log(myscore);
      
};
    
      
      

    });

    $(".restart").click(function(){
      
      $(".dealt").remove();
      
      $(".new-deal").addClass("display");
      
      $(".placemarker").addClass("display2");
      
      $(".decision").toggleClass("display");
      
      $(".restart").removeClass("display2");
      

    });


    



    $(".stay").click(function(){
      
      $("#0").addClass('box_rotate box_transition');
      $("#0").removeClass("face-down");
      $("#0").addClass("face-up");

      $(".stay").addClass("stay2");
      $(".stay2").removeClass("stay");

      $("#hitme").toggleClass("display");
      


    });

      });