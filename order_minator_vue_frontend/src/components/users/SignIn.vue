<script lang="ts">
import "@/store/index.ts";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "SignIn",
  computed: {
    ...mapGetters(["getAuthToken", "getUserEmail", "getUserID", "isAdmin", "isLoggedIn"]),
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
    ...mapActions(["registerUser", "loginUser", "logoutUser"]),
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
};

</script>
<template>

<form class="p-5" @submit="onLogin">
    <div class="mb-6">
        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email address</label>
        <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" required>
    </div>
    <div class="mb-6">
        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
        <input type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required>
    </div>
    <div class="flex items-start mb-6">

        <p class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Don't have an account yet? <router-link class="text-sm  text-blue-600 dark:text-blue-500 hover:underline" to="/sign_up">Sign up here</router-link>.</p>
    </div>
    <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form>

</template>
