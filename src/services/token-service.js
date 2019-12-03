
class TokenService {

    constructor() {
        this.url = 'https://academeez-login-ex.herokuapp.com';
    }

    getTokenLogin(userDetails) {
        const loginUrl = `${this.url}/api/users/login`
        return fetch(loginUrl, {
            method: 'POST',
            body: JSON.stringify(userDetails),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response=>response.json())
        .then(token=>token)
    }

}

export default new TokenService();