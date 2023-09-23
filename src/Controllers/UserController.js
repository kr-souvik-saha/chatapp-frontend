const {
    registerModel,
    loginModel,
    logoutModel,
    profileModel
} = require('../Models/UserModel');

const registerController = (username, password) => {
    return registerModel(username, password)
};

const loginController = (username, password) => {
    return loginModel(username, password)
};

const logoutController = () => {
    return logoutModel();
}

const profileController = () => {
    return profileModel();
}

export {
    registerController,
    loginController,
    logoutController,
    profileController
}