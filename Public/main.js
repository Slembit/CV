function getCookie(name) {
  var value = "; " + document.cookie;
  var parts = value.split("; " + name + "=");
  if (parts.length == 2) return parts.pop().split(";").shift();
}

var token = getCookie('token');
console.log(token);

$('#slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: false,
  arrows: false
});
var theID=1;
var slideItem;
var slideindex = 0;
var backgroundArray =[];
var currentBg=2;
var userAccess=null;
// var url = initURL(theID, token, 'init');


function initURL(theID, token, test, skillSelection = null){

	if (test === 'init') {
		url=  "http://www.therewillbecode.se/slick2/?/persons/"+theID+"/loadnextprofile/6&token="+token;
		getProfilesStart(url);
	}else if(test === 'skills'){
		console.log('skills ifsatsen');
		url = "http://www.therewillbecode.se/slick2/?/skills/4/sortbyskills/6&token="+token;
		getProfilesStart(url);
		
	}
}



	$('#skills').submit(function (e) {
		var skillSelection = [];

	    $("#skills :checked").each(function(){
	    	console.log($(this).val());
	    	skillSelection.push($(this).val());


	    });
	    console.log(skillSelection);
	    var formId = this.id;
	    console.log(formId); 
	    initURL(theID, token, 'skills', skillSelection);
	    e.preventDefault();
	});





$( document ).ready(function(){initURL(theID, token, 'init');});


$('#slider').on('swipe', function(event, slick, direction){

	var currentSlider = $('#slider').get(0).slick.getCurrent();
	var slideCount = $("#slider").slick("getSlick").slideCount;
	console.log(currentSlider);
	console.log(slideCount);

	if(direction == "left"){
		if(currentSlider == (slideCount-1)){
			console.log("SISTA");

			if(currentBg == 1){
	 			//$('#sliderBg2').css('background-image','url('+backgroundArray[currentSlider1]+')');
	 			$('#sliderBg1').css('opacity', '1');
	 			$('#sliderBg3').css('opacity', '0');
	 			// currentBg--;
	 		}else if(currentBg == 2){
	 			//$('#sliderBg3').css('background-image','url('+backgroundArray[currentSlider1]+')');
	 			$('#sliderBg2').css('opacity', '1');
	 			$('#sliderBg1').css('opacity', '0');
	 			// currentBg--;
	 		}else{
	 			//$('#sliderBg1').css('background-image','url('+backgroundArray[currentSlider1]+')');
	 			$('#sliderBg3').css('opacity', '1');
	 			$('#sliderBg2').css('opacity', '0');
	 			// currentBg=1;
	 		}

		}else{
			//console.log('currentBg: '+currentBg);

				var	currentSlider1 = currentSlider+1;
	 		if(currentBg == 1){
	 			$('#sliderBg2').css('background-image','linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),url('+backgroundArray[currentSlider1]+')');
	 			$('#sliderBg1').css('opacity', '1');
	 			$('#sliderBg3').css('opacity', '0');
	 			currentBg++;
	 		}else if(currentBg == 2){
	 			$('#sliderBg3').css('background-image','linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),url('+backgroundArray[currentSlider1]+')');
	 			$('#sliderBg2').css('opacity', '1');
	 			$('#sliderBg1').css('opacity', '0');
	 			currentBg++;
	 		}else{
	 			$('#sliderBg1').css('background-image','linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),url('+backgroundArray[currentSlider1]+')');
	 			$('#sliderBg3').css('opacity', '1');
	 			$('#sliderBg2').css('opacity', '0');
	 			currentBg=1;
	 		}

			if(currentSlider+7 >= slideCount){
				getNextProfile(theID);
			}else{
				console.log("lul");
			}
		}
	}




	else if(direction == "right"){
	if(currentSlider == 0){
		console.log("Första");
 			$('#sliderBg1').css('opacity', '1');
 			$('#sliderBg2').css('opacity', '0');
 			$('#sliderBg3').css('opacity', '0');
 			currentBg=2;
	}else{
	var	currentSlider1 = currentSlider-1;
	console.log('currentBgBACK: '+currentBg);
		if(currentBg == 1){
 			currentBg=3;


		}else{
 			currentBg--;
		}
 		if(currentBg == 2){
 			$('#sliderBg3').css('background-image','linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),url('+backgroundArray[currentSlider1]+')');
 			$('#sliderBg1').css('opacity', '1');
 			$('#sliderBg2').css('opacity', '0');
 			$('#sliderBg3').css('opacity', '0');
 			//currentBg--;
 		}else if(currentBg == 3){
 			$('#sliderBg1').css('background-image','linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),url('+backgroundArray[currentSlider1]+')');
 			$('#sliderBg2').css('opacity', '1');
 			$('#sliderBg3').css('opacity', '0');
 			$('#sliderBg1').css('opacity', '0');
 			//currentBg--;
 		}else if(currentBg == 1){
 			$('#sliderBg2').css('background-image','linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),url('+backgroundArray[currentSlider1]+')');
 			$('#sliderBg3').css('opacity', '1');
 			$('#sliderBg1').css('opacity', '0');
 			$('#sliderBg2').css('opacity', '0');
 			//currentBg=3;
 		}

		//console.log(backgroundArray);

		if(currentSlider+7 >= slideCount){
			getNextProfile(theID);
		}else{
			//console.log("lul");
		}
	
	   }	

	}	

});

   		



function getNextProfile(id){
/*console.log("id");
console.log(id);
console.log("token");
console.log(token);
console.log("http://www.therewillbecode.se/slick2/?/persons/"+id+"/loadnextprofile/1&token="+token);
*/
	$.ajax({ 
	     type: "GET",
	     dataType: "json",
	     url: "http://www.therewillbecode.se/slick2/?/persons/"+id+"/loadnextprofile/1&token="+token,
	     success: function(data){  
//console.log("lul2");   
	     $.each(data, function(i, item){
		  $('#slider').slick('slickAdd','<div id="slideItem'+slideindex+'"></div>');
	     	
	    		slideItem = "#slideItem"+slideindex;
	    		theID = item.id;
	    		backgroundArray.push(item.profilepicture);

	    		$( slideItem ).html("<div class='profileContent'><div class='profileContentInner'><a href='single.php?id="+item.id+"'> "
	    			+item.firstname+"</a> "+item.lastname+"</div></div>");

				slideindex++;

			});
	     },

	      error: errorHndl
 	});
}

function getProfilesStart(url){
	console.log(url);
	console.log(token);
	console.log('get profilepictures');

	$.ajax({
	     type: "GET",
	     dataType: "json",
	     url: url,
	     success: function(data){     
	     $.each(data, function(i, item){

	    		slideItem = "#slideItem"+slideindex;
	    		theID = item.id;
	    		backgroundArray.push(item.profilepicture);

	    		$( slideItem ).html("<div class='profileContent'><div class='profileContentInner'><a href='single.php?id="+item.id+"'> "
	    			+item.firstname+"</a> "+item.lastname+"</div></div>");
	    			//.css("background-image","url("+item.profilepicture+")")
					slideindex++;


			});
	     $('#sliderBg1').css('background-image','linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),url('+backgroundArray[0]+')');
	     $('#sliderBg2').css('background-image','linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),url('+backgroundArray[1]+')');
	     },
		 error: errorHndl
 	});
}

function getSingle(id){

	console.log("http://www.therewillbecode.se/slick2/?/persons/"+id+"/loadprofile/"+token)
 		$.ajax({ 
 	     type: "GET",
 	     dataType: "json",
 	     url: "http://www.therewillbecode.se/slick2/?/persons/"+id+"/loadprofile/&token="+token,
 	     success: function(data){        
 	    	$.each(data, function(i, item){
 	    		theID = item.id;
 	    		$( "#singleCv" ).html(item.id+" "+item.firstname+" "+item.lastname).css("background-image","linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),url("+item.profilepicture+")");
 			});
 	     },
 		error: function(){
 			console.log('error loading');
 		}
 	});
 }


function errorHndl(request, status, error) {
    alert(request.responseText);
    console.log(request.responseText);
}


