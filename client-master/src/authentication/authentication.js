class Authentication {

    static authenticateUser(token) {
        localStorage.setItem('token', token);
    }

    static isUserAuthenticated(){
        return localStorage.getItem('token') !== null;
    }

    static getToken(){
        return localStorage.getItem('token');
    }

}

export default Authentication;