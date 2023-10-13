import { createApp } from 'vue'
import App from './App.vue'
import vue3GoogleLogin from 'vue3-google-login'

var app = createApp(App)
app.use(vue3GoogleLogin, {
    clientId: '788564963249-gj4kccg0o5v42he661c0v8hqf8n8sard.apps.googleusercontent.com'
  }).mount('#app')