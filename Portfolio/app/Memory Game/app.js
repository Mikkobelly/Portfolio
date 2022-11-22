const cardArray = [
    {
        name: 'pig',
        img: 'https://ouch-cdn2.icons8.com/GKEV__kVQ8-dU5rbvmZvAFi0JuvuSCiWbXPbuXc3blg/rs:fit:256:250/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNDY5/L2ZmNjVkMTZmLWIw/YjctNDFhMi1hMTQ3/LTE0YTQ5YmE0MmFi/ZC5wbmc.png'
    },
    {
        name: 'chicken',
        img: 'https://ouch-cdn2.icons8.com/JwhBsxyufdxOzyOM2HN62_UW_JTGv_-hQjipa_iJmX8/rs:fit:256:252/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvMTQ2/LzRhOTJjYzZkLTNi/YmMtNGNjNS1hNjFl/LTUwZjRhOGUwMTVi/Mi5wbmc.png'
    },
    {
        name: 'turtle',
        img: 'https://ouch-cdn2.icons8.com/dGtWfp5y6m8HQOTsuWNFiXxzJS09zYHburv4BoKH3jw/rs:fit:256:147/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNjAv/ODNjMDg3MGQtZjQy/Mi00MGFkLWE2MzYt/NTZhMTU5NjUyZjQx/LnBuZw.png'
    },
    {
        name: 'cow',
        img: 'https://ouch-cdn2.icons8.com/UL3gaNBymllUmgDOCt86Hscm42tlBNuzoQhXymi1xaQ/rs:fit:256:196/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNzM3/L2VmNjNjYmQ4LWM1/YzMtNDViZS04Mzhm/LWQwNWRlZmExNDI5/MC5wbmc.png'
    },
    {
        name: 'duck',
        img: 'https://ouch-cdn2.icons8.com/eRJLdtX4ixeGR55ZFDwYcTDvlPjAsocU6AZNVx9_LHk/rs:fit:256:328/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNTY2/L2ZiN2YwZjNmLTMw/NzItNDk2Yy04YTYw/LTNiZWFjZTU2ZDAx/Yy5wbmc.png'
    },
    {
        name: 'hamster',
        img: 'https://ouch-cdn2.icons8.com/V_4qJWQaIXyV2RtX1sJSg_mf5OVsLnbG8GdDVTmOtmM/rs:fit:172:220/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNjk0/LzczMzY3ODEyLThh/ODQtNGEyZS1iOThh/LTk1YmMwMDQxZTZl/Ni5wbmc.png'
    },
    {
        name: 'pig',
        img: 'https://ouch-cdn2.icons8.com/GKEV__kVQ8-dU5rbvmZvAFi0JuvuSCiWbXPbuXc3blg/rs:fit:256:250/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNDY5/L2ZmNjVkMTZmLWIw/YjctNDFhMi1hMTQ3/LTE0YTQ5YmE0MmFi/ZC5wbmc.png'
    },
    {
        name: 'chicken',
        img: 'https://ouch-cdn2.icons8.com/JwhBsxyufdxOzyOM2HN62_UW_JTGv_-hQjipa_iJmX8/rs:fit:256:252/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvMTQ2/LzRhOTJjYzZkLTNi/YmMtNGNjNS1hNjFl/LTUwZjRhOGUwMTVi/Mi5wbmc.png'
    },
    {
        name: 'turtle',
        img: 'https://ouch-cdn2.icons8.com/dGtWfp5y6m8HQOTsuWNFiXxzJS09zYHburv4BoKH3jw/rs:fit:256:147/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNjAv/ODNjMDg3MGQtZjQy/Mi00MGFkLWE2MzYt/NTZhMTU5NjUyZjQx/LnBuZw.png'
    },
    {
        name: 'cow',
        img: 'https://ouch-cdn2.icons8.com/UL3gaNBymllUmgDOCt86Hscm42tlBNuzoQhXymi1xaQ/rs:fit:256:196/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNzM3/L2VmNjNjYmQ4LWM1/YzMtNDViZS04Mzhm/LWQwNWRlZmExNDI5/MC5wbmc.png'
    },
    {
        name: 'duck',
        img: 'https://ouch-cdn2.icons8.com/eRJLdtX4ixeGR55ZFDwYcTDvlPjAsocU6AZNVx9_LHk/rs:fit:256:328/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNTY2/L2ZiN2YwZjNmLTMw/NzItNDk2Yy04YTYw/LTNiZWFjZTU2ZDAx/Yy5wbmc.png'
    },
    {
        name: 'hamster',
        img: 'https://ouch-cdn2.icons8.com/V_4qJWQaIXyV2RtX1sJSg_mf5OVsLnbG8GdDVTmOtmM/rs:fit:172:220/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNjk0/LzczMzY3ODEyLThh/ODQtNGEyZS1iOThh/LTk1YmMwMDQxZTZl/Ni5wbmc.png'
    }
];

const container = document.querySelector('#container');
const result = document.querySelector('#result');
const scoreDisplay = document.querySelector('#score');
let cardsChosen = [];
let cardsChosenIds = [];
let cardsWon = [];
let score = 0;
let attempts = 0;

//creating default cards, adding eventlisneter
function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        let card = document.createElement('img');
        card.src = 'https://media.istockphoto.com/vectors/poker-playing-cards-suits-symbols-spades-hearts-diamonds-and-clubs-vector-id1330358306?b=1&k=20&m=1330358306&s=612x612&w=0&h=ceVtDcJqzoBnjX8tVkDKL0J_3X-CmxDtFLMx1iea8FA=';
        card.setAttribute('data-id', i);
        card.classList.add('defaultCard');
        container.append(card);
        card.addEventListener('click', flipCard);
    }
}
createBoard();


//function to create flipped cards
cardArray.sort(() => 0.5 - Math.random());

function flipCard() {
    const cardId = this.getAttribute('data-id');
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenIds.push(cardId);
    this.src = cardArray[cardId].img;
    if (cardsChosen.length === 2) {
        setTimeout(checkMatch, 300);
    }

}


//function to check if matched
function checkMatch() {
    const cards = document.querySelectorAll('img');
    const optionCardOneId = cardsChosenIds[0];
    const optionCardTwoId = cardsChosenIds[1];

    if (cardsChosen[0] == cardsChosen[1]) {
        alert('Matched!:)');
        cards[optionCardOneId].src = 'https://ouch-cdn2.icons8.com/NolNLktQbKH5M1LPkGOExPWXImxbknCnZ-ycqhbbU1w/rs:fit:256:256/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvODc3/Lzg5OTYxYTFlLWI4/ZjktNDZhZi1hNjJi/LTEzZWNhOTViYTc1/Mi5zdmc.png';
        cards[optionCardTwoId].src = 'https://ouch-cdn2.icons8.com/NolNLktQbKH5M1LPkGOExPWXImxbknCnZ-ycqhbbU1w/rs:fit:256:256/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvODc3/Lzg5OTYxYTFlLWI4/ZjktNDZhZi1hNjJi/LTEzZWNhOTViYTc1/Mi5zdmc.png';
        cards[optionCardOneId].removeEventListener('click', flipCard);
        cards[optionCardTwoId].removeEventListener('click', flipCard);
        cardsWon.push(cardsChosen);
        score++;
        scoreDisplay.textContent = score;
    } else {
        cards[optionCardOneId].src = 'https://media.istockphoto.com/vectors/poker-playing-cards-suits-symbols-spades-hearts-diamonds-and-clubs-vector-id1330358306?b=1&k=20&m=1330358306&s=612x612&w=0&h=ceVtDcJqzoBnjX8tVkDKL0J_3X-CmxDtFLMx1iea8FA=';
        cards[optionCardTwoId].src = 'https://media.istockphoto.com/vectors/poker-playing-cards-suits-symbols-spades-hearts-diamonds-and-clubs-vector-id1330358306?b=1&k=20&m=1330358306&s=612x612&w=0&h=ceVtDcJqzoBnjX8tVkDKL0J_3X-CmxDtFLMx1iea8FA=';
    }

    cardsChosen = [];
    cardsChosenIds = [];
    attempts++;

    if (cardsWon.length === cardArray.length / 2) {
        result.innerHTML = `🎊Congratulations🎊 It took you ${attempts} attempts!`;
    }
}

