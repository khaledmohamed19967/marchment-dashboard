<template>
  <AppForm
    @onSubmit="submit"
    title="Register"
    description="Please ensure that the information you provide is accurate:"
  >
    <!-- first name -->
    <v-text-field
      v-model="formData.first_name"
      outline
      :rules="requiredField"
      label="first name"
      type="text"
    ></v-text-field>

    <!-- last name -->
    <v-text-field
      v-model="formData.last_name"
      :rules="requiredField"
      outline
      label="last name"
      type="text"
    ></v-text-field>

    <!-- gender -->
    <v-select
      v-model="formData.gender"
      :rules="requiredField"
      label="Gender"
      :items="['female', 'male']"
    ></v-select>

    <!-- password -->
    <v-text-field
      :rules="requiredField"
      v-model="formData.password"
      outline
      hide-details
      label="Password"
      type="password"
    ></v-text-field>
    <template #formActions>
      <v-spacer></v-spacer>
      <v-btn :loading="loading" type="submit" color="info">
        <v-icon left>lock</v-icon>
        Login
      </v-btn>
    </template>
  </AppForm>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import AppForm from "@/components/AppForm.vue";
import { useAuthStore } from "~/store/auth-store.js";
import { useRouter } from "vue-router";
import type { ILoginForm } from "~/types/index.js";

definePageMeta({
  layout: "auth",
});

export default defineComponent({
  components: {
    AppForm,
  },
  setup() {
    /*
     * ----------------------------
     * Store Variables
     * ----------------------------
     */
    const authStore = useAuthStore();
    /*
     * ----------------------------
     * Global Variables
     * ----------------------------
     */
    const router = useRouter();
    const loading = ref(false);
    const formData = ref<ILoginForm>({
      first_name: "",
      last_name: "",
      password: "",
      gender: "",
    });
    const requiredField = ref([(v: string) => !!v || "Password is required"]);

    /*
     * ----------------------------
     * Submit login form
     * ----------------------------
     */
    const submit = async () => {
      loading.value = true;
      try {
        await authStore.dispatchLogin(formData.value);
        return router.push("/");
      } catch (e) {
        /* empty */
      }
      loading.value = false;
    };

    return {
      submit,
      formData,
      loading,
      requiredField,
    };
  },
});
</script>
