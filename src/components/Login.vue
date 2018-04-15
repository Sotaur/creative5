<template>
  <form>
    <label for="email" id="emailLabel">Email</label>
    <input name="email" id="email" :email="this.email" type="email"/>
    <label for="password" id="passLabel">Password</label>
    <input name="password" id="password" :password="this.password" type="password"/>
    <label for="confirmPassword" id="passConfLabel">Confirm Password</label>
    <input name="confirmPassword" id="confirmPassword" :confirmPassword="this.confirmPassword" type="password"/>

    <button type="submit" id="login" name="Login" v-on:submit.prevent="this.login()">Login</button>
    <button type="submit" id="register" name="Register" v-on:submit.prevent="this.register()">Register</button>
  </form>
</template>

<script>
  export default {
    name: "Login",
    data() {
      return {
        email: '',
        password: '',
        confirmPassword: ''
      }
    },
    methods: {
      login: function () {
        if (this.password && this.email) {
          this.$store.dispatch('login', {
            email: this.email,
            password: this.password
          });
          this.email = '';
          this.password = '';
          this.confirmPassword = '';
        }
      },
      register: function () {
        if (this.password === this.confirmPassword && this.password && this.email) {
          this.$store.dispatch('register', {
            email: this.email,
            password: this.password
          });
          this.email = '';
          this.password = '';
          this.confirmPassword = '';
        }
      }
    }
  }
</script>

<style scoped>
  form {
    display: grid;
    max-width: 50%;
    margin: auto;
  }

  button {
    margin-top: 5px;
    max-width: 150px;
  }

  #email {
    grid-column: 2 / span 2;
    grid-row: 1;
  }

  #emailLabel {
    grid-column: 1;
    grid-row: 1;
  }

  #password {
     grid-column: 2 / span 2;
     grid-row: 2;
   }

  #passLabel {
    grid-column: 1;
    grid-row: 2;
  }

  #confirmPassword {
     grid-column: 2 / span 2;
     grid-row: 3;
   }

  #passConfLabel {
    grid-column: 1;
    grid-row: 3;
  }

  #login {
    grid-column: 1;
    grid-row: 4;
  }

  #register {
    grid-column: 3;
    grid-row: 4;
  }
</style>
