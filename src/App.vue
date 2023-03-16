<template>
  <ul>
<learning-resource
    v-for="res in storedResources" :key="res.id"
    :title="res.tittle"
    :link="res.link"
    :description="res.description"
>

</learning-resource>
  </ul>
</template>

<script>




import LearningResource from "@/components/learning-resources/LearningResource.vue";

export default {
  components: {LearningResource},
  data() {
    return {
      storedResources: [
        {
          id: 'official-guide',
          tittle:'Official-Guide',
          description:'The official Vue.js documentation.',
          link:'https://vuejs.org/'
        },
        {
          id: 'google',
          tittle:'Google',
          description:'Learn to google...',
          link:'https://google.org/'
        }
      ]
    };
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

</style>