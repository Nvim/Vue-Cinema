import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({
    user: null,
    loginStatus: false,
    token: null,
  }),
  getters: {},
  actions: {
    setUser(obj) {
      this.user = obj;
    },
    setToken(tok) {
      this.token = tok;
    },
    login() {
      this.loginStatus = true;
    },
    logout() {
      this.loginStatus = false;
    },
  },
});
