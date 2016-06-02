//få fram den befintliga slide indexet efter att man har bytt slide
$('.profile').on('afterChange', function(slick, currentSlide){
  console.log(currentSlide.currentSlide);
});