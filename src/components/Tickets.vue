<template>
  <div id="tickets">
    <ticket-form/>
    Tickets
    <div id="scroll">
      <ticket v-for="ticket in tickets" :key="ticket.name + ticket.created_at + ticket.problem" :ticket="ticket" />
    </div>
  </div>
</template>

<script>
  import TicketForm from './TicketForm';
  import Ticket from './Ticket';

  export default {
    components: {
      Ticket,
      TicketForm
    },
    computed: {
      tickets: function () {
        return this.$store.getters.tickets;
      }
    }
  }
</script>

<style scoped>
  #tickets {
    margin: auto;
    height: 100%;
    max-width: 50%;
  }

  #scroll {
    max-height: 500px;
    overflow: auto;
  }
</style>
