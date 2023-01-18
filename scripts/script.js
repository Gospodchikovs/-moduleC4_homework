var currentImage = 0;
const docImages = document.querySelectorAll('.changer-items');
const countImages = docImages.length;

docImages[0].style.opacity = 1; // делаем видимым первое фото

// переход к следующему фото
//
function nextImage() {	
	docImages[currentImage].style.animationName = 'hide';	// скрываем фото с анимацией
	currentImage++;	
	if (currentImage == countImages) currentImage = 0;
	docImages[currentImage].style.animationName = 'reveal'	// разворачиваем фото с анимацией
}

// переход к предыдущему фото
//
function prevImage() {
	docImages[currentImage].style.animationName = 'hide';	// скрываем фото с анимацией	
	if (currentImage == 0) currentImage = countImages;
	currentImage--; 
	docImages[currentImage].style.animationName = 'reveal'	// разворачиваем фото с анимацией
}

arrowleft.onclick = prevImage;
arrowright.onclick = nextImage;
document.addEventListener('keydown', function(event) {
	currentId = document.activeElement.id;
	if (event.code == 'ArrowRight') nextImage();	// переключаем фото по нажатию стрелки вправо
	if (event.code == 'ArrowLeft') nextImage();	// переключаем фото по нажатию стрелки влево
	if (event.code == 'Space') nextImage();		// переключаем фото по нажатию пробела
	if (event.code == 'Enter') {			// переключаем фото по нажатию Enter если есть фокус 
		if (currentId == 'arrowleft') prevImage();	
		if (currentId == 'arrowright') nextImage();	
	}
});
