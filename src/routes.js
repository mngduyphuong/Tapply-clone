import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import Homepage from './components/Home.vue'

Vue.use(VueRouter)

export const router = new VueRouter({
    routes: [
        {path: '/', component: Homepage},
        {path: '/Hello', component: HelloWorld},
        
    ]
})