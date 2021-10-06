import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      alias: "/tutorials",
      name: "tutorials",
      component: () => import("./components/TutorialsList")
    },
    {
      path: "/add",
      name: "add",
      component: () => import("./components/AddTutorial")
    },
    {
      path: "/addWord",
      alias: "/addWord",
      name: "addWord",
      component: () => import("./components/AddDictionary.vue")
    },
    {
      path: "/addD2",
      alias: "/addD2",
      name: "addWord",
      component: () => import("./components/AddD2.vue")
    }, 
    {
      path: "/dictionary",
      alias: "/dictionary",
      name: "dictionary",
      component: () => import("./components/Dictionary.vue")
    }
     
  ]
});
