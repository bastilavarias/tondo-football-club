import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _2a44277e = () => interopDefault(import('..\\pages\\about-us.vue' /* webpackChunkName: "pages_about-us" */))
const _1cb8c6f6 = () => interopDefault(import('..\\pages\\articles\\index.vue' /* webpackChunkName: "pages_articles_index" */))
const _7f3d897d = () => interopDefault(import('..\\pages\\team.vue' /* webpackChunkName: "pages_team" */))
const _77186f12 = () => interopDefault(import('..\\pages\\leagues\\7s-football-league.vue' /* webpackChunkName: "pages_leagues_7s-football-league" */))
const _c78559cc = () => interopDefault(import('..\\pages\\programs\\supremo-futsal-league.vue' /* webpackChunkName: "pages_programs_supremo-futsal-league" */))
const _188caaa5 = () => interopDefault(import('..\\pages\\articles\\_slug\\index.vue' /* webpackChunkName: "pages_articles__slug_index" */))
const _456b7862 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about-us",
    component: _2a44277e,
    name: "about-us"
  }, {
    path: "/articles",
    component: _1cb8c6f6,
    name: "articles"
  }, {
    path: "/team",
    component: _7f3d897d,
    name: "team"
  }, {
    path: "/leagues/7s-football-league",
    component: _77186f12,
    name: "leagues-7s-football-league"
  }, {
    path: "/programs/supremo-futsal-league",
    component: _c78559cc,
    name: "programs-supremo-futsal-league"
  }, {
    path: "/articles/:slug",
    component: _188caaa5,
    name: "articles-slug"
  }, {
    path: "/",
    component: _456b7862,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
