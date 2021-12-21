<template>
  <div>
    <hello-world />
    <people-table />
  </div>
</template>

<script>
import PeopleTable from '@/components/PeopleTable.vue';
import HelloWorld from '../components/HelloWorld.vue';

export default {
  name: 'Home',

  components: {
    HelloWorld,
    PeopleTable,
  },
};
</script>
