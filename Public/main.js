function getCookie(name) {
  var value = "; " + document.cookie;
  var parts = value.split("; " + name + "=");
  if (parts.length == 2) return parts.pop().split(";").shift();
}


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
var initUrl = null;
var nextProfileUrl = null;
var token = getCookie('token');
console.log(token);


 initURL('init');


function initURL(hasSelection, skillSelection){


	if (hasSelection === 'init') {
		initUrl=  "http://www.therewillbecode.se/slick2/?/persons/"+theID+"/loadnextprofile/"+6+"&token="+token;

		nextProfileUrl = "http://www.therewillbecode.se/slick2/?/persons/"+theID+"/loadnextprofile/"+ 1 +"&token="+token;
		getProfilesStart(initUrl);
	}else if(hasSelection === 'skills'){
		var selectionString = "";
		if (skillSelection){
		 	selectionString = skillSelection.toString();
		}
		console.log('skills ifsatsen');
		initUrl = "http://www.therewillbecode.se/slick2/?/skills/"+theID+"/sortbyskills/"+6+"&token="+token+"&selection="+selectionString;
		nextProfileUrl = "http://www.therewillbecode.se/slick2/?/skills/"+theID+"/sortbyskills/"+1+"&token="+token+"&selection="+selectionString;
		getProfilesStart(initUrl);
		
	}
}



	$('#skills').submit(function (e) {
		var skillSelection = [];
		var selectionString = "";

	    $("#skills :checked").each(function(){
	    	console.log($(this).val());
	    	skillSelection.push($(this).val());


	    });
	    

	    console.log(skillSelection);
	    var formId = this.id;
	    console.log(formId); 
	    initURL('skills', skillSelection);
	    // e.preventDefault();
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
				getNextProfile(nextProfileUrl);
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
			getNextProfile(nextProfileUrl);
		}else{
			//console.log("lul");
		}
	
	   }	

	}	

});

   		



function getNextProfile(initUrl){
/*console.log("id");
console.log(id);
console.log("token");
console.log(token);
console.log("http://www.therewillbecode.se/slick2/?/persons/"+id+"/loadnextprofile/1&token="+token);
*/
	profilesToLoad = 1;
	console.log(initUrl);
	console.log(token);
	$.ajax({ 
	     type: "GET",
	     dataType: "json",
	     url: initUrl,
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

function getProfilesStart(initUrl){
	console.log(initUrl);
	console.log(token);
	console.log('get profilepictures');

	$.ajax({
	     type: "GET",
	     dataType: "json",
	     url: initUrl,
	     success: function(data){     
	     $.each(data, function(i, item){

	    		slideItem = "#slideItem"+slideindex;
	    		theID = item.id;
	    		backgroundArray.push(item.profilepicture);

	    		$( slideItem ).html("<div class='profileContent'><div class='profileContentInner'><label class='profileName'><a href='single.php?id="+item.id+"'> "
	    			+item.firstname+" "+item.lastname+
	    			"</a> </label><img class='profilePicture' src='https://organicthemes.com/demo/profile/files/2012/12/profile_img.png'><span class='profileSkills'><br><u>SKILLS:</u><ul><li>PHP</li><li>JavaScript</li><li>CSS</li></ul></span><div class='profileShortDesc'><label><u>Description:</u></label>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat. Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat nonproident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div></div></div>");
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
 	    		$( "#singleCv" ).html("<div class='profileContent'><div class='profileContentInner'><label class='profileName'><a href='single.php?id="+item.id+"'> "
	    			+item.firstname+" "+item.lastname+
	    			"</a> </label><img class='profilePicture' src='https://organicthemes.com/demo/profile/files/2012/12/profile_img.png'><span class='profileSkills'><br><u>SKILLS:</u><ul><li>PHP</li><li>JavaScript</li><li>CSS</li></ul></span><div class='profileShortDesc'><label><u>Description:</u></label>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat. Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat nonproident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div><span class='menuLogo'><a href=''>Contact</a></span> </div></div>").css("background-image","linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),url("+item.profilepicture+")");
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


