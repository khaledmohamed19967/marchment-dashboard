import { useAuthStore } from "@/store/auth-store";

export default defineNuxtRouteMiddleware(async (to, from) => {
  if (process.server) return;
  const authStore = useAuthStore();
  const isAuthenticated = authStore.getIsLoggedIn;
  if (!isAuthenticated && to.path !== "/auth/login") {
    return navigateTo("/auth/login");
  }
  if (isAuthenticated && to.path === "/auth/login") {
    return navigateTo("/");
  }
});
