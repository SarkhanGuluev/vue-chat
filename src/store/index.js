import {createStore} from 'vuex'

const store = createStore({
    state() {
        return {
           modal: false,
           name: 'anonim',
           loader: false,
           user: null,
           isLogged: false,
           changeUserNameForm: false
        }
    },

    mutations: {
        setModal(state, payload) {
            state.modal = payload
        },
        setLoader(state, payload) {
            state.loader = payload
        },
        setUser(state, payload) {
            state.user = payload
        },
        setIsLogged(state, payload) {
            state.isLogged = payload
        }
    },
    getters: {
        getModal(state) {
            return state.modal
        },
        getName(state) {
            return state.name
        },
        getLoader(state) {
            return state.loader
        },
        getUser(state) {
            return state.user
        },
        getIsLogged(state) {
            return state.isLogged
        }

    }
})

export default store