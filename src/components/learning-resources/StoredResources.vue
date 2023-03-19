<template>
  <ul>
    <learning-resource
        v-for="res in resources" :key="res.id"
        :title="res.tittle"
        :link="res.link"
        :description="res.description">
    </learning-resource>
  </ul>
</template>

<script>
import LearningResource from "@/components/learning-resources/LearningResource.vue";
export default {
  components:{LearningResource},
  name: "StoredResources",
  inject:['resources']
}
</script>

<style scoped>
ul {
  list-style: none;
  padding: 0;
  margin: auto;
  max-width: 40rem;
}
</style>