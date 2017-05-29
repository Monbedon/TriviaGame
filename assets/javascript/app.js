
 var interValid;
  
 var stopWatch = {
 	time: 0;
 	reset: function(){
 		stopWatch.time = 0;
 		}
 	},

 function run(){
	interValid = setInterval(decrement, 1000);
	
// }
// 	function decrement(){
// 	   	timer--;
// 	   	$("#display").html("<h1>" + stopWatch.time + "</h1>");

// 	    if (stopWatch.time === 0){
// 	   	stop();
// 		alert("Time Up!");
// 	  }
// 	}

// 	  	function stop(){

// 	   	clearInterval();
	   	
// 	   	run();
	}


   	count: function(){
   		stopWatch.time--;

   		var converted = stopWatch.timeConverter(stopWatch.time);

   		$("#display").html(converted);
   	},

   
   timeConverter: function(t){
	   	var minutes = Math.floor(t/60);
	   	var seconds = t - (minutes * 60);
	   	if(seconds < 10){
	   		seconds = "0" + seconds;
	   	}
	   	if (minutes === 0){
	   		minutes = "00";
	   	}
	   	else if (minutes < 10){minutes = "0" + minutes;
	   	}

	   	return minutes + ":" + seconds;
	  }

