<template>
  <div id="app">
    <div class="container">
      <div class="col-md-4 main">
        <router-view></router-view>
        <app-menu></app-menu>
      </div>
    </div>
  </div>
</template>

<script>
import Menu from './components/Menu.vue'

export default {
  name: 'app',
  components: {
    appMenu: Menu,
  }
}
</script>

<style>
body {
  margin-top: 40px;
  background: #6d6565;
}

.main {
  float: none;
  margin: 0 auto;
}

.header {
  background: black;
  border-radius: 10px 10px 0 0;
  color: white;
}

.content {
  background: white;
}

.menu {
  background: #9ed6e6;
  border-radius: 0 0 10px 10px;
}

.menu a {
  color: black;
  cursor: pointer;
}

.menu a:hover{
  border-radius: 0 0 10px 10px;
}
</style>
