<template>
  <form>
    <label for="email" id="emailLabel">Email</label>
    <input name="email" id="email" v-model="email" type="email"/>
    <label for="password" id="passLabel">Password</label>
    <input name="password" id="password" v-model="password" type="password"/>
    <label for="confirmPassword" id="passConfLabel">Confirm Password</label>
    <input name="confirmPassword" id="confirmPassword" v-model="confirmPassword" type="password"/>

    <button type="button" class="btn light-green accent-4" id="login" v-on:click.prevent="login()">Login</button>
    <button type="button" class="btn light-green accent-4" id="register" v-on:click.prevent="register()">Register</button>
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
    height: 100%;
    text-align: right;
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
