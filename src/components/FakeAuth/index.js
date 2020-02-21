import axios from 'axios';
import {Routes} from '../../routes';

export const FakeAuth = {
    tokenAuth: () => {
        return sessionStorage.getItem('_token_auth')
    },
    tokenRefresh: sessionStorage.getItem('_token_refresh'),
    isAuthenticated: () => {
        if (FakeAuth.tokenAuth() === null || FakeAuth.tokenAuth() === undefined)
            return false;

        let jwt = parseJwt(FakeAuth.tokenAuth());
        return jwt.exp >= Date.now() / 1000
    },
    authenticate: token => {
        sessionStorage.setItem('_token_auth', token.access);
        sessionStorage.setItem('_token_refresh', token.refresh);
        localStorage.setItem('user', JSON.stringify(token.user));
    },
    signout: () => {
        sessionStorage.clear();
        localStorage.clear();
    },
    refresh: async () => {
        if (FakeAuth.tokenRefresh == null && FakeAuth.tokenAuth() == null)
            return false;

        return await axios.post(Routes.api_token_refresh, {refresh: this.tokenRefresh})
            .then(response => {
                console.log(response);
                return true
            })
            .catch(error => {
                console.log(error.response);
                return false
            })
    }
};

const parseJwt = token => {
    let base64Url = token.split('.')[1];
    let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    let jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
};