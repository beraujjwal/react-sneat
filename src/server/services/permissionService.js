import axios from "../axios";
import { API_VERSION_1_0 } from '../../constants/ApiPath';

const moduleRoot = API_VERSION_1_0;


class permissionService {

  findAll() {
    return axios.get(`${moduleRoot}/permissions`);
  }

  createOne( data ) {
    return axios.post(`${moduleRoot}/permission`, data);
  }

  retrieveOne( id ) {
    return axios.get(`${moduleRoot}/permission/${id}`);
  }

  updateOne( id, data ) {
    return axios.put(`${moduleRoot}/permission/${id}`, data);
  }

  removeOne( id ) {
    return axios.delete(`${moduleRoot}/permission/${id}`);
  }

}
export default new permissionService();