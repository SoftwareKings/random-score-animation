<!-- src/App.vue -->
<template>
  <div class="min-h-screen flex flex-col items-center p-4 bg-gray-50">
    <!-- routed page will render here -->
    <router-view />
  </div>
</template>

<script lang="ts">
export default {
  name: 'App'
}
</script>
