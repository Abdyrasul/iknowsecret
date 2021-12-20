import http from "../http-common";

class SecretDataService {
  getAll(params) {
    return http.get("/secret/all", { params });
  }

  // other CRUD methods
}

export default new SecretDataService();