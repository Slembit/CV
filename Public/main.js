var theID=1;
var slideItem;
var slideindex = 0;
var backgroundArray =[];
var currentBg=2;
var userAccess=null;
var initUrl = null;
var nextProfileUrlP1 = null;
var nextProfileUrlP2 = null;
var token = getCookie('token');

//functions

function getCookie(name) {
	var value = "; " + document.cookie;
	var parts = value.split("; " + name + "=");
	if (parts.length == 2) return parts.pop().split(";").shift();
}

function initURL(hasSelection, skillSelection){


	if (hasSelection === 'init') {
		initUrl=  "http://www.therewillbecode.se/slick2/?/persons/"+theID+"/loadnextprofile/"+6+"&token="+token;

		nextProfileUrlP1 = "http://www.therewillbecode.se/slick2/?/persons/";
		nextProfileUrlP2 = "/loadnextprofile/"+1+"&token="+token;
		getProfilesStart(initUrl);
	}else if(hasSelection === 'skills'){
		var selectionString = "";
		if (skillSelection){
		 	selectionString = skillSelection.toString();
		}
		console.log('skills ifsatsen');
		// backgroundArray = [];
		theID = 1;
		initUrl = "http://www.therewillbecode.se/slick2/?/skills/"+theID+"/sortbyskills/"+6+"&token="+token+"&selection="+selectionString;
		nextProfileUrlP1 = "http://www.therewillbecode.se/slick2/?/skills/";
		nextProfileUrlP2 = "/sortbyskills/"+1+"&token="+token+"&selection="+selectionString;
		getProfilesStart(initUrl);
	}
}

function buildUrl(p1,p2,id){
	return p1+id+p2;
}




$('#slider').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	infinite: false,
	arrows: false
});



if (window.location.href == 'http://192.168.33.10/CV/public/start.php') {
	initURL('init');
}


	$('#skills').submit(function (e) {

		var skillSelection = [];
		var selectionString = "";
	    $("#skills :checked").each(function(){
	    	console.log($(this).val());
	    	skillSelection.push($(this).val());
	    });
	    var formId = this.id;
	    initURL('skills', skillSelection);
	    e.preventDefault();

	});

$('#slider').on('swipe', function(event, slick, direction){

	var currentSlider = $('#slider').get(0).slick.getCurrent();
	var slideCount = $("#slider").slick("getSlick").slideCount;

	if(direction == "left"){
		if(currentSlider == (slideCount-1)){
			if(currentBg == 1){
	 			$('#sliderBg1').css('opacity', '1');
	 			$('#sliderBg3').css('opacity', '0');
	 		}else if(currentBg == 2){
	 			$('#sliderBg2').css('opacity', '1');
	 			$('#sliderBg1').css('opacity', '0');
	 		}else{
	 			$('#sliderBg3').css('opacity', '1');
	 			$('#sliderBg2').css('opacity', '0');
	 		}

		}else{
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
				getNextProfile(nextProfileUrlP1, nextProfileUrlP2);
			}
		}
	}

	else if(direction == "right"){
		if(currentSlider == 0){
	 			$('#sliderBg1').css('opacity', '1');
	 			$('#sliderBg2').css('opacity', '0');
	 			$('#sliderBg3').css('opacity', '0');
	 			currentBg=2;
		}else{
			var	currentSlider1 = currentSlider-1;
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
	 		}else if(currentBg == 3){
	 			$('#sliderBg1').css('background-image','linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),url('+backgroundArray[currentSlider1]+')');
	 			$('#sliderBg2').css('opacity', '1');
	 			$('#sliderBg3').css('opacity', '0');
	 			$('#sliderBg1').css('opacity', '0');
	 		}else if(currentBg == 1){
	 			$('#sliderBg2').css('background-image','linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),url('+backgroundArray[currentSlider1]+')');
	 			$('#sliderBg3').css('opacity', '1');
	 			$('#sliderBg1').css('opacity', '0');
	 			$('#sliderBg2').css('opacity', '0');
	 		}

			if(currentSlider+7 >= slideCount){
				getNextProfile(nextProfileUrlP1, nextProfileUrlP2);
			}
		}	
	}	

});
		
function getNextProfile(nextProfileUrlP1, nextProfileUrlP2){

	url = buildUrl(nextProfileUrlP1, nextProfileUrlP2, theID);
	$.ajax({ 
		type: "GET",
		dataType: "json",
		url: url,
		success: function(data){    
		$.each(data, function(i, item){
			$('#slider').slick('slickAdd','<div id="slideItem'+slideindex+'"></div>');
	    		slideItem = "#slideItem"+slideindex;
	    		theID = item.id;
	    		backgroundArray.push(item.profilepicture);
	    		$( slideItem ).html("<div class='profileContent'><div class='profileContentInner'><label class='profileName'><a href='single.php?id="+item.id+"'> "
	    			+item.firstname+" "+item.lastname+
	    			"</a> </label><span class='profileSkills'><br><u>SKILLS:</u><ul><li>"+item.skills+"</li></ul></span><div class='profileShortDesc'>"+item.lookingfor+"</div></div></div>");	    			
				slideindex++;
			});
	     },
	      error: errorHndl
 	});

}

function getProfilesStart(initUrl){

	backgroundArray = [];
	slideindex = 0;
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
    			"</a> </label><span class='profileSkills'><br><u>SKILLS:</u><ul><li>"+item.skills+"</li></ul></span><div class='profileShortDesc'>"+item.lookingfor+"</div></div></div>");
				slideindex++;

			});
		$('#sliderBg1').css('background-image','linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),url('+backgroundArray[0]+')');
		$('#sliderBg2').css('background-image','linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),url('+backgroundArray[1]+')');
		},
		error: errorHndl
 	});
}

function getSingle(id){

 		$.ajax({ 
			type: "GET",
			dataType: "json",
			url: "http://www.therewillbecode.se/slick2/?/persons/"+id+"/loadprofile/&token="+token,
			success: function(data){        
 	    	$.each(data, function(i, item){
 	    		theID = item.id;
 	    		$( "#singleCv" ).html("<div class='profileContent'><div class='profileContentInner'><label class='profileName'><a href='single.php?id="+item.id+"'> "
	    			+item.firstname+" "+item.lastname+
	    			"</a> </label><span class='profileSkills'><br><u>SKILLS:</u><ul><li>"+item.skills+"</li></ul></span><div class='profileShortDesc'><label></label>"+item.about+"</div><span class='menuLogo'><a href=''>Contact</a></span> </div></div>").css("background-image","linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),url("+item.profilepicture+")");
	    			});
 	     },
 		error: function(){
 		}
 	});

 }

function errorHndl(request, status, error) {

    console.log(request.responseText, status.responseText, error.responseText);

}