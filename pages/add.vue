<template>
  <TemplatesPagePaddingWrapper>
    <div>
      <div>
        <AtomsATextButton class="text-green-400 text-2xl" @a-click="toHome">
          &lt; Back
        </AtomsATextButton>
      </div>
      <div class="p-20">
        <OrganismsTodoInputForm />
      </div>
    </div>
  </TemplatesPagePaddingWrapper>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class AddPage extends Vue {
  toHome () {
    this.$router.back()
  }
}
</script>

<style>

</style>
