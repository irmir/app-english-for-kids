import cards from '../cards'

const defaultState = {
    categoryCards: '',
    isMenuOpen: false,
    cards: '',
    copyCard: '',
    audioSRC: '',
    wordTranslation: undefined,
    isCardFlipped: false,
    activeCategory: undefined,
    modeTrain: true,
    correctAnswer: [],
    answers: [],
    gameWord: '',
    gameCards: []
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
                cards: displayedСards,
                copyCard: displayedСards
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

                if (state.copyCard.length > 0) {

                    const cardsPl = [...state.copyCard]
                    var random = Math.floor(Math.random() *  cardsPl.length);
        
                    const audioObj = new Audio(`/${cardsPl[random].audioSrc}`);
                    audioObj.play()
    
                    // cardsPl.splice(random, 1)
                    
                    return {
                        ...state,
                        gameWord: state.copyCard[random].word,
                        // copyCard: cardsPl
                    }
                } else {
                    return console.log('end')
                } 
               
            
        }

        case 'MARK_CORRECT': {
            debugger
            
            const audioObj = new Audio('audio/correct-answer.mp3')
            audioObj.play()

            const word = action.payload 

            const {copyCard} = state
            
            const newAray = copyCard.filter((elem) => {
                return elem.word !== word 
            })

            console.log(newAray)

            return {    
                ...state,
                correctAnswer: [...state.correctAnswer, word],
                answers: [...state.answers, {word: `${word}`, answer: true}],
                copyCard: newAray
            }
        }

        case 'MARK_ERROR': {

            const audioObj = new Audio('audio/error2.mp3')
            audioObj.play()

            const word = action.payload

            return {
                ...state,
                // correctAnswer: false,
                answers: [...state.answers, {word: `${word}`, answer: false}],

            }
        }



        default: {
            return state
        }
    }
}