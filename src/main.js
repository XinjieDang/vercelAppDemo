import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import { Button, Tabbar, TabbarItem, Icon, Image as VanImage } from 'vant'
const app = createApp(App)
app
  .use(Button)
  .use(Tabbar)
  .use(TabbarItem)
  .use(Icon)
  .use(VanImage)
  .use(router)
  .mount('#app')
