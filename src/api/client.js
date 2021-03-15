import { create } from "apisauce";

const apiClient = create({
  baseURL: "http://192.168.1.13:19003/api",
});

export default apiClient;
