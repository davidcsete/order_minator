<script lang="ts">
import type { Restaurant } from "@/types/restaurant/restaurant";
import { defineComponent } from "vue";

export default defineComponent({
    name: 'Create',
    data() {
      return {
        restaurants: {} as Restaurant
      }
    },

  });
</script>
<template>
    <div>
      <form method="post" action="/">
        <h1 class="text-white">CREATE</h1>
      </form>
    </div>
  </template>



