import { createApp } from 'vue'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { VDateInput } from 'vuetify/labs/VDateInput'

// Components
import App from './App.vue'

const vuetify = createVuetify({
  components: {
	...components,
	VDateInput
  },
  directives,
})

createApp(App).use(vuetify).mount('#app')