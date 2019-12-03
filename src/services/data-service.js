class DataService{

    
    constructor() {
        this.url = 'https://academeez-login-ex.herokuapp.com/api/tasks';
    }

    getData(token) {
        return fetch(this.url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
        .then(response=>response.json())
        .then(data=>data)
    }
}

export default new DataService()