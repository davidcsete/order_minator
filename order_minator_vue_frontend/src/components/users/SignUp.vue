<script setup lang="ts">
import OwnerSignUp from "@/components/users/owner/OwnerSignUp.vue";
import { ref } from 'vue';
const user_type = ref("Customer");
</script>
<template>
    <div class="p-10 text-gray-900 dark:text-gray-300">
        <h3 class="mb-4 font-semibold text-gray-900 dark:text-white">Are you a/an ... ?</h3>
        <ul class="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
            <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                <div class="flex items-center pl-3">
                    <input id="horizontal-list-radio-license" type="radio" value="Customer" v-model="user_type" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                    <label for="horizontal-list-radio-license" class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Customer</label>
                </div>
            </li>
            <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                <div class="flex items-center pl-3">
                    <input id="horizontal-list-radio-id" type="radio" value="Owner" v-model="user_type" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                    <label for="horizontal-list-radio-id" class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Owner</label>
                </div>
            </li>
            <li class="w-full dark:border-gray-600">
                <div class="flex items-center pl-3">
                    <input id="horizontal-list-radio-passport" type="radio" value="Associate" v-model="user_type" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                    <label for="horizontal-list-radio-passport" class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Associate</label>
                </div>
            </li>
        </ul>

        <div v-if="user_type== 'Owner'">
            <OwnerSignUp/>
        </div>
        <div v-else-if="user_type== 'Customer'">
            TODO Cust
        </div>
        <div v-else>
            TODO Assoc
        </div>
    </div>
</template>
