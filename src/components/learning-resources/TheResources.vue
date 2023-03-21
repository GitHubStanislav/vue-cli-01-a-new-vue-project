<template>
  <base-card>
    <buttons-style @click="setSelectedTab('stored-resources')">
      Stored Resources
    </buttons-style>
    <buttons-style @click="setSelectedTab('add-resource')">
      Add resources
    </buttons-style>
  </base-card>
  <keep-alive>
    <component :is="selectedTab"></component>
  </keep-alive>
</template>

<script>

import StoredResources from '@/components/learning-resources/StoredResources'
import AddResource from "@/components/learning-resources/AddResource.vue";

export default {
  components: {StoredResources, AddResource},
  data() {
    return {
      selectedTab: 'stored-resources',
      storedResources: [
        {
          id: 'official-guide',
          title: 'Official-Guide',
          description: 'The official Vue.js documentation.',
          link: 'https://vuejs.org/'
        },
        {
          id: 'google',
          title: 'Google',
          description: 'Learn to google...',
          link: 'https://google.org/'
        }
      ]
    }
  },
  provide() {
    return {
      resources: this.storedResources,
      addResource: this.addResource,
      deleteResource: this.removeResource
    }
  },
  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab
    },
    addResource(title, description, url) {
      const newResource = {
        id: new Date().toISOString(),
        title: title,
        description: description,
        link: url
      }
      this.storedResources.unshift(newResource)
      this.selectedTab = 'stored-resources'
    },
    removeResource(resId) {
     const resIndex = this.storedResources.findIndex(res => res.id === resId)
      this.storedResources.splice(resIndex,1)
    }
  }
}
</script>