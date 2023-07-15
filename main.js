import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import "@mdi/font/css/materialdesignicons.css"
import VueGoogleMaps from '@fawmi/vue-google-maps'

const vuetify = createVuetify({
  components,
  directives,
})
createApp(App).use(VueGoogleMaps, {
  load: {
      key: 'YOUR_API_KEY_COMES_HERE',
  },
}).use(store).use(vuetify).use(router).mount('#app')
