<script lang="ts">
import { defineComponent, onMounted, onUpdated } from 'vue'
import { initFlowbite } from 'flowbite'
import "@/store/index";
import { mapActions, mapGetters } from "vuex";
import LoggedInButton from '@/components/users/LoggedInButton.vue'


export default defineComponent({
  components:{
    LoggedInButton
  },
  name: "NavBar",
  computed: {
    ...mapGetters({getAuthToken:"user/sessionManager/getAuthToken", getUserEmail:"user/sessionManager/getUserEmail", getUserID:"user/sessionManager/getUserID", isLoggedIn:"user/sessionManager/isLoggedIn"}),
  },
  data() {
    return {
      signUpEmail: "",
      signUpPassword: "",
      loginEmail: "",
      loginPassword: "",
    };

  },
  methods: {
    ...mapActions({registerUser: "user/sessionManager/registerUser", loginUser: "user/sessionManager/loginUser", logoutUser:"user/sessionManager/logoutUser"}),
    onSignUp(event: { preventDefault: () => void; }) {
      event.preventDefault();
      let data = {
        user: {
          email: this.signUpEmail,
          password: this.signUpPassword,
        },
      };
      this.registerUser(data);
      this.resetData();
    },
    onLogin(event: { preventDefault: () => void; }) {
      event.preventDefault();
      let data = {
        user: {
          email: this.loginEmail,
          password: this.loginPassword,
        },
      };
      this.loginUser(data);
      this.resetData();
    },
    resetData() {
      this.signUpEmail = "";
      this.signUpPassword = "";
      this.loginEmail = "";
      this.loginPassword = "";
    },
  },

});

</script>

<template>
<nav class="bg-white border-gray-200 dark:bg-transparent">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="https://flowbite.com/" class="flex items-center">
        <img src="https://flowbite.com/docs/images/logo.svg" class="h-8 mr-3" alt="Flowbite Logo" />
        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
    </a>
    <div class="flex items-center md:order-2"  v-if="isLoggedIn==true">
      <LoggedInButton/>
    </div>
    <div v-else class="flex items-center md:order-2">
        <div class="flex items-center">
            <RouterLink class="text-sm  text-blue-600 dark:text-blue-500 hover:underline" to="/sign_in">Login</RouterLink>
        </div>
    </div>
    <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="mobile-menu-2">
      <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
        <li>
            <RouterLink class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-orange-700 md:p-0 md:dark:text-orange-500" to="/" aria-current="/">Home</RouterLink>
        </li>
        <li>
          <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-orange-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
        </li>
        <li>
          <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-orange-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
        </li>
        <li>
          <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-orange-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Pricing</a>
        </li>
        <li>
          <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-orange-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
        </li>
      </ul>
    </div>
    </div>
  </nav>
</template>

