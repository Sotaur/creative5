<template>
  <div>
    <form>
      <div v-if="notAllFields">All fields are required</div>
      <input v-model="name" placeholder="Title">
      <label for="priority"></label>
      <select v-model="priority" id="priority" class="browser-default">
        <option value="" selected disabled hidden>Choose a Priority</option>
        <option value="0">High</option>
        <option value="1">Medium</option>
        <option value="2">Low</option>
      </select>
      <label for="tag"></label>
      <select v-model="tag" id="tag" class="browser-default">
        <option value="" selected disabled hidden>Choose a Tag</option>
        <option v-for="tag in tags" value="tag">{{tag}}</option>
      </select>
      <textarea v-model="description" placeholder="Problem"></textarea>
    </form>
    <button type="button" v-on:click.prevent.self.exact.stop="addTicket()">Submit</button>
  </div>
</template>

<script>
  export default {
    name: "ticket-form",
    data() {
      return {
        name: '',
        description: '',
        priority: '',
        tag: '',
        readyToSubmit: false
      }
    },
    methods: {
      addTicket: function() {
        console.log('Attempting to add ticket...');
        if (!this.notAllFields) {

          this.readyToSubmit = true;

        }
      },
    },
    watch: {
      readyToSubmit: function () {
        if (this.readyToSubmit) {
          this.$store.dispatch('addTicket', {
            name: this.name,
            priority: this.priority,
            description: this.description,
            userID: this.userID,
            tags: this.tag
          });
          this.name = '';
          this.description = '';
          this.priority = '';
          this.tag = '';
          this.readyToSubmit = false;
        }
      }
    },
    computed: {
      userID: function () {
        return this.$store.getters.user.id;
      },
      tags: function () {
        return this.$store.getters.tags;
      },
      notAllFields: function () {
        return !(this.name && this.description && this.priority && this.userID && this.tag);
      }
    }
  }
</script>

<style scoped>

  form {
    width: 70%;
    max-width: 500px;
  }

</style>
