import { defineStore } from "pinia";
import axios from "axios";

export const useUserStore = defineStore("user", {
  state: () => ({
    user: null,
    loginStatus: false,
  }),
  getters: {},
  actions: {
    async checkAuth() {
      try {
        console.log("Checking auth status...");
        const response = await fetch("http://localhost:3000/protected", {
          method: "GET",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
        });
        if (response.status === 201) {
          console.log("User is logged in: ");
          this.loginStatus = true;
          this.user = await response.json();
          console.log(this.user);
        } else {
          console.log("User is not logged in");
          this.loginStatus = false;
          this.user = null;
        }
      } catch (error) {
        console.log("Error checking status:");
        console.log(error);
        this.loginStatus = false;
        this.user = null;
      }
    },
    setUser(obj) {
      this.user = obj;
    },
    login() {
      this.loginStatus = true;
    },
    logout() {
      this.loginStatus = false;
    },
  },
});

export const refreshUserStore = async (store) => {};
