import axios from 'axios';

import { Routes } from '../routes';

export const User = {
    login: async credentials => {
        return await axios.post(Routes.api_url_base + Routes.api_login, credentials)
            .then(response => {
                return response
            })
            .catch(error => {
                return error.response
            })
    },
}