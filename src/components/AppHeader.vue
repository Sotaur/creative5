<template>
  <header class="row light-green accent-4">
    <div id="banner">
      <img class="col s3 m3 l1 responsive-img" src="/static/images/LOGO-white.png"/>
      <h2 class="col s3 m3 l1 white-text">Tickets</h2>
    </div>
  </header>
</template>

<script>
  export default {
    name: "AppHeader"
  };
</script>

<style>
  /*Strip the ul of padding and list styling*/

  header {
    width: 100%;
  }

  nav {
    display: grid;
    margin-top: 0;
  }

  #banner {
    max-height: 300px;
    width: 100%;
  }

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  /*Create a horizontal list with spacing*/
  li {
    display: inline-block;
    float: left;
    margin-right: 1px;
  }

  /*Style for menu links*/
  li a {
    display: block;
    margin-right: 20px;
    height: 50px;
    text-align: center;
    line-height: 50px;
    color: #666;
  }

  /*Active color*/
  li a.active {
  }

  /*Hover state for top level links*/
  li:hover a {
  }
</style>
