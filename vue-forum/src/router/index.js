import Home from "@/pages/Home";
import ThreadShow from "@/pages/ThreadShow";
import { createRouter, createWebHistory } from "vue-router";
import NotFound from "@/pages/NotFound";
import sourceData from "@/data.json";
import Forum from "@/pages/Forum";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/thread/:id",
    name: "ThreadShow",
    component: ThreadShow,
    props: true,
    beforeEnter(to, from, next) {
      const threadExists = sourceData.threads.find(
        (thread) => thread.id === to.params.id
      );
      if (threadExists) {
        return next();
      } else {
        next({
          name: "NotFound",
          params: { pathMatch: to.path.substring(1).split("/") },
          query: to.query,
          hash: to.hash,
        });
      }
    },
  },
  { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
  { path: "/forum/:id", name: "Forum", component: Forum, props: true },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
