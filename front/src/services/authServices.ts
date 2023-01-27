import axios from "axios";
import { RegisterForm, User } from "../types/user";
import { API_URL } from "../utils/url";

class AuthService {
  register(data: RegisterForm) {
    return axios.post<string>(API_URL + "/users/create", data);
  }
}

export default new AuthService();
