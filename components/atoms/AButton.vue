<!-- atomic component Button -->
<template>
  <button :class="[disabledClass, 'p-2', 'rounded-lg']" :disabled="aDisabled" @click="$emit('a-click')">
    <slot />
  </button>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

@Component
export default class AButton extends Vue {
  @Prop({ default: false }) readonly aDisabled!: boolean

  get disabledClass () {
    return this.aDisabled ? 'bg-green-100' : 'bg-green-400'
  }
}
</script>
