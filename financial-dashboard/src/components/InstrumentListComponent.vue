<!-- src/components/SearchBarComponent.vue -->
<template>
  <div class="mb-4">
    <input
      v-model="searchQuery"
      type="text"
      placeholder="Search instruments..."
      class="w-full p-2 border rounded"
      @input="updateSearch"
    />
  </div>
</template>

<script>
import { useInstrumentStore } from '../stores/instrument';

export default {
  data() {
    return {
      searchQuery: ''
    };
  },
  methods: {
    updateSearch() {
      const store = useInstrumentStore();
      store.setSearchQuery(this.searchQuery);
    }
  }
};
</script>