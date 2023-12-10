<template>
  <v-layout>
    <AppHeader />
    <v-main>
      <v-container>
        <slot />
      </v-container>
    </v-main>
  </v-layout>
</template>

<script>
import { defineComponent } from "vue";
import AppHeader from "@/components/layouts/AppHeader.vue";
export default defineComponent({
  components: {
    AppHeader,
  },
});
</script>
