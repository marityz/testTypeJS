import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue';
import ModalView from "@/views/ModalView.vue";
import AddView from "@/views/AddView.vue";
import AddAView from "@/views/AddAView.vue";
import GetMemes from "@/views/GetMemes.vue";
import ChartView from "@/views/ChartView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/modal',
      name: 'modal',
      component: ModalView
    },
    {
      path: '/add',
      name: 'add',
      component: AddView
    },
    {
      path: '/addA',
      name: 'addA',
      component: AddAView
    },
    {
      path: '/getMemes',
      name: 'getMemes',
      component: GetMemes
    },
    {
      path: '/chart',
      name: 'chart',
      component: ChartView
    }

  ]

})
export default router
