<template>
  <div id="people-table">
    <v-simple-table fixed-header>
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
            <td>{{ person.name }}</td>
            <td>{{ person.email }}</td>
            <td>
              <button>Edit</button>
              <button>Delete</button>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>

<script>
export default {
  name: 'PeopleTable',

  props: {
    people: Array,
  },
};
</script>

<style scoped></style>
