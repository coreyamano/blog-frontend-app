import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Sample from "../views/Sample.vue";
import Signup from "../views/Signup.vue";
import Login from "../views/Login.vue";
import Logout from "../views/Logout.vue";
import Posts from "../views/PostsIndex.vue";
import NewPost from "../views/PostsNew.vue";
import ShowPost from "../views/PostsShow.vue";
import EditPost from "../views/PostsEdit.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/",
    name: "Sample",
    component: Sample,
  },
  {
    path: "/posts",
    name: "posts",
    component: Posts,
  },

  {
    path: "/signup",
    name: "signup",
    component: Signup,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/logout",
    name: "logout",
    component: Logout,
  },

  {
    path: "/posts/new",
    name: "New Post",
    component: NewPost,
  },
  {
    path: "/posts/1",
    name: "Show Post",
    component: ShowPost,
  },
  {
    path: "/posts/:id/edit",
    name: "Edit Post",
    component: EditPost,
  },

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
