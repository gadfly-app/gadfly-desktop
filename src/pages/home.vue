<script setup>
const { loginWithRedirect, user, isAuthenticated, logout } = useAuth0();


console.log('This message is being logged by "Home.vue", included via Vite')

function testClick() {
  window.electronAPI.sendNotification('Call prep!', 'sell sell sell')
}

async function onLogout() {
  await logout({ logoutParams: { returnTo: 'http://localhost/callback' } });
}
</script>

<template>
  <v-container>
    <h2>Home Page</h2>
    <div v-if="user">Logged in as {{ user.name }}</div>

    <v-btn @click="testClick">Test</v-btn>

    <v-btn v-if="!isAuthenticated" color="primary" @click="loginWithRedirect">Login</v-btn>
    <v-btn v-if="isAuthenticated" color="secondary" @click="onLogout">Logout</v-btn>
  </v-container>
</template>
