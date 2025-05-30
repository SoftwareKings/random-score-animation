<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50 px-4">
    <form @submit.prevent="onLogin" class="max-w-md w-full space-y-6 bg-white p-8 rounded-xl shadow">
      <h2 class="text-2xl font-semibold text-center">Log In</h2>
      <input v-model="username" required placeholder="Username" class="w-full p-3 border rounded" />
      <input v-model="password" type="password" required placeholder="Password" class="w-full p-3 border rounded" />
      <button type="submit" class="w-full p-3 bg-green-600 text-black rounded">Sign In</button>
      <p class="text-center text-sm">
        Don’t have an account?
        <router-link to="/signup" class="text-green-600">Sign up</router-link>
      </p>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { login } from '../services/authApi'

const username = ref('');
const password = ref('');
const router = useRouter();

async function onLogin() {
  try {
    // call your service, which uses apiClient under the hood
    const token = await login({ username: username.value, password: password.value })
    localStorage.setItem('token', token)
    router.push('/')
  } catch (err: any) {
    console.error(err)
    // display server‐sent error or the exception message
    alert(err.response?.data?.error || err.message)
  }
}
</script>
