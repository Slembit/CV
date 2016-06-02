$(document).ready(function(){

	var img = ['http://g-ecx.images-amazon.com/images/G/01/img15/pet-products/small-tiles/23695_pets_vertical_store_dogs_small_tile_8._CB312176604_.jpg','http://orig14.deviantart.net/3208/f/2015/111/c/a/cool_dog_by_chaoticbiscuit1-d8ql02x.jpg','http://www.gratisjulkort.se/data/media/2/sot-hund.jpg'];



	$('.profile').slick();

	$('.profile').on('beforeChange', function(event, slick, currentSlide, nextSlide){

		$('#bckgrnd').fadeTo('slow', 0.3, function(){
			$(this).css('background-image', 'url(' + img[nextSlide] + ')');
		}).fadeTo('slow', 1);

	});

	$('.profile').on('swipe', function(slick, direction){
		//ladda in ny bild på index 0
		$('.profile').slick('slickAdd','<div class="whiteFrame"><div class="centerText">Test Testar</div></div>');
		console.log(direction);

	});




});//stänger document.ready