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
    gameCards: [],
    gameOver: false,
    errors: 0,
    isPlayed: false
}

export const bodyReducer = (state = defaultState, action) => {

    switch (action.type) {

        case 'GET_CATEGORY_CARDS': {
            const displayedСards = localStorage.getItem('cards') ?
                JSON.parse(localStorage.getItem('cards')) : []

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
                copyCard:displayedСards,
                activeCategory: id,
            }
        }

        case 'GET_TRANSLATION': {
            const word = action.payload

            return {
                ...state,
                wordTranslation: word,
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
                var random = Math.floor(Math.random() * cardsPl.length);

                const audioObj = new Audio(`/${cardsPl[random].audioSrc}`);
                audioObj.play()

                return {
                    ...state,
                    gameWord: state.copyCard[random].word,
                    isPlayed: true
                }
            } else {
                window.location = '/result'

                return {
                    ...state,
                    gameOver: true,
                    isPlayed: true
                }
            }
        }

        case 'MARK_CORRECT': {
            const audioObj = new Audio('audio/correct-answer.mp3')
            audioObj.play()

            const word = action.payload
            const { copyCard } = state
            const newAray = copyCard.filter((elem) => {
                return elem.word !== word
            })

            return {
                ...state,
                correctAnswer: [...state.correctAnswer, word],
                answers: [...state.answers, { word: `${word}`, answer: true }],
                copyCard: newAray
            }
        }

        case 'MARK_ERROR': {
            const audioObj = new Audio('audio/error2.mp3')
            audioObj.play()

            const word = action.payload
            const { errors } = state

            localStorage.setItem('errors', errors + 1)
            const err = JSON.parse(localStorage.getItem('errors'))

            return {
                ...state,
                errors: err,
                answers: [...state.answers, { word: `${word}`, answer: false }],
            }
        }

        case 'GET_ERRORS_VALUE': {
            const err = JSON.parse(localStorage.getItem('errors'))

            return {
                ...state,
                errors: err
            }
        }

        default: {
            return state
        }
    }
}