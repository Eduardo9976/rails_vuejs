
<template>
  <div id="app">
    <v-app>
      <TheHeader />

      <router-view> </router-view>
    </v-app>
  </div>
</template>

<script>
import TheHeader from "./packs/components/TheHeader.vue"
export default {
  data: function() {
    return {
    
    };
  },
  components: {
    TheHeader
  }
  

};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}

body,
ul,
li,
h1,
h2,
p,
a,
span,
div,
nav,
header,
section {
  padding: 0px;
  margin: 0px;
}

ul {
  list-style: none;
}
a {
  text-decoration: none;
}
</style>>



