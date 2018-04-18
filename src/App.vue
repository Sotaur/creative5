<template>
  <div id="body">
    <app-header />
    <div id="if" v-if="!this.$store.getters.user.email">
      <about />
      <login />
    </div>
    <div id="else" v-else>
      <tickets />
    </div>
    <footer class="page-footer light-green accent-4">
      <div id="footer">
          <a class="white-text" href="https://github.com/Sotaur/creative5">Code found here</a>
      </div>
    </footer>
  </div>
</template>

<script>
  import Login from './components/Login';
  import Tickets from './components/Tickets';
  import AppHeader from "./components/AppHeader";
  import About from './components/About'
    export default {
        components: {
          AppHeader,
          Login,
          Tickets,
          About
        }
    }
</script>

<style scoped>
#body {
  height: 100%;

  display: flex;
  flex-direction: column;
  align-content: center;
}

#footer {
  text-align: center;
}
#if, #else {

  flex-grow: 1;
}

</style>
