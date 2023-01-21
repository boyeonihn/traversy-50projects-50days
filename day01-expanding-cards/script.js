const cards = document.querySelectorAll('.card');

cards.forEach(card => card.addEventListener('click', toggleActiveTag)); 

function toggleActiveTag(e){
    const clickedId = e.target.id; 
    console.log('worked')
    cards.forEach(card => {
        if (card.id === clickedId) {
            card.classList.add('active');
        }
        else {
            card.classList.remove('active'); 
        }
    }); 

}