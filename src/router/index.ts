import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue';
import ModalView from "@/views/ModalView.vue";
import AddView from "@/views/AddView.vue";
import AddAView from "@/views/AddAView.vue";
import GetMemes from "@/views/GetMemesView.vue";
import ChartView from "@/views/ChartView.vue";
import CatchMeNotView from "@/views/CatchMeNotView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [{
    path: '/',
    name: 'home',
    component: HomeView
  }, {
    path: '/modal',
    name: 'modal',
    component: ModalView
  }, {
    path: '/add',
    name: 'add',
    component: AddView
  }, {
    path: '/addA',
    name: 'addA',
    component: AddAView
  }, {
    path: '/getMemes',
    name: 'getMemes',
    component: GetMemes
  }, {
    path: '/chart',
    name: 'chart',
    component: ChartView
  }, {
    path: '/catch-me-not',
    name: 'catch-me-not',
    component: CatchMeNotView,
  }
]});
export default router
