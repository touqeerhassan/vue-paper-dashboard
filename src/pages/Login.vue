<template>
<div>
  <div class="row">
    <div class="col-md-4 col-xs-12 col-sm-12 col-lg-4 full-height">
      <div class="left-panel">
        <div id="left">
          <div class="heading">
          <span id="lefthead">data</span>
          <span id="lefthead1">cue</span>
        </div>
          <p id="message">
            <span>Automatically personalize your
              <br>website & email to each visitor.
            </span>
          </p>
        </div>
      </div>
    </div>
    <div class="col-md-8 col-xs-12 col-sm-12 col-lg-8 full-height">
      <div id="account-text">
        <span>Don't have an account? </span>
        <a href="#">
          <span id="noacc">
            <span>Sign up</span>
          </span>
        </a>
      </div>
      <div id="sec8-0">
        <div id="sec8">
          <img src="../assets/img/plants-left.svg" class="image-left">
          <span id="sign-text">Sign in to DataCue</span>
          <hr align="left">
        </div>

        <div id="sec8-2">
          <span>Email:</span>
          <br>
          <input type="email" class="input" name="email" v-model="username" title="Email">
          <br>
          <span>Password:</span>
          <br>
          <input type="password" class="input" name="password" v-model="password" title="Password">
        </div>
        <div id="sec8-3">
          <input type="button" class="button" v-on:click="login" value="Login">
          <img src="../assets/img/plants-right.svg" class="image-right">
        </div>
      </div>
    </div>
  </div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      username:"",
      password:""
    };
  },
  methods: {
    login: function () {
      console.log(this.username,this.password);
    }
  }
};
</script>
<style>
.full-height {
  height: 100%;
}
.left-panel {
  background-image: url("../assets/img/squares-background.svg");
  background-repeat: no-repeat;
  background-size: 100%;
  height: 100%;
  width: 100%;
}
#left {
  font-weight: 600;
  padding-top: 45%;
  text-align: center;
}
#lefthead {
  font-weight: 300;
}
#lefthead1 {
  color: #f8b43a;
  font-weight: 300;
}
#message {
  font-family: sans-serif;
  font-weight: 300;
  font-size: 15px;
  padding-bottom: 75%;
  padding-top: 15px;
}
.heading{
  font-size: 50px;
}
input[type="email"] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border: 2px solid red;
  border-radius: 4px;
  background-color: #f7f7f7;
  width: 45%;
  border: solid #f7f7f7;
  border-radius: 7px;
  border: 1px solid #e3dfdf;
}
input[type="password"] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border: 2px solid red;
  border-radius: 4px;
  background-color: #f7f7f7;
  border: solid #f7f7f7;
  width: 45%;
  border-radius: 7px;
  border: 1px solid #e3dfdf;
}

input[type="button"] {
  background-color: #f8b43a;
  width: 100px;
  height: 33px;
  border: 0;
  color: antiquewhite;
  border-radius: 7px;
}
#sec8-0 {
  margin-top: 9%;
  margin-left: 7%;
}
#sec8 {
  margin-left: 3%;
}
.image-left {
  width: 115px;
  height: 125px;
  margin-top: -60px;
}
.image-right {
  width: 155px;
  margin-left: 23%;
  height: 160px;
}
#account-text {
  text-align: right;
  display: block;
  margin-right: 17%;
  font-weight: 600;
  margin-top: 5%;
}
#sign {
  text-align: center;
  display: block;
}
#sign-text {
  font-size: 1.1vw;
  margin-left: 7%;
}
#form-sec {
  text-indent: 3vw;
}
hr {
  -moz-box-sizing: border-box;
  -moz-float-edge: margin-box;
  color: gray;
  display: block;
  width: 45%;
}
#noacc {
  color: #f8b43a;
}
#sec8-2 {
  margin-top: 7%;
  margin-left: 3%;
}
#sec8-3 {
  margin-left: 3%;
}

@media only screen and (max-width: 550px) {
  #message{
    padding-bottom: 0px
  }

  hr{
    width: 90%
  }

  .image-right{
    display: none;
  }

  .image-left{
    display: none;
  }

  .left-panel {
    background-image: url("../assets/img/background-with-squares.svg");
  }

  input{
    width: 90% !important;
    margin-bottom: 15px !important
  }

  #sign-text{
    font-size: 24px
  }
}
</style>
