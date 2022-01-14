import { createStore } from 'redux'

const defaultState = {
    cash: 0,
}

const reducer = (state = defaultState, action) => {
    switch (action.type){


        default:
            return state
    }
}

const store = createStore()