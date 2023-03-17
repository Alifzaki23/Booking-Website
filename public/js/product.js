let ratingStarInput = [...document.querySelectorAll('.rating-star')];

ratingStarInput.map((star, index) => {
	star.addEventListener('click', () =>{
		for(let i = 0; i < 5; i++){
			if(i <= index){
				ratingStarInput[i].src = 'img/fillstar.png';
			}else{
				ratingStarInput[i].src = 'img/nofillstar.png';
			}
		}
	})
})