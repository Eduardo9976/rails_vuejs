<template>
  <div>
    <p>home certo</p>
    <user/>
  </div>
</template>
<script>
  import user from "../components/user.vue";

  export default {
    name: "Home",
    components: {
    user: user
  } 
  }
</script>
<style scoped>

</style>