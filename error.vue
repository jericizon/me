<template>
  <div class="min-h-screen flex flex-col items-center justify-center p-4 text-center">
    <div class="glass-card max-w-lg p-8 mx-auto">
      <div class="mb-6">
        <h1 class="text-4xl font-bold text-primary-400 mb-2">Oops!</h1>
        <h2 class="text-2xl font-medium text-white mb-4">{{ error.statusCode === 404 ? 'Page not found' : 'Something went wrong' }}</h2>
        <p class="text-slate-300 mb-6">
          {{ error.statusCode === 404 
            ? 'The page you are looking for might have been removed or is temporarily unavailable.' 
            : 'We apologize for the inconvenience. Please try again later.' 
          }}
        </p>
      </div>
      
      <!-- Decorative blobs -->
      <div class="absolute -z-10 w-64 h-64 blob blob-primary top-1/4 -left-32 animate-float-slow"></div>
      <div class="absolute -z-10 w-48 h-48 blob blob-cyan bottom-1/4 -right-24 animate-float"></div>
      
      <div class="flex flex-col sm:flex-row justify-center gap-4">
        <button 
          class="glass-button primary flex items-center justify-center gap-2"
          @click="handleError"
        >
          <Icon name="heroicons:arrow-path" class="w-5 h-5" />
          {{ error.statusCode === 404 ? 'Go Home' : 'Try Again' }}
        </button>
        
        <button 
          class="glass-button flex items-center justify-center gap-2"
          @click="navigateTo('/')"
        >
          <Icon name="heroicons:home" class="w-5 h-5" />
          Back to Home
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps<{ error: NuxtError | any }>()

const handleError = () => {
  if (props.error?.statusCode === 404) {
    navigateTo('/');
  } else {
    clearError({ redirect: '/' });
  }
};
</script>
