<template>
  <div id="tag">
    <tag-form
      v-if="isEditMode === true"
      v-bind:deselectTag="deselectTag"
      v-bind:getFieldTitle="getFieldTitle"
      v-bind:isShowDetails="isShowDetails"
      v-bind:selectedTag="selectedTag"
      v-bind:toggleEditMode="toggleEditMode"
      v-bind:toggleShowDetails="toggleShowDetails"
    >
    </tag-form>
    <tag-view
      v-else
      v-bind:deselectTag="deselectTag"
      v-bind:getFieldTitle="getFieldTitle"
      v-bind:isShowDetails="isShowDetails"
      v-bind:selectedTag="selectedTag"
      v-bind:toggleEditMode="toggleEditMode"
      v-bind:toggleShowDetails="toggleShowDetails"
    >
    </tag-view>
  </div>
</template>

<script>
import TagForm from '@/components/TagForm.vue';
import TagView from '@/components/TagView.vue';

export default {
  name: 'Tag',

  components: {
    TagForm,
    TagView,
  },

  data() {
    return {
      isShowDetails: false,
    };
  },

  methods: {
    getFieldTitle(name) {
      return this.headers.find((header) => header.value === name).text;
    },

    toggleShowDetails() {
      this.isShowDetails = !this.isShowDetails;
    },
  },

  props: {
    deselectTag: Function,
    headers: Array,
    isEditMode: Boolean,
    selectedTag: Object,
    toggleEditMode: Function,
  },
};
</script>
