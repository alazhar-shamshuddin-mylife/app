<template>
  <div id="people">
    <h1>People</h1>

    <people-form @add:person="addPerson" />
    <people-table
      v-bind:people="people"
      @edit:person="editPerson"
      @delete:person="deletePerson"/>
  </div>
</template>

<script>
import PeopleTable from '@/components/PeopleTable.vue';
import PeopleForm from '@/components/PeopleForm.vue';
import axios from 'axios';

export default {
  name: 'People',

  components: {
    PeopleTable,
    PeopleForm,
  },

  data() {
    return {
      people: [],
    };
  },

  mounted() {
    this.getPeople();
  },

  methods: {
    async getPeople() {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        this.people = response.data;
        console.log(this.people);
      }
      catch (error) {
        console.error(error);
      }
    },

    async addPerson(person) {
      try {
        const response = await axios.post(
          'https://jsonplaceholder.typicode.com/users', { person },
        );
        console.log(response.data);
        this.people = [...this.people, {
          id: response.data.id,
          name: response.data.person.name,
          email: response.data.person.email,
        }];
      }
      catch (error) {
        console.error(error);
      }
    },

    async deletePerson(id) {
      try {
        await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
        this.people = this.people.filter((person) => person.id !== id);
      }
      catch (error) {
        console.error(error);
      }
    },

    async deletePerson_fetch(id) {
      try {
        await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
          method: 'DELETE',
        });
        this.people = this.people.filter((person) => person.id !== id);
      }
      catch (error) {
        console.error(error);
      }
    },

    async editPerson(id, updatedPerson) {
      try {
        const response = await axios.put(
          `https://jsonplaceholder.typicode.com/users/${id}`, updatedPerson,
        );
        console.log(response.data);
        this.people = this.people.map((person) => (person.id === id ? response.data : person));
      }
      catch (error) {
        console.error(error);
      }
    },

    async editPerson_fetch(id, updatedPerson) {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
          method: 'PUT',
          body: JSON.stringify(updatedPerson),
          headers: { 'Content-type': 'application/json; charset=UTF-8' },
        });
        const data = await response.json();
        this.people = this.people.map((person) => (person.id === id ? data : person));
      }
      catch (error) {
        console.error(error);
      }
    },
  },
};
</script>
