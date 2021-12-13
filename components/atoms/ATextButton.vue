<template>
  <button class="text-green-100" @click="$emit('a-click')">
    <slot />
  </button>
</template>
