<template>

    <button type="button" class="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
        <span class="sr-only">Open user menu</span>
        <img class="w-8 h-8 rounded-full" src="@/assets/logo.svg" alt="user photo">
    </button>
    <!-- Dropdown menu -->
    <div class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown">
        <div class="px-4 py-3" >
        <span class="block text-sm text-gray-900 dark:text-white">{{ getUserName() }}</span>
        <span class="block text-sm  text-gray-500 truncate dark:text-gray-400">{{ getUserEmail() }}</span>
        </div>
        <ul class="py-2" aria-labelledby="user-menu-button" >
            <li>
                <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</a>
            </li>
            <li>
                <RouterLink  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white" :to="`/user/${getUserId()}/edit`" aria-current="`user/${getUserId()}/edit`">Settings</RouterLink>
            </li>
            <li>
                <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Earnings</a>
            </li>
            <li>
                <a href="#" @click.stop.prevent="logoutUser()" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
            </li>
        </ul>
    </div>
    <button data-collapse-toggle="mobile-menu-2" type="button" class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button>
</template>

<script setup lang="ts">
import { onUpdated, onMounted, computed} from 'vue'

import { initFlowbite } from 'flowbite'
import { useStore } from 'vuex'

onUpdated(()=>{
  initFlowbite();
});


const store = useStore()

function logoutUser(){
    store.dispatch('user/sessionManager/logoutUser')
};

function getUserName(){
    return store.getters['user/sessionManager/getUserName'];
}
function  getUserEmail(){
    return  store.getters['user/sessionManager/getUserEmail'];
}

function getUserId(){

    return store.getters['user/sessionManager/getUserId'];
}


onMounted(() => {
    initFlowbite();
});

</script>
