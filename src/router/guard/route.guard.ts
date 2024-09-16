import type { Router } from 'vue-router'
import type { TRoute } from '../router'

export function setupRouteGuard(router: Router, routes: TRoute[]) {
  const publicPath = routes.filter((route) => route.isPublic === true).map((route) => route.path)

  router.beforeEach((to, from, next) => {
    if (publicPath.includes(to.path)) {
      next()
      return
    }

    const accessToken = localStorage.getItem('accessToken')
    if (authenticationGuard(accessToken)) {
      next()
      return
    }

    next('/login')
  })
}

function authenticationGuard(accessToken: string | null) {
  return !!accessToken || accessToken?.length === 0
}
