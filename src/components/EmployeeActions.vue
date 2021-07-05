<template>
  <div>
    <div class="header-contain">
      <div class="emp-text-details">
        Employee Details
        <!-- <div class="emp-count">{{ size }}</div> -->
      </div>
      <div class="search">
        <img
          src="../assets/design-icons/search_black_24dp.svg"
          alt=""
          id="search-icon"
        />
      </div>
      <router-link to="/addEmployee"
        ><button class="add-button">
          <img
            src="../assets/design-icons/add_black_24dp.svg"
            class="plus-button"
            alt=""
          />Add User
        </button></router-link
      >
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style>
.header-contain {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  margin: 0 auto;
  padding-bottom: 25px;
}

.emp-text-details {
  font: normal normal bold 28px/25px Roboto;
  letter-spacing: 0px;
  color: #42515f;
  opacity: 1;
}

.emp-count {
  background-color: #82a70c;
  color: #ffffff;
  border-radius: 42%;
  font-size: 16px;
  width: 23px;
  text-align: center;
  display: inline-block;
}

.search {
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 1px 3px #00000029;
  border-radius: 28px;
  opacity: 1;
  width: 77px;
  height: 55px;
  margin-left: 750px;
}

#search-icon {
  width: 27px;
  height: 27px;
}

.plus-button {
  margin-right: 5px;
}

.add-button {
  text-align: center;
  font: normal normal normal 22px/29px Roboto;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
  background: #82a70c 0% 0% no-repeat padding-box;
  border-radius: 5px;
  opacity: 1;
  width: 150px;
  height: 50px;
  border-radius: 5px;
  padding: 10px 10px;
  outline: none;
  cursor: pointer;
  text-decoration: none;
}
</style>