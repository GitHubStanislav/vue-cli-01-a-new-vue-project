<template>
  <div>
    <header>
      <slot name="header" :text="greetingMessage.data1" ></slot>
    </header>
    <h1>
      <slot name="h1"></slot>
    </h1>
    <h2>
      <slot name="h2"></slot>
    </h2>

  </div>
</template>

<script>
export default {
  name: "TestSlot",
  props: ['userName', 'isActive'],
  data(){
    return{
      greetingMessage: {
        data1: 'Hello how are you',
        data2: 'my name is OrestFestival'
      }
    }
  }
}
</script>

<style scoped>
div {
  margin: 2rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

img {
  width: 50%;
}

a {
  color: black;
}
</style>