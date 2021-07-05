<template>
  <div id="bg">
    <EmployeeHeader />
    <EmployeeActions />
    <EmployeeData />
  </div>
</template>
<script>
import EmployeeHeader from "../components/EmployeeHeader.vue";
import EmployeeActions from "../components/EmployeeActions.vue";
import EmployeeData from "../components/EmployeeData.vue";
export default {
  name: "EmpMain",
  components: {
    EmployeeHeader,
    EmployeeActions,
    EmployeeData,
  },
};
</script>
<style>
#bg {
  background-color: rgb(240, 235, 235);
}
</style>