<template>
  <div>
    <EmployeeHeader />
    <EmployeeForm :data="this.data" />
  </div>
</template>
<script>
import EmployeeHeader from "./EmployeeHeader.vue";
import EmployeeForm from "./AddEmployeeForm.vue";
export default {
  name: "AddEmpMain",
  props: ["data"],
  components: {
    EmployeeHeader,
    EmployeeForm,
  },
};
</script>
<style>
</style>