import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import installElementPlus from './plugins/element'
import * as echarts from "echarts";

const app = createApp(App)
installElementPlus(app)
app.config.globalProperties.$echarts = echarts

app.use(createPinia())
app.use(router)

app.mount('#app')
