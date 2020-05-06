const url = 'https://5e82ac6c78337f00160ae496.mockapi.io/api/v1/contacts';

class Api {
    static getContacts = () => {
        return fetch(url)
        .then(res => res.json());
    };
}

export default Api;