import cards from '../cards'

const defaultState = {
    categoryCards: '',
    isMenuOpen: false,
    cards: '',
    audioSRC: '',
    wordTranslation: undefined,
    isCardFlipped: false,
    activeCategory: undefined,
    modeTrain: true,
    correctAnswer: false,
    // wrongAnswer: [],
    answers: []
}

export const bodyReducer = (state = defaultState, action) => {
    debugger
    switch (action.type) {

        case 'GET_CATEGORY_CARDS': {
            
            const displayedСards = localStorage.getItem('cards') ? 
            JSON.parse(localStorage.getItem('cards')): []

            return {
                ...state,
                categoryCards: cards[0],
                cards: displayedСards
            }
        }

        case 'SHOW_MENU': {
            
            return {
                ...state,
                isMenuOpen: !state.isMenuOpen,
            }
        }

        case 'SHOW_CATEGORY_CARDS': {
            const id = action.payload
            
            localStorage.setItem('cards', JSON.stringify(cards[id]))
            const displayedСards = JSON.parse(localStorage.getItem('cards'))

            return {
                ...state,
                cards: displayedСards,
                activeCategory: id,
            }
        }

        case 'GET_TRANSLATION': {
            const word = action.payload

            return {
                ...state,
                wordTranslation: word,
                // isCardFlipped: !state.isCardFlipped
            }
        }

        case 'SWITCH_MODE': {
            
            return {
                ...state,
                modeTrain: !state.modeTrain
            }
        }

        case 'START_GAME': {
            debugger

            const cards = state.cards 

            var random = Math.floor(Math.random() * cards.length);

            const audioObj = new Audio(`/${cards[random].audioSrc}`);
            audioObj.play()

            return {
                ...state,
                cards,
                gameCard: cards[random].word
            }
        }

        case 'MARK_CORRECT': {
            const word = action.payload 

            return {    
                ...state,
                correctAnswer: true,
                answers: [...state.answers, {word: `${word}`, answer: true}]
            }
        }

        case 'MARK_ERROR': {

            const audioObj = new Audio('audio/error2.mp3')
            audioObj.play()

            const word = action.payload

            return {
                ...state,
                correctAnswer: false,
                answers: [...state.answers, {word: `${word}`, answer: false}]
            }
        }



        default: {
            return state
        }
    }
}