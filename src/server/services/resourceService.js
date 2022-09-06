import axios from "../axios";
import { API_VERSION_1_0 } from '../../constants/ApiPath';

const moduleRoot = API_VERSION_1_0;


class resourceService {

  findAll() {
    return axios.get(`${moduleRoot}/resources`);
  }

  createOne( data ) {
    return axios.post(`${moduleRoot}/resource`, data);
  }

  retrieveOne( id ) {
    return axios.get(`${moduleRoot}/resource/${id}`);
  }

  updateOne( id, data ) {
    return axios.put(`${moduleRoot}/resource/${id}`, data);
  }

  removeOne( id ) {
    return axios.delete(`${moduleRoot}/resource/${id}`);
  }

}
export default new resourceService();