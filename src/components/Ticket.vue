<template>
  <div class="ticket">
    <div class="problem">
      <p>Problem: {{this.ticket.problem}}</p>
      <p>Priority: {{this.ticket.priority | priorityName }}</p>
      <p>Reported by: {{this.ticket.name}}</p>
      <p>Reported on: {{this.ticket | dateFormat }}</p>
    </div>
    <div class="delete">
      <button type="button" v-on:click.prevent="deleteTicket()" class="delete">Delete</button>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Ticket",
      props: ['ticket'],
      methods: {
          deleteTicket: function () {
             this.$store.dispatch('deleteTicket', this.ticket);
          }
      },
      filters: {
        dateFormat: function(ticket) {
          let month = [];
          month[0] = "January";
          month[1] = "February";
          month[2] = "March";
          month[3] = "April";
          month[4] = "May";
          month[5] = "June";
          month[6] = "July";
          month[7] = "August";
          month[8] = "September";
          month[9] = "October";
          month[10] = "November";
          month[11] = "December";
          let date = new Date(ticket.created_at);
          let monthName = month[date.getMonth()];
          return `${date.getDate()} ${monthName} ${date.getFullYear()}`
        },
        priorityName: function(priority) {
          let name = [];
          name[0] = "High";
          name[1] = "Medium";
          name[2] = "Low";
          return name[priority];
        },
      },
    }
</script>

<style scoped>

</style>
