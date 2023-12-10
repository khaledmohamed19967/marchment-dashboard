<template>
  <v-navigation-drawer location="left" temporary>
    <v-list>
      <v-list-item
        v-for="(links, index) in sideBarRouters"
        :key="index"
        :title="links.title"
        @click="$router.push(links.to)"
      ></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import type { ISideBarItems } from "@/types";

export default defineComponent({
  setup() {
    const sideBarRouters: ISideBarItems[] = [
      {
        title: "profile",
        to: "/",
      },
      {
        title: "payment",
        to: "/payment",
      },
    ];
    return {
      sideBarRouters,
    };
  },
});
</script>
