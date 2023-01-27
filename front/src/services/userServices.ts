import axios from 'axios';
import { User } from "../types/user";
import { API_URL } from "../utils/url";


class UserServices {

  getAllUsers() {
    return axios.get<User[]>(API_URL + "/users");
  }

  updateUser(id: number, modifyData: User) {
    return axios.put<User>(API_URL + `/users/modify/${id}`, modifyData);
  }

  getOne(id: number) {
    return axios.get<User>(API_URL + `/users/profile/${id}`);
  }

  remove(id: number) {
    return axios.delete<User>(API_URL + `/users/delete/${id}`);
  }
}

export default new UserServices();