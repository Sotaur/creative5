<template>
  <div>
    Tickets
    <ticket v-for="ticket in this.tickets" > </ticket>
  </div>
</template>

<script>
  import Ticket from './Ticket';
  export default {
    components: {
      Ticket
    },
    computed: {
      tickets: function () {
        return this.$store.getters.tickets;
      }
    }
  }
</script>

<style>

</style>
