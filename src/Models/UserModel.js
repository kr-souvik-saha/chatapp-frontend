import axios from "axios"

const registerModel = async (username, password) => {
    const response = await axios.post('http://localhost:5000/auth/register', {
        username,
        password
    }, {
        headers: {
            'Content-Type': 'application/json'
        },
        withCredentials: true
    });
    return response;
}

const loginModel = async (username, password) => {
    const response = await axios.post('http://localhost:5000/auth/login', {
        username,
        password
    }, {
        headers: {
            'Content-Type': 'application/json'
        },
        withCredentials: true
    });
    return response
}

const logoutModel = async () => {
    const response = await axios.get('http://localhost:5000/auth/logout');
    return response;
}

const profileModel = async () => {
    try {
        const response = await axios.get('http://localhost:5000/auth/profile', {
            headers: {
                'Content-Type': 'application/json'
            },
            withCredentials: true
        });
        return response;
    } catch (err) {

        return err;
    }


}

export {
    registerModel,
    loginModel,
    logoutModel,
    profileModel
};