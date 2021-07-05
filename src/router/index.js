import Vue from "vue";
import VueRouter from "vue-router";
import AddEmpMain from "../components/AddEmpMain.vue";
import MainEmp from "../components/MainEmp.vue";

Vue.config.productionTip = false;
Vue.use(VueRouter);

const routes = [
   {
      name: "AddEmpMain",
      path: "/addEmployee",
      component: AddEmpMain,
      props: true
   }, {
      name: "MainEmp",
      path: "/home",
      component: MainEmp,
      props: true,
      alias: ["/employeeDetail", "/"]
   }
];

const router = new VueRouter({
   mode: "history",
   routes
});

export default router;
