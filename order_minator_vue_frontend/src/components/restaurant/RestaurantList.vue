<template>
    <div class="flow-root">
      <ul role="list" class="px-3 divide-y divide-gray-200 dark:divide-gray-700">
        <li class="pb-3 pl-2 sm:py-4 py-1" v-for="restaurant in restaurants" :key="restaurant.id">
          <div class="flex items-center space-x-4">
            <div class="flex-shrink-0">
                <img class="w-8 h-8 rounded-full" src="@/assets/logo.svg" alt="Neil image">
                <!-- <Avatar size="lg" img="http://localhost:8080/src/assets/logo.svg" class="mr-2.5" /> -->
            </div>
            <div class="flex-1 min-w-0">
                <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                  {{ restaurant.name }}
                </p>
                <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                  {{ restaurant.description }}
                </p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </template>

  <script lang="ts">
  import { defineComponent } from "vue";
  import { mapActions, mapGetters } from "vuex";
  import type { Restaurant } from "@/types/restaurant/restaurant";
  export default defineComponent({
    name: 'RestaurantList',
    computed: {
    ...mapGetters({getRestaurants: "restaurantList/getRestaurants"}),
    },
    methods: {
    ...mapActions({fetchRestaurants:"restaurantList/fetchRestaurants"}),
    },
    data() {
      return {
        restaurants: [] as Restaurant[]
      }
    },
    async mounted() {
      await this.fetchRestaurants();
      this.restaurants = this.getRestaurants;
    },
  });
  </script>

