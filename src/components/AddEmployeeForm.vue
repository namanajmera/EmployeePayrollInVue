<template>
  <div class="form-content">
    <form class="form" action="#" onreset="reset(event)" onsubmit="save(event)">
      <div class="form-head">Employee Payroll Form</div>
      <div class="row-content">
        <label class="label text" for="name">Name</label>
        <input
          class="input"
          type="text"
          id="name"
          name="name"
          placeholder="Your name.."
          required
        />
        <error-output class="text-error" for="text"></error-output>
      </div>

      <div class="row-content">
        <label class="label text" for="profile">Profile Image</label>
        <div class="profile-radio-content">
          <label>
            <input
              type="radio"
              id="profile1"
              name="profile"
              value="../assets/profile-images/Ellipse 1.png"
              required
            />
            <img
              class="profile"
              id="image1"
              src="../assets/profile-images/Ellipse 1.png"
            />
          </label>
          <label>
            <input
              type="radio"
              id="profile2"
              name="profile"
              value="../assets/profile-images/Ellipse -2.png"
              required
            />
            <img
              class="profile"
              id="image2"
              src="../assets/profile-images/Ellipse -2.png"
            />
          </label>
          <label>
            <input
              type="radio"
              id="profile3"
              name="profile"
              value="../assets/profile-images/Ellipse -1.png"
              required
            />
            <img
              class="profile"
              id="image3"
              src="../assets/profile-images/Ellipse -1.png"
            />
          </label>
          <label>
            <input
              type="radio"
              id="profile4"
              name="profile"
              value="../assets/profile-images/Ellipse -3.png"
              required
            />
            <img
              class="profile"
              id="image4"
              src="../assets/profile-images/Ellipse -3.png"
            />
          </label>
        </div>
      </div>

      <div class="row-content">
        <label class="label text" for="gender">Gender</label>
        <div>
          <input type="radio" id="male" name="gender" value="Male" />
          <label for="male" class="text">Male</label>
          <input type="radio" id="female" name="gender" value="Female" />
          <label for="female" class="text">Female</label>
        </div>
      </div>

      <div class="row-content">
        <label class="label text" for="department">Department</label>
        <div>
          <input
            type="checkbox"
            class="checkbox"
            id="hr"
            name="department"
            value="HR"
          />
          <label for="hr" class="text">HR</label>
          <input
            type="checkbox"
            class="checkbox"
            id="sales"
            name="department"
            value="Sales"
          />
          <label for="sales" class="text">Sales</label>
          <input
            type="checkbox"
            class="checkbox"
            id="finance"
            name="department"
            value="Finance"
          />
          <label for="finance" class="text">Finance</label>
          <input
            type="checkbox"
            class="checkbox"
            id="engineer"
            name="department"
            value="Engineer"
          />
          <label for="engineer" class="text">Engineer</label>
          <input
            type="checkbox"
            class="checkbox"
            id="others"
            name="department"
            value="Others"
          />
          <label for="others" class="text">Others</label>
        </div>
      </div>

      <div class="row-content">
        <label for="salary" class="label text">Choose your salary: </label>
        <input
          type="range"
          class="input"
          name="salary"
          id="salary"
          min="300000"
          max="500000"
          step="100"
          value="400000"
        />
        <output class="salary-output" for="salary">400000</output>
      </div>

      <div class="row-content">
        <label for="startDate" class="label text">Start Date</label>
        <div>
          <select name="Day" id="day">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
            <option value="15">15</option>
            <option value="16">16</option>
            <option value="17">17</option>
            <option value="18">18</option>
            <option value="19">19</option>
            <option value="20">20</option>
            <option value="21">21</option>
            <option value="22">22</option>
            <option value="23">23</option>
            <option value="24">24</option>
            <option value="25">25</option>
            <option value="26">26</option>
            <option value="27">27</option>
            <option value="28">28</option>
            <option value="29">29</option>
            <option value="30">30</option>
            <option value="31">31</option>
          </select>

          <select id="month" name="Month">
            <option value="Jan">January</option>
            <option value="Feb">February</option>
            <option value="Mar">March</option>
            <option value="Apr">April</option>
            <option value="May">May</option>
            <option value="June">June</option>
            <option value="July">July</option>
            <option value="Aug">August</option>
            <option value="Sep">September</option>
            <option value="Oct">October</option>
            <option value="Nov">November</option>
            <option value="Dec">December</option>
          </select>

          <select id="year" name="Year">
            <option value="2021">2021</option>
            <option value="2020">2020</option>
            <option value="2019">2019</option>
            <option value="2018">2018</option>
            <option value="2017">2017</option>
            <option value="2016">2016</option>
          </select>
        </div>
      </div>

      <div class="row-content">
        <label for="notes" class="label text">Notes</label>
        <textarea
          name="Notes"
          id="notes"
          cols="5"
          rows="5"
          style="margin: 0px; width: 559px; height: 96px"
        ></textarea>
      </div>

      <div class="button-parent">
        <a
          href="/pages/employee_payroll_home.html"
          class="resetButton button cancelButton"
          >Cancel</a
        >
        <div class="sumbit-reset">
          <button type="submit" class="button sumbitButton">Submit</button>
          <button type="reset" class="resetButton button">Reset</button>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
export default {};
</script>
<style>
.form-content {
  margin-top: 30px;
  min-height: calc(100% - 80px);
  background-color: #f7f7f7;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0px solid green;
}

.form {
  width: 65%;
  padding: 44px 60px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  border: 1px solid #f5f5f5;
  border-radius: 8px;
  opacity: 1;
}

.form-head {
  font: normal normal bold 24px/37px Roboto;
  letter-spacing: 0px;
  color: #42515f;
  text-transform: capitalize;
  opacity: 1;
  padding: 20px;
}

.row-content {
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
  align-items: center;
  border: 0px solid green;
}

.label {
  min-width: 140px;
}

label {
  padding: 12px 12px 12px 0;
  display: inline-block;
}

.text {
  font-size: 16px;
  color: #42515f;
  opacity: 1;
  font-family: Roboto;
}

.text-error {
  color: red;
  margin-left: 10px;
  font-size: 12px;
  font-style: italic;
}

.input {
  width: 80%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
}

.profile-radio-content {
  display: flex;
  flex-direction: row;
}

.profile-radio-content > label {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.profile {
  width: 40px;
  border-radius: 50%;
  margin-left: 12px;
}

.checkbox {
  width: 13px;
  height: 13px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #bdbdbd;
  border-radius: 1px;
  opacity: 1;
}

select {
  margin-right: 30px;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
  font: normal normal normal 16px Roboto;
  letter-spacing: 0px;
  color: #42515f;
  background-color: transparent;
}

.button-parent {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  margin-top: 20px;
}

.button {
  width: 100px;
  height: 40px;
  background: transparent;
  font-weight: 400;
  opacity: 1;
  min-width: 140px;
  font-size: 15px;
  padding: 7px 7px;
  font-family: Roboto;
  color: #42515f;
  border: 1px solid #969696;
  background: #e2e2e2 0% 0% no-repeat padding-box;
  cursor: pointer;
  border-radius: 5px;
}

.sumbitButton {
  margin-right: 30px;
}

.cancelButton {
  padding-top: 8px;
  text-decoration: none;
  text-align: center;
}

.cancelButton:hover,
.resetButton:hover {
  background-color: grey;
}

.sumbitButton:hover {
  background-color: #82a70c;
}

@media only screen and (max-width: 960px) and (min-width: 600px) {
  .cancelButton {
    margin-left: 0px;
  }
  .form {
    width: 85%;
    padding: 44px 20px;
  }
}

@media only screen and (max-width: 600px) {
  .form {
    margin-top: 10px;
  }
  .row-content {
    flex-direction: column;
    align-items: center;
  }
  .profile-radio-content {
    flex-flow: wrap;
  }
  .submit-reset {
    width: 100%;
    display: flex;
    flex-grow: 1;
    flex-flow: wrap;
    flex-direction: row-reverse;
    justify-content: space-between;
    margin-bottom: 20px;
  }
  .submitButton {
    margin: 0;
  }
  .buttonParent {
    flex-direction: column-reverse;
    align-items: flex-end;
  }
}
</style>