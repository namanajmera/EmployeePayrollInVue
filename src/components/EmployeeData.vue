<template>
  <div class="table-main">
    <table class="table" id="display">
      <tr>
        <th></th>
        <th>Name</th>
        <th>Gender</th>
        <th>Department</th>
        <th>Salary</th>
        <th>Start Date</th>
        <th>Actions</th>
      </tr>
      <tr v-for="empData in EmployeeData" :key="empData.id">
        <!-- <img src="../assets/profile-images/Ellipse -3.png" alt="profilePicture" /> -->
        <td>
          <img :src="empData.profilePicture" alt="profilePicture" />
        </td>
        <td>{{ empData.name }}</td>
        <td>{{ empData.gender }}</td>
        <td>
          <div v-for="department in empData.departments" :key="department">
            <div class="dept-label">{{ department }}</div>
          </div>
        </td>
        <td>₹{{ empData.salary }}</td>
        <td id="date">{{ stringifyDate(empData.startDate) }}</td>
        <td>
          <img
            :id="empData.id"
            src="../assets/design-icons/delete_black_24dp.svg"
            alt="delete"
            class="actions"
          />
          <img
            :id="empData.id"
            src="../assets/design-icons/edit_black_24dp.svg"
            alt="edit"
            class="actions"
            @click="update(empData)"
          />
        </td>
      </tr>
    </table>
  </div>
</template>
<script>
import { HTTP } from "../Service/AxiosService.js";
export default {
  name: "EmployeeData",
  data() {
    return {
      EmployeeData: [],
    };
  },
  mounted() {
    this.getEmployeeData();
  },
  methods: {
    getEmployeeData() {
      HTTP.get("/employees_payroll")
        .then((result) => {
          this.EmployeeData = result.data;
          console.log("Successfully Get", this.EmployeeData);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    stringifyDate(date) {
      const options = { day: "numeric", month: "short", year: "numeric" };
      const newDate = !date
        ? "undefined"
        : new Date(Date.parse(date)).toLocaleDateString("en-GB", options);
      return newDate;
    },
    update(data) {
      console.log(data);
      this.$router.push({
        name: "AddEmpMain",
        params: {
          data: {
            result: data,
            type: "update",
          },
        },
      });
    },
  },
};
</script>
<style>
.table-main {
  width: 80%;
  margin: 0 auto;
  overflow: auto;
}

.table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 15px;
  min-width: 800px;
}

td,
th {
  text-align: left;
  padding: 5px 8px;
}

th {
  background: #42515f 0% 0% no-repeat padding-box;
  border-radius: 3px 3px 0px 0px;
  text-align: left;
  font: normal normal medium 18px/24px Roboto;
  letter-spacing: 0px;
  color: #ffffff;
  text-transform: uppercase;
  border: 0px solid #dddddd;
  padding: 20px;
  opacity: 1;
}

tr:not(:first-child) {
  font: normal normal normal 14px/21px Roboto;
  letter-spacing: 0px;
  color: #3d3d3d;
  opacity: 1;
}

td {
  text-align: left;
  font: normal normal normal 16px/21px Roboto;
  letter-spacing: 0px;
  color: #3d3d3d;
  opacity: 1;
}
.profile {
  width: 40px;
  height: 40px;
}
td:first-child {
  display: flex;
  align-items: center;
}

td img {
  margin-left: 20px;
}

.actions {
  margin-left: 20px;
  cursor: pointer;
}

#listofDepartment {
  display: inline-block;
  padding: 3px;
}

.dept-label {
  background: #e9fea5 0% 0% no-repeat padding-box;
  border-radius: 13px;
  width: fit-content;
  padding: 1px 7px;
  display: inline-block;
  text-align: left;
  font: normal normal normal 14px/19px Roboto;
  letter-spacing: 0px;
  color: #3d3d3d;
  text-transform: capitalize;
  font-weight: 300;
}
</style>