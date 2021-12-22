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

export default {
  name: 'People',

  components: {
    PeopleTable,
    PeopleForm,
  },

  data() {
    return {
      people: [
        {
          id: 1,
          name: 'Richard Hendricks',
          email: 'richard@piedpiper.com',
        },
        {
          id: 2,
          name: 'Bertram Gilfoyle',
          email: 'gilfoyle@piedpiper.com',
        },
        {
          id: 3,
          name: 'Dinesh Chugtai',
          email: 'dinesh@piedpiper.com',
        },
      ],
    };
  },

  methods: {
    addPerson(person) {
      const lastId = this.people.length > 0
        ? this.people[this.people.length - 1].id
        : 0;
      const id = lastId + 1;
      const newPerson = { ...person, id };

      this.people = [...this.people, newPerson];
    },

    deletePerson(id) {
      this.people = this.people.filter(
        (person) => person.id !== id,
      );
    },

    editPerson(id, updatedPerson) {
      this.people = this.people.map(
        (person) => (person.id === id ? updatedPerson : person),
      );
    },
  },
};
</script>
