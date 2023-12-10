<template>
  <div>
    <!-- ---------------------------------------------- -->
    <!--- App Bar header -->
    <!-- ---------------------------------------------- -->
    <v-app-bar color="primary" prominent>
      <v-container class="d-flex align-center">
        <v-app-bar-nav-icon
          @click="toggleOpenSideBar"
          variant="text"
        ></v-app-bar-nav-icon>
        <v-toolbar-title>{{
          authStore.getUserInfo.first_name
        }}</v-toolbar-title>
      </v-container>
      <template v-slot:append>
        <v-btn @click="logout" size="large" icon="mdi-exit-to-app"></v-btn>
      </template>
    </v-app-bar>
    <!-- ---------------------------------------------- -->
    <!--- App Sidebar -->
    <!-- ---------------------------------------------- -->
    <app-side-bar v-model="drawer" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import AppSideBar from "@/components/layouts/AppSideBar.vue";
import { useAuthStore } from "~/store/auth-store";
export default defineComponent({
  components: { AppSideBar },
  setup() {
    /*
     * ----------------------------
     * Store variables
     * ----------------------------
     */
    const authStore = useAuthStore();
    /*
     * ----------------------------
     * Handle sidebar
     * ----------------------------
     */
    const drawer = ref(false);
    const toggleOpenSideBar = () => {
      drawer.value = !drawer.value;
    };
    /*
     * ----------------------------
     * logout
     * ----------------------------
     */
    const logout = () => {
      authStore.dispatchLogout();
    };

    return {
      drawer,
      toggleOpenSideBar,
      authStore,
      logout,
    };
  },
});
</script>
