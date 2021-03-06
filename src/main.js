import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
Vue.prototype.$ajax = axios

import 'assets/sass/main.scss'
import 'assets/static/fonticon/iconfont.css'

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
global.MintUI = MintUI;

import vuePicturePreview from 'vue-picture-preview'
Vue.use(vuePicturePreview)

router.beforeEach((to, from, next) => {
	let { meta , path } = to
	if (meta && meta.title) document.title = meta.title
	next()
})

new Vue({
	el: '#app',
	router,
	render: h => h(App),
	mounted() {}
})
