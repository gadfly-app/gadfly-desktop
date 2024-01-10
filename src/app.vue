<script setup>
console.log('👋 This message is being logged by "App.vue", included via Vite');

const router = useRouter();

router.beforeEach((guard) => {
  window.electronAPI.setTitle(guard.name);
})
console.log('hmm', router)

</script>

<template>
  <v-app>
    <v-navigation-drawer :model-value="true" permanent width="200">
      <v-list-item title="Gadfly Desktop"></v-list-item>
      <v-divider></v-divider>
      <v-list-item prepend-icon="mdi-home" title="Home" to="/"></v-list-item>
      <v-list-item prepend-icon="mdi-cog" title="Settings" to="/settings"></v-list-item>
    </v-navigation-drawer>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<style>
html {
  overflow: auto !important;
}
</style>
