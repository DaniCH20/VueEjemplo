import {createRouter , createWebHistory} from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import CatalogoView from '../views/CatalogoView.vue';
import MovieDetailView from '../views/MovieDetailView.vue';

const routes = [
   {path:'/',name:'home',component:HomeView},
  {path:'/about',name:'about',component:()=>import('../views/AboutView.vue')},
  {path:'/peliculas',name:'peliculas',component:()=>import('../views/CatalogoView.vue')},
   {path:'/pelicula/:id',name:'pelicula',component:MovieDetailView, props: true}
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;  