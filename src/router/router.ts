import LoginPage from '@/page/Auth/Login/LoginPage.vue'
import HomePage from '@/page/Home/HomePage.vue'
import type { DefineComponent } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { setupRouteGuard } from './guard/route.guard'

export type TRoute = {
  path: string
  component: DefineComponent<any, any, any>
  isPublic?: boolean
}

const routes: TRoute[] = [
  { path: '/', component: HomePage },
  { path: '/login', component: LoginPage, isPublic: true },
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

setupRouteGuard(router, routes)

export default router
