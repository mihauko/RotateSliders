$(document).ready(function(){
	moveImg();
});

function checkIndex(length, index){
	if(index === length){
		index = 0;
	}
	if(index === -1){
		index = length-1;
	}
	return index;
}
function changeImg(index){
	leftIndex += index;
	leftIndex = checkIndex(listLenght, leftIndex);
	$('.left').css("background-image", 'url('+sliderList[leftIndex][0]+')');
	$('.left').children('p').text(sliderList[leftIndex][1]);
	activeIndex += index;
	activeIndex = checkIndex(listLenght, activeIndex);
	$('.active').css("background-image", 'url('+sliderList[activeIndex][0]+')');
	$('.active').children('p').text(sliderList[activeIndex][1]);
	rightIndex += index;
	rightIndex = checkIndex(listLenght, rightIndex);
	$('.right').css("background-image", 'url('+sliderList[rightIndex][0]+')');
	$('.right').children('p').text(sliderList[rightIndex][1]);
}

function moveImg(){
	//TODO automat read for url

	sliderList = [["http://lorempixel.com/800/400", "Opis 1"],["http://lorempixel.com/800/450", "Opis 2"], ["http://lorempixel.com/800/500", "Opis 3"]];
	
	listLenght = sliderList.length;
	leftIndex = 0;
	activeIndex = 1;
	rightIndex = 2;

	$('.left').css('background-image', 'url('+sliderList[leftIndex][0]+')');
	$('.active').css('background-image', 'url('+sliderList[activeIndex][0]+')');
	$('.right').css('background-image', 'url('+sliderList[rightIndex][0]+')');
	
	$('.left').click(function(){
		var $this = $(this);
		changeImg(1);
	});
	$('.right').click(function(){
		var $this = $(this);
		changeImg(-1);
	});
}