<script setup>
</script>

<template>
  <div id="app">
    <!-- Navegação -->
    <nav class="p-4 bg-green-600 text-white flex gap-4">
      <router-link to="/">Home</router-link>
      <router-link to="/sistema">Sistema</router-link>
    </nav>

    <!-- Conteúdo das páginas -->
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Arial, Helvetica, sans-serif;
}

/* Estilo dos links */
a {
  text-decoration: none;
  color: white;
  font-weight: bold;
}

a.router-link-active {
  text-decoration: underline;
}
</style>