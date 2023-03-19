<template>
  <base-card>

    <buttons-style mode="flat" @click="setSelectedTab('stored-resources')">
      Stored Resources
    </buttons-style>

    <buttons-style mode="flat" @click="setSelectedTab('add-resource')">
      Add resources
    </buttons-style>

  </base-card>
  <component :is="selectedTab"></component>
</template>

<script>

import StoredResources from '@/components/learning-resources/StoredResources'
import AddResource from "@/components/learning-resources/AddResource.vue";

export default {
  components: {StoredResources,AddResource},
  data() {
    return {
      selectedTab: 'stored-resources',
      storedResources: [
        {
          id: 'official-guide',
          tittle: 'Official-Guide',
          description: 'The official Vue.js documentation.',
          link: 'https://vuejs.org/'
        },
        {
          id: 'google',
          tittle: 'Google',
          description: 'Learn to google...',
          link: 'https://google.org/'
        }
      ]
    }
  },
  provide() {
    return {
      resources: this.storedResources
    }
  },
  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab
    }
  }
}
</script>