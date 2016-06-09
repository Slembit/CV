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




$( document ).ready(function(){getProfilesStart(theID);});

$('#slider').on('swipe', function(event, slick, direction){

var currentSlider = $('#slider').get(0).slick.getCurrent();
var slideCount = $("#slider").slick("getSlick").slideCount;


console.log("currentSlider: "+currentSlider);
//console.log("slideCount: "+slideCount);
//console.log(currentSlider+4 >= slideCount);
var	currentSlider1 = currentSlider+1;
	if(direction == "left"){
		if(currentBg == 1){
			$('#sliderBg2').css('background-image','url('+backgroundArray[currentSlider1]+')');
			$('#sliderBg1').css('opacity', '1');
			$('#sliderBg3').css('opacity', '0');
			currentBg++;
		}else if(currentBg == 2){
			$('#sliderBg3').css('background-image','url('+backgroundArray[currentSlider1]+')');
			$('#sliderBg2').css('opacity', '1');
			$('#sliderBg1').css('opacity', '0');
			currentBg++;
		}else{
			$('#sliderBg1').css('background-image','url('+backgroundArray[currentSlider1]+')');
			$('#sliderBg3').css('opacity', '1');
			$('#sliderBg2').css('opacity', '0');
			currentBg=1;
		}
	   

		console.log(backgroundArray);

		if(currentSlider+7 >= slideCount){
			getNextProfile(theID);
		}else{
			console.log("lul");
		}
	}else if(direction == "right"){
	  $('#sliderBg').css('background-image','url('+backgroundArray[currentSlider]+')');
	
	   	

	}	

});

   		



function getNextProfile(id){

	$.ajax({ 
	     type: "GET",
	     dataType: "json",
	     url: "http://www.therewillbecode.se/slick2/?/persons/"+id+"/loadnextprofile/1",
	     success: function(data){     
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
		error: function(){
			console.log('error loading');
		}
 	});
}



function getProfilesStart(id){
	$.ajax({ 
	     type: "GET",
	     dataType: "json",
	     url: "http://www.therewillbecode.se/slick2/?/persons/"+id+"/loadnextprofile/6",
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
	     $('#sliderBg1').css('background-image','url('+backgroundArray[0]+')');
	     $('#sliderBg2').css('background-image','url('+backgroundArray[1]+')');
	     },
		error: function(){
			console.log('error loading');
		}
 	});
}