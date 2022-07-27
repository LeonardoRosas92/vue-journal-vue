<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h1>Hola Mundo</h1>
    <button class="btn btn-primary" @click="goToDaybook">Primary</button>
    <button class="btn btn-secondary" @click="goToDaybook">Secundary</button>
    <button class="btn btn-success" @click="goToDaybook">Success</button>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  methods:{
    goToDaybook(){
      this.$router.push({name : 'no-entry'});
    }
  }
};
</script>
