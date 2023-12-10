<template>
  <div class="auth-login d-flex align-center justify-center">
    <v-card max-width="700px" elevation="4" light tag="section">
      <v-card-title>
        <v-layout align-center justify-space-between>
          <h3 class="headline">{{ title }}</h3>
        </v-layout>
      </v-card-title>
      <v-divider></v-divider>
      <v-card-text>
        <p>{{ description }}:</p>
        <v-form v-model="form" fast-fail @submit.prevent="submitForm">
          <slot></slot>
          <v-divider></v-divider>
          <v-card-actions>
            <v-spacer></v-spacer>
            <slot type="submit" name="formActions"></slot>
          </v-card-actions>
        </v-form>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
export default defineComponent({
  props: {
    title: { type: String, required: true },
    description: { type: String, required: true },
  },
  setup(props, { emit }) {
    const form = ref(false);
    const submitForm = async () => {
      if (form.value) emit("onSubmit");
    };

    return {
      submitForm,
      form,
    };
  },
});
</script>

<style scoped>
.auth-login {
  height: 100vh;
}
</style>
