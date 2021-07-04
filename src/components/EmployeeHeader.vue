<template>
  <div>
    <header class="headerContainer header">
      <div class="logoContainer">
        <img src="../assets/images/logo.png" alt="" />
        <div>
          <span class="emp-text">EMPLOYEE</span><br />
          <span class="emp-text emp-payroll">PAYROLL</span>
        </div>
      </div>
    </header>
  </div>
</template>
<script>
export default {};
</script>
<style>
.header {
  padding: 15px 0;
  background-color: #ffffff;
}

.headerContainer {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: 0px solid green;
}

.logoContainer {
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 0px solid green;
  width: 80%;
}
.logoContainer img {
  height: 42px;
  width: 41px;
}

.logoContainer-img {
  border: solid 0px #42515f;
}

.emp-text {
  font: normal normal bold 20px/25px Montserrat;
  font-family: "Montserrat", sans-serif;
  letter-spacing: 0px;
  color: #82a70c;
  text-transform: capitalize;
}

.emp-payroll {
  color: #42515f;
}

* {
  box-sizing: border-box;
}
</style>