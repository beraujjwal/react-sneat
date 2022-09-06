import axios from "../axios";
import { API_VERSION_1_0 } from '../../constants/ApiPath';

const moduleRoot = API_VERSION_1_0;


class roleService {

  findAll() {
    return axios.get(`${moduleRoot}/roles`);
  }

  createOne( data ) {
    return axios.post(`${moduleRoot}/role`, data);
  }

  retrieveOne( id ) {
    return axios.get(`${moduleRoot}/role/${id}`);
  }

  updateOne( id, data ) {
    return axios.put(`${moduleRoot}/role/${id}`, data);
  }

  removeOne( id ) {
    return axios.delete(`${moduleRoot}/role/${id}`);
  }

}
export default new roleService();