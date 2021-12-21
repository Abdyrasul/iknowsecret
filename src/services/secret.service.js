import http from "../http-common";

class SecretDataService {
  getAll(params) {
    return http.get("/secret/all", { params });
  }

  create(data) {
    return http.post("/secret", data);
  }
  // other CRUD methods
}

export default new SecretDataService();