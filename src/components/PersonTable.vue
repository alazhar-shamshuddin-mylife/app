<template>
  <div id="person-table">
    <p v-if="people.length < 1" class="empty-table">No people</p>
    <v-simple-table fixed-header v-else>
      <template v-slot:default>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="person in people" :key="person.id">
            <td v-if="editing === person.id">
              <input type="text" v-model="person.name" />
            </td>
            <td v-else>{{person.name}}</td>
            <td v-if="editing === person.id">
              <input type="text" v-model="person.email" />
            </td>
            <td v-else>{{person.email}}</td>
            <td v-if="editing === person.id">
              <button @click="editPerson(person)">Save</button>
              <button class="muted-button" @click="cancelEdit(person)">Cancel</button>
            </td>
            <td v-else>
              <button @click="editMode(person)">Edit</button>
              <button @click="$emit('delete:person', person.id)">Delete</button>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>

<script>
export default {
  name: 'PersonTable',

  data() {
    return {
      editing: null,
      cachedPerson: null,
    };
  },

  methods: {
    editMode(person) {
      console.log('editMode');
      this.editing = person.id;
      this.cachedPerson = {
        id: person.id,
        name: person.name,
        email: person.email,
      };
      console.log(person.id, person.name);
      console.log(this.cachedPerson.id, this.cachedPerson.name);
    },

    editPerson(person) {
      if (person.name === '' || person.email === '') return;
      this.$emit('edit:person', person.id, person);
      this.editing = null;
    },

    cancelEdit(person) {
      console.log('cancelEdit');
      console.log(person.id, person.name);
      Object.assign(person, this.cachedPerson);
      this.editing = null;
      console.log(this.cachedPerson.id, this.cachedPerson.name);
    },
  },

  props: {
    people: Array,
  },
};
</script>
