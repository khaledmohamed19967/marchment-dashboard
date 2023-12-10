<template>
  <AppForm
    title="Profile data"
    description="Please ensure that the information you provide is accurate:"
  >
    <!-- first name -->

    <v-text-field
      v-model="formData.first_name"
      outline
      label="first name"
      type="text"
    ></v-text-field>

    <!-- last name -->
    <v-text-field
      v-model="formData.last_name"
      outline
      label="last name"
      type="text"
    ></v-text-field>

    <!-- Gender -->
    <v-select
      v-model="formData.gender"
      label="Gender"
      :items="['female', 'male']"
    ></v-select>

    <!-- Password -->
    <v-text-field
      v-model="formData.password"
      outline
      hide-details
      label="Password"
      type="password"
    ></v-text-field>
  </AppForm>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { onMounted } from "~/.nuxt/imports";
import { useAuthStore } from "~/store/auth-store";
import type { ILoginForm } from "~/types";
import AppForm from "~/components/AppForm.vue";

export default defineComponent({
  components: {
    AppForm,
  },
  setup() {
    const authStore = useAuthStore();
    const formData: any = ref<ILoginForm>({
      first_name: "",
      gender: "",
      last_name: "",
      password: "",
    });

    onMounted(() => {
      formData.value = authStore.getUserInfo;
    });

    return {
      formData,
    };
  },
});
</script>
