import api from "../Common/api";

const login = (data) => api.post("/authPersons/login", data);

export default {
    login
};