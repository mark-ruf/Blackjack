
$(document).ready(function(){

/*/////////////////////////////////////////////////////////////////////////////////////////////////////

Javascript   *   Javascript   *   Javascript   *   Javascript   *   Javascript   *   Javascript      
 
/////////////////////////////////////////////////////////////////////////////////////////////////////*/


var card = {
	id: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52], 
	number:["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",], 
	suit:["heart", "heart", "heart", "heart", "heart", "heart", "heart", "heart", "heart", "heart", "heart", "heart", "heart", "diamond", "diamond", "diamond", "diamond", "diamond", "diamond", "diamond", "diamond", "diamond", "diamond", "diamond", "diamond", "diamond", "spade", "spade", "spade", "spade", "spade", "spade", "spade", "spade", "spade", "spade", "spade", "spade", "spade", "club", "club", "club", "club", "club", "club", "club", "club", "club", "club", "club", "club", "club"],
	num: ["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",],
	value:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
};



shuffle(card.id);
shuffle(card.suit);

var j = 52;
for (i = 0; i < j; i++) {
	
	card.number[i] = card.id[i] % 13;
	if (card.number[i] == 1) {
		card.num[i] = "A";
	}
	else if (card.number[i] == 2) {
		card.num[i] = "2";
	}
	else if (card.number[i] == 3) {
		card.num[i] = "3";
	}
	else if (card.number[i] == 4) {
		card.num[i] = "4";
	}
	else if (card.number[i] == 5) {
		card.num[i] = "5";
	}
	else if (card.number[i] == 6) {
		card.num[i] = "6";
	}
	else if (card.number[i] == 7) {
		card.num[i] = "7";
	}
	else if (card.number[i] == 8) {
		card.num[i] = "8";
	}
	else if (card.number[i] == 9) {
		card.num[i] = "9";
	}
	else if (card.number[i] == 10) {
		card.num[i] = "10";
	}
	else if (card.number[i] == 11) {
		card.num[i] = "J";
	}
	else if (card.number[i] == 12) {
		card.num[i] = "Q";
	}
	else {
		card.num[i] = "K";
	}

	


	if (card.number[i] == 0) {
		card.value[i] = 10;
	}
	else if (card.number[i] < 10) {
		card.value[i] = card.number[i];
	}
	
	else {
		card.value[i] = 10;
	}
	
	var html = document.getElementById("dealer").innerHTML;
	document.getElementById("dealer").innerHTML = html + '<div id="' + i + '" class="card deck face-down"><div class="number number-top">' + card.num[i] + '</div><div class="icon"><div class="' + card.suit[i] + '"></div></div><div class="number number-bottom">' + card.num[i] + '</div></div>';
	
	

	console.log(card.num[i], card.suit[i], "value = ", card.value[i]);
	


}




myscore = card.value[2] + card.value[3];
dealerscore = card.value[0] + card.value[1];

if (myscore <= 11){
	if (card.number[2] == 1){
			card.value[2] = 11;
		}
	else if (card.number[3] == 1){
			card.value[3] = 11;
		}
}

var myscore = card.value[2] + card.value[3];


console.log(myscore, dealerscore);

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}






/*/////////////////////////////////////////////////////////////////////////////////////////////////////

jQuery   *   jQuery   *   jQuery   *   jQuery   *   jQuery   *   jQuery   *   jQuery   *   jQuery   
 
/////////////////////////////////////////////////////////////////////////////////////////////////////*/


	

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

	