<template>
  <div class="ticket">
    <div class="problem">
      <p>Problem: {{ticket.problem}}</p>
      <p>Priority: {{ticket.priority | priorityName }}</p>
      <p>Reported by: {{ticket.name}}</p>
      <p>Reported on: {{ticket | dateFormat }}</p>
    </div>
    <div class="delete">
      <button v-on:click="deleteTicket(ticket)" class="delete">Delete</button>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
    export default {
        name: "Ticket",
      method: {
        deleteTicket: function(ticket) {
          axios.delete("/api/tickets/" + ticket.id).then(response => {
            this.getTickets();
            return true;
          }).catch(err => {});
        },
      }
    }
</script>

<style scoped>

</style>
