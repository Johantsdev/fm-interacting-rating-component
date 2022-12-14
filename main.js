const ratingPosibilities = [...document.querySelectorAll('.rating-posibilities button')];

let selectedRate = null;
ratingPosibilities.forEach(optionClicked => {
    optionClicked.addEventListener('click', (e) => {

            ratingPosibilities.forEach(option => {
                option.classList.remove('selected');
            })

            optionClicked.classList.add('selected');
            
            selectedRate = optionClicked.textContent
    })
})

const submit = document.querySelector('.submit');

containerFirst = document.querySelector('.container-first');
containerSecond = document.querySelector('.container-second');
selectedRateDisplay = document.querySelector('.selected-rate-display');


submit.addEventListener('click', () => {
    if (selectedRate !== null) {
        containerFirst.style.display = 'none';
        containerSecond.style.display = 'flex';

        selectedRateDisplay.innerHTML = `<div class="selected-rate-display">You selected ${selectedRate} out of 5<div>`
    }
})