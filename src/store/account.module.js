import {userService} from '../service';
import { USERNAME_DEV,PASSWORD_DEV } from "../common/constant";
import {
    router
} from '@/router';

// estado inicial del modulo
const initialState = () => ({
    status: {
        loggedIn: false,
        errorLogin : false,
    },
    user: null,
    saludo: '',
});

const state = initialState();

const actions = {
    login({
        commit
    }, user) {
        if(user.username === USERNAME_DEV && user.password === PASSWORD_DEV){
            commit('loginSuccess', user);
            router.push('/');
        }else {
            commit('errorLogin');
        }
    },
    logout( {commit} ) {
        commit('logout');
    },
    resetState({
        commit
    }) {
        commit('stateReset');
        router.push('/login')
    }
};

const mutations = {

    loginSuccess(state, user) {
        state.status = {
            loggedIn: true,
            errorLogin : false,
        };
        const userAuth = userService.login(user.username,user.password);
        state.user = userAuth;
    },
    errorLogin (state) {
        state.status =  {
            errorLogin : true,
        };
    },
    logout(){
        const logoutResponse =  userService.logout();
        state.user = logoutResponse.logout; 
        router.push('/login')
    },
    stateReset(state) {
        const newstate = initialState();
        Object.keys(newstate).forEach(key => {
            state[key] = newstate[key];
        });
    },

};

const getters = {
    isLoggedIn: state => {
        return state.status.loggedIn;
    },
    isErrorLogin : state => {
        return state.status.errorLogin;
    }
};

export const account = {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
};