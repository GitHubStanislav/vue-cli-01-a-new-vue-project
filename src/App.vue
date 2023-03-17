<template>
  <the-header title="Remember me"></the-header>
  <stored-resources :resources="storedResources">

  </stored-resources>
</template>

<script>


import StoredResources from "@/components/learning-resources/StoredResources.vue";
import TheHeader from "@/components/layouts/TheHeader.vue";

export default {
  components: {TheHeader, StoredResources,},
  data() {
    return {
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
    };
  },
};
</script>

<style>

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}

</style>