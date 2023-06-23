<template>
    <div>
      <form method="post" action="/">

      </form>
    </div>
  </template>

  <script lang="ts">
  import { defineComponent } from "vue";
  //import { useStore } from "pinia";
  import { useRestaurantListStore } from "@/store/modules/restaurant_list";

  export default defineComponent({
    name: "RestaurantList",
    async setup()  {
        const restaurantListStore = useRestaurantListStore();
        await restaurantListStore.getRestaurants();
        return {
            restaurants: restaurantListStore.restaurants,
        };
    },
  });
  </script>

