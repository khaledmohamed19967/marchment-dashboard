import { persistedState } from "@/.nuxt/imports";
import type { ILoginForm } from "~/types";
export const useAuthStore = defineStore("authStore", {
  state: () => ({
    userInfo: {} as ILoginForm,
    isLoggedIn: false,
  }),
  getters: {
    getUserInfo: (state): ILoginForm => state.userInfo,
    getIsLoggedIn: (state) => {
      console.log(Object.keys(state.userInfo).length);
      return Object.keys(state.userInfo).length > 0;
    },
  },
  actions: {
    /*
     * ------------------------------------
     * this method invokes for dispatch
     * use login
     * -----------------------------------
     */
    dispatchLogin(formData: ILoginForm) {
      return new Promise((resolve) => {
        setTimeout(() => {
          this.userInfo = formData;
          resolve(formData);
        }, 800);
      });
    },
    /*
     * ------------------------------------
     * this method invokes for dispatch
     * logout function
     * -----------------------------------
     */
    dispatchLogout() {
      this.userInfo = {} as ILoginForm;
      localStorage.clear();
      navigateTo("/auth/login");
    },
  },
  persist: {
    storage: persistedState.localStorage,
  },
});
