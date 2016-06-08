$('#slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1
  //,  infinite: false
});

var slideindex = 0;
var updateIndex = 0;
var theID=1;
var slideItem;
var mainSlider = [];
var idChecker = [];
var arrayPlace = -1;

$( document ).ready(function(){getNextProfile(theID);});

$('#slider').on('swipe', function(event, slick, direction){

  	if(direction == "left"){
  		if(updateIndex >= 2){
  			updateIndex=0;
  		}
		//console.log("slideind: "+slideindex);
		//console.log("update: "+updateIndex);
		//slideindex++;
		arrayPlace++;

		//console.log(arrayPlace);
		updateIndex++;/*
		console.log("theid in array: "+mainSlider[arrayPlace].id);
		console.log("Uppdateindex: "+updateIndex);*/
		if(updateIndex == 2){
			if(slideindex >= 5){
				slideindex = 0;
			}
			idChecker = [];
			checkArray(mainSlider);
			//console.log(theID);
			//console.log("arrayPlace: "+arrayPlace);
			//console.log( mainSlider.length == arrayPlace+1);

			//if(idChecker.indexOf(theID) == -1){
			if(mainSlider.length == arrayPlace+1){
				//console.log("online");
				getNextProfile(theID);
			}else{
				
				//console.log("offline");
				getNextProfileOffline(theID,mainSlider);	
							
			}
			updateIndex=0;
		}
		/*console.log("slideind: "+slideindex);
		console.log("id: "+theID);*/
	}
	else if(direction == "right"){
		arrayPlace--;
		theID = mainSlider[arrayPlace].id;
		//console.log("backID: "+theID);
  		updateIndex--;
  		if(updateIndex <= 0){
  			if(slideindex <= 0){
  				slideindex = 5 ;
  			}
  			getPreviousProfile(theID);
  			updateIndex=2;
  		}
	 //	console.log(slideindex+"hej");
	}
});
function getNextProfileOffline(id,array){
	//console.log("slide: "+slideindex)
		console.log("SLIDEINDEX: "+slideindex);

	slideItem = "#slideItem"+slideindex;
	for (var i = 0; i < array.length; i++) {
		if(id == array[i].id){
			//console.log(array[i].id);
			//console.log(slideItem);
			$( slideItem ).html('offline'+array[i].id/*<div class='profileContent'><div class='profileContentInner'>hehe<a href='single.php?id="+array.id+"'> "
	    			+array.firstname+"</a> "+array.lastname+"</div></div>").css("background-image","url("+array.profilepicture+")"*/);
		}
	}
	if(slideindex >= 5){
		slideindex = 0;
	}else{
		slideindex++;
	}

}
function getNextProfile(id){
	$.ajax({ 
	     type: "GET",
	     dataType: "json",
	     url: "http://www.therewillbecode.se/slick2/?/persons/all/loadimgs/"+id+"/2",
	     success: function(data){     
	     $.each(data, function(i, item){
		console.log("SLIDEINDEX: "+slideindex);

	    		slideItem = "#slideItem"+slideindex;
	    		theID = item.id;

	    		mainSlider.push(item);



	    		
	    		$( slideItem ).html(item.id/*"<div class='profileContent'><div class='profileContentInner'><a href='single.php?id="+item.id+"'> "
	    			+item.firstname+"</a> "+item.lastname+"</div></div>").css(item.id"background-image","url("+item.profilepicture+")"*/);
	    		if(slideindex >= 5){
					slideindex = 0;
				}else{
					slideindex++;
				}
			});
	     },
		error: function(){
			console.log('error loading');
		}
 	});
}

function getPreviousProfile(id){

var backitem = slideindex - 2;
		console.log("SLIDEINDEX: "+slideindex);

    		if(slideindex <= 0){
					slideindex = 5;
				}else{
					slideindex--;
				}
/*
slideItem = "#slideItem"+slideindex;
	for (var i = 0; i < array.length; i++) {
		if(id = array[i].id){
			$( slideItem ).html("<div class='profileContent'><div class='profileContentInner'>hehe<a href='single.php?id="+array.id+"'> "
	    			+array.firstname+"</a> "+array.lastname+"</div></div>").css("background-image","url("+array.profilepicture+")");
		}
	}*/
/*
	$.ajax({ 
	     type: "GET",
	     dataType: "json",
	     url: "api/?/profile/previous/"+id,
	     success: function(data){        
	    	$.each(data, function(i, item){
	    		slideItem = "#slideItem"+backitem;
	    		theID = item.id;
	    		$( slideItem ).html(item.id+" "+item.firstname+" "+item.lastname).css("background-image","url("+item.background+")");
	    		if(slideindex <= 0){
					slideindex = 5;
				}else{
					slideindex--;
				}
			});
	     },
		error: function(){
			console.log('error loading');
		}
	});*/
}

function getSingle(id){
		$.ajax({ 
	     type: "GET",
	     dataType: "json",
	     url: "http://www.therewillbecode.se/slick2/?/persons/"+id+"/loadprofile/",
	     success: function(data){        
	    	$.each(data, function(i, item){
	    		theID = item.id;
	    		$( "#singleCv" ).html(item.id+" "+item.firstname+" "+item.lastname).css("background-image","url("+item.profilepicture+")");
			});
	     },
		error: function(){
			console.log('error loading');
		}
	});
}



function checkArray(array){
	for (var i = 0; i < array.length; i++) {
		idChecker.push(array[i].id);
	}
}

