import { createStore } from 'redux'

const defaultState = {
    value: 0,
}

const reducer = (state = defaultState, action) => {
    switch (action.type){


        default:
            return state
    }
}

const store = createStore()