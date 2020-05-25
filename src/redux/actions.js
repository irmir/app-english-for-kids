
export const showCategoryCards = (id) => ({
    
    type: 'SHOW_CATEGORY_CARDS',
    payload: id
})

export const getCategoryCards = () => ({
    type: 'GET_CATEGORY_CARDS'
})

export const getSoundWord = (audio) => ({
    type: 'GET_SOUND_WORD',
    payload: audio
})

export const getWordTraslation = (word) => ({
    type: 'GET_TRANSLATION',
    payload: word
})

export const showMenu = () => ({
    type: 'SHOW_MENU'
})

export const switchAplicationMode = () => ({
    type: 'SWITCH_MODE'
}) 

export const startTheGame = () => ({
    type: 'START_GAME'
})

export const markCorrectAnswer = (word) => ({
    type: 'MARK_CORRECT',
    payload: word
}) 

export const markWrongAnswer = (word) => ({
    type: 'MARK_ERROR',
    payload: word
})