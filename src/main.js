import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/global.css'

import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import 'element-plus/dist/index.css';
import * as ElIconModules from '@element-plus/icons-vue'//导入所有element icon图标
const app = createApp(App)
app.use(store).use(router)

app.use(ElementPlus, {
    locale: zhCn,//使用中文语言
})

// 全局注册element-plus icon图标组件
Object.keys(ElIconModules).forEach((key) => {//循环遍历组件名称
    if ("Menu" !== key) {//如果不是图标组件不是Menu，就跳过，否则加上ICon的后缀
        app.component(key, ElIconModules[key]);
    } else {
        app.component(key + "Icon", ElIconModules[key]);
    }
});
app.mount('#app')

