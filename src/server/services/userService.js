import axios from "../axios";
import { API_VERSION_1_0 } from '../../constants/ApiPath';

const moduleRoot = API_VERSION_1_0 + '/auth';


class userService {

  registerUser(data) {
    return axios.post(`${moduleRoot}/signup`, data);
  }

  verifyAccount(userId, token, data) {
    return axios.post(`${moduleRoot}/verify/${userId}/${token}`, data);
  }

  loginUser(data) {
    return axios.post(`${moduleRoot}/signin`, data);
  }

  forgotPassword(data) {
    return axios.post(`${moduleRoot}/forgot-password`, data);
  }

  resetPassword(userId, token, data) {
    return axios.post(`${moduleRoot}/reset-password/${userId}/${token}`, data);
  }

}
export default new userService();