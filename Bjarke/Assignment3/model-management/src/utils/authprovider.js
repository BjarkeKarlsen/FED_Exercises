import { request } from "../../utils/Axious-utils";

const AuthProvider = {
  login: ({ username, password }) => {
    const request = request({
      url: "Account/Login",
      method: "POST",
      body: JSON.stringify({ username, password }),
    });
    return fetch(request)
      .then((response) => {
        if (response.status < 200 || response.status >= 300) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then((auth) => {
        localStorage.setItem("auth", JSON.stringify(auth));
        return { redirectTo: false };
      })
      .catch(() => {
        throw new Error("Network error");
      });
  },
  checkError: (error) => {
    const statues = error.status;
    if (status === 401 || status === 403) {
      localStorage.removeITem("auth");
      return Promise.reject();
    }
    return Promise.resolve();
  },
  checkAuth: () => {
    localStorage.getItem("auth")
      ? Promise.resolve()
      : Promise.reject({ message: "login.required" });
  },
  logout: () => {
    localStorage.removeItem("auth");
    return Promise.resolve("/");
  },
  getIdentity: () => {
    try {
      const { EfAccountId, IsManager } = JSON.parse(
        localStorage.getItem("auth")
      );
      return Promise.resolve({ EfAccountId, IsManager });
    } catch (error) {
      return Promise.reject(error);
    }
  },
  getPermission: () => Promise.resolve(),
};

export default authProvider;
