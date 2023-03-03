<template>
  <li>
    <h2>{{ friendName }} {{ isFavorite ? '(Favorite)' : '' }}</h2>
    <button
        @click="toggleDetails">{{ detailsAreVisible ? 'Hide' : 'Show' }} Details
    </button>
    <button
        @click="toggleFavorite"> Toggle Favorite
    </button>
    <ul v-if="detailsAreVisible">
      <li>
        <strong>Phone:</strong>
        {{ phoneNumber }}
      </li>
      <li>
        <strong>Email:</strong>
        {{ friendEmail }}
      </li>
    </ul>
  </li>
</template>

<script>
export default {
  props: {
    id:{
      type: String,
      required: true
    },
    friendName: {
      type: String,
      required: true
    },
    friendEmail: {
      type: String,
      required: true
    },
    phoneNumber: {
      type: String,
      required: true
    },
    isFavorite: {
      type: Boolean,
      required: false,
      default: false
    }

  },
  data() {
    return {
      detailsAreVisible: false,

    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFavorite() {
      this.$emit('toggle-favorite', this.id )
    },
  },
}
</script>