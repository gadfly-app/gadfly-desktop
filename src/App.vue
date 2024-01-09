<script setup>
import { useRouter } from 'vue-router';


console.log('👋 This message is being logged by "App.vue", included via Vite');

import { useAuth0 } from '@auth0/auth0-vue';
const { loginWithRedirect, user, isAuthenticated, logout } = useAuth0();

function testClick() {
  window.electronAPI.setTitle('Set Title')
  window.electronAPI.sendNotification('Set Title', 'done')
}

async function onLogout() {
  await logout({ logoutParams: { returnTo: 'http://localhost/callback' } });
}

const router = useRouter();

router.beforeEach((to, from, next) => {

  console.log("beforeach");
});

router.afterEach((to, from) => {
});
</script>

<template>
  <v-app>
    <h1>💖 Hello World!</h1>
    <p>Welcome to your Electron application.</p>

    <v-container>
      <div v-if="user">Logged in as {{ user.name }}</div>

      <v-btn @click="testClick">Test</v-btn>

      <v-btn v-if="!isAuthenticated" color="primary" @click="loginWithRedirect">Login</v-btn>
      <v-btn v-if="isAuthenticated" color="secondary" @click="onLogout">Logout</v-btn>
    </v-container>
  </v-app>
</template>
