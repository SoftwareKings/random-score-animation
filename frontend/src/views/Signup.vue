<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50 px-4">
    <form @submit.prevent="onSignup" class="max-w-md w-full space-y-6 bg-white p-8 rounded-xl shadow">
      <h2 class="text-2xl font-semibold text-center">Sign Up</h2>
      <input v-model="username" required placeholder="Username" class="w-full p-3 border rounded" />
      <input v-model="password" type="password" required placeholder="Password" class="w-full p-3 border rounded" />
      <button type="submit" class="w-full p-3 bg-blue-600 text-black rounded">Create Account</button>
      <p class="text-center text-sm">
        Already have an account?
        <router-link to="/login" class="text-blue-600">Log in</router-link>
      </p>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { signup } from '../services/authApi'

const username = ref('');
const password = ref('');
const router = useRouter();

async function onSignup() {
  try {
    await signup({ username: username.value, password: password.value })
    // after successful signup, redirect to login
    router.push('/login')
  } catch (err: any) {
    console.error(err)
    alert(err.response?.data?.error || err.message)
  }
}
</script>
