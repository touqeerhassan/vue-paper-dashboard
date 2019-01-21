<template>
  <div class="full-height row">
    <div class="col-md-4 col-xs-12 col-sm-12 col-lg-4 full-height">
      <div class="container left-panel">
        <section id="left">
          <span id="lefthead">data</span>
          <span id="lefthead1">cue</span>
          <br>
          <br>
          <br>
          <p id="message">
            <span>Automatically personalize your
              <br>website & email to each visitor
            </span>
          </p>
        </section>
      </div>
    </div>
    <div class="col-md-8 col-xs-12 col-sm-12 col-lg-8 full-height">
      <section id="account-text">
        <span>Don't have an account?</span>
        <a href="#">
          <span id="noacc">
            <span>Sign up</span>
          </span>
        </a>
      </section>
      <section id="sec8-0">
        <section id="sec8">
          <img src="../assets/img/plants-left.svg" class="image-left">
          <span id="sign-text">Sign in to DataCue</span>
          <hr align="left">
        </section>

        <section id="sec8-2">
          <span>Email:</span>
          <br>
          <input type="email" name="email" title="Email">
          <br>
          <span>Password:</span>
          <br>
          <input type="password" name="password" title="Password">
        </section>
        <section id="sec8-3">
          <input type="button" class="button" value="Login">
          <img src="../assets/img/plants-right.svg" class="image-right">
        </section>
      </section>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {};
  },
  mounted() {}
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
  margin-top: 45%;
  margin-left: 12%;
  text-align: center;
}
#lefthead {
  font-weight: 300;
  font-size: 3vw;
  font-family: sans-serif;
}
#lefthead1 {
  font-family: sans-serif;
  color: #f8b43a;
  font-weight: 300;
  font-size: 3vw;
}
#message {
  font-family: sans-serif;
  font-weight: 300;
  font-size: 1vw;
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
  /* For mobile phones: */
  [id*="lefthead"] {
    font-weight: 300;
    font-size: 6vw;
    font-family: sans-serif;
  }
}
@media only screen and (max-width: 600px) {
  body {
    background-color: lightblue;
  }
}
@media only screen and (max-width: 550px) {
  .container {
    background-image: url("../assets/img/background-with-squares.svg");
  }
}

@media only screen and (max-width: 623px) {
  .image-left {
    display: none;
  }
}
@media only screen and (max-width: 623px) {
  .image-right {
    display: none;
  }
}
@media only screen and (max-width: 450px) {
  .col-md-12 {
    width: 100%;
    height: 100%;
  }
  @media only screen and (max-width: 3418px) and (max-width: 2153px) #lefthead {
    font-weight: 300;
    font-size: 2vw;
    font-family: sans-serif;
  }
}
</style>
