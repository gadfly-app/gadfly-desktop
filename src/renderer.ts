import { createAuth0 } from '@auth0/auth0-vue';
import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './app.vue';

import '@mdi/font/css/materialdesignicons.css';

import { createVuetify } from 'vuetify';
import 'vuetify/styles';

const routes = [
  { path: '/', name: 'home', component: () => import('./pages/home.vue') },
  { path: '/settings', name: 'settings', component: () => import('./pages/settings.vue') },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const vuetify = createVuetify({
  // ... your configuration
});

// TODO - don't hardcode
const auth0 = createAuth0({
  domain: 'gadfly-dev.us.auth0.com',
  clientId: 'tZoRcemtkAokAwfo0mMUyHgeJVbd73G4',
  authorizationParams: {
    redirect_uri: 'http://localhost/callback',
    scope: 'openid email profile offline_access',
    prompt: 'select_account',
  },
  cacheLocation: 'localstorage',
  useRefreshTokens: true,
});

const app = createApp(App);
app.use(router);
app.use(auth0);
app.use(vuetify);

router.isReady().then(() => {
  app.mount('#app');
});
