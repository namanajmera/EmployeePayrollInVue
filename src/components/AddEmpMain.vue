<template>
  <div>
    <EmployeeHeader />
    <EmployeeForm />
  </div>
</template>
<script>
import EmployeeHeader from "./EmployeeHeader.vue";
import EmployeeForm from "./AddEmployeeForm.vue";
export default {
  name: "AddEmpMain",
  components: {
    EmployeeHeader,
    EmployeeForm,
  },
};
</script>
<style>
</style>