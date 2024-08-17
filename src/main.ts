import { createApp } from 'vue'
import { Quasar } from 'quasar'

// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css'
import '@quasar/extras/fontawesome-v5/fontawesome-v5.css'

// Import Quasar css
import 'quasar/src/css/index.sass'
import '@/assets/css/global-styles.css'

import App from './App.vue'
import router from './routers'
import { createPinia } from 'pinia'

const initApp = ()=>{
    const app = createApp(App)
    app.use(Quasar, {
        plugins: {}, // import Quasar plugins and add here
    })
    app.use(createPinia())
    app.use(router)
    router.isReady().then(() => {
        console.log('router ready')
        app.mount('#app', true)
      })
}
initApp()
