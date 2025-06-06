import { createRouter, createWebHistory } from 'vue-router'
import { jwtDecode } from 'jwt-decode';
import type {
  RouteRecordRaw,
  RouteLocationNormalized,
  NavigationGuardNext
} from 'vue-router'
import Login from '../views/Login.vue'
import Signup from '../views/Signup.vue'
import Home from '../views/Home.vue'

const routes: RouteRecordRaw[] = [
  { path: '/', name: 'Home', component: Home, meta: { requiresAuth: true } },
  { path: '/login', name: 'Login', component: Login },
  { path: '/signup', name: 'Signup', component: Signup },
  { path: '/:pathMatch(.*)*', redirect: { name: 'Home' } }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext
) => {
  if (!to.meta.requiresAuth) return next();

  const token = localStorage.getItem('token');
  if (!token) return next({ name: 'Login' });

  try {
    const decodedToken = jwtDecode(token);
    const currentTime = Date.now() / 1000;

    if (!decodedToken || (decodedToken.exp && decodedToken.exp < currentTime)) {
      return next({ name: 'Login' });
    }

    return next();
  } catch (err) {
    return next({ name: 'Login' }); // Token decoding failed
  }

})

export default router
