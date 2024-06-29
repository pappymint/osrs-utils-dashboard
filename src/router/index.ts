import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/calc/money-maker/super-combat',
      name: 'superCombatCalc',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/SuperCombatCalc.vue')
    },
    {
      path: '/calc/money-maker/rune-items-high-alch',
      name: 'runeAlchCalc',
      component: () => import('@/views/RuneAlchCalc.vue')
    },
    {
      path: '/item-lookup',
      name: 'itemLookup',
      component: () => import('@/views/ItemLookup.vue')
    }
  ]
})

export default router
