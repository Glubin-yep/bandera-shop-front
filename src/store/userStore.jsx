import { makeAutoObservable } from "mobx";
import AuthService from "../services/AuthService";
import axios from "axios";
import api, { API_URL } from "../http";

class UserStore {
  user = {};
  isAuthenticated = false;

  constructor() {
    makeAutoObservable(this);
  }

  setIsAuthenticated(bool) {
    this.isAuthenticated = bool;
  }

  setUser(user) {
    this.user = user;
  }

  async Login(email, password) {
    try {
      const response = await AuthService.login(email, password);
      localStorage.setItem("token", response.data.accessToken);
      this.setIsAuthenticated(true);
      this.setUser(response.data.user);
      alert("Авторизацію виконано");
    } catch (e) {
      alert(e.response?.data?.message);
      console.log(e.response?.data?.message);
    }
  }

  async registration(email, password) {
    try {
      const response = await AuthService.registration(email, password);
      localStorage.setItem("token", response.data.accessToken);
      this.setIsAuthenticated(true);
      this.setUser(response.data.user);
      alert("Регістрацію виконано");
    } catch (e) {
      alert(e.response?.data?.message);
      console.log(e.response?.data?.message);
    }
  }

  async logout() {
    try {
      const response = await AuthService.logout();
      localStorage.removeItem("token");
      this.setIsAuthenticated(false);
      this.setUser({});
    } catch (e) {
      alert(e.response?.data?.message);
      console.log(e.response?.data?.message);
    }
  }

  async checkAuth() {
    try {
      const response = await axios.get(`${API_URL}/refresh`, {
        withCredentials: true,
      });
      localStorage.setItem("token", response.data.accessToken);
      this.setIsAuthenticated(true);
      this.setUser(response.data.user);
    } catch (e) {
      alert(e.response?.data?.message);
      console.log(e.response?.data?.message);
    }
  }
}

const userStore = new UserStore();

export default userStore;
