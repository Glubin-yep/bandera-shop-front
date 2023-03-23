import api from "../http";

export default class AuthService{
    static async login(email, password){
        return api.post('/login', {email, password})
    }

    static async registration(email, password){
        return api.post('/registration', {email, password})
    }

    static async logout(){
        return api.post('/logout')
    }

    //Для перевірки авторизації
    //TODO move this fun for another service
    static async getUsers(){
        return api.get('/users')
    }
}