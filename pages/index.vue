<template>
  <PagePaddingWrapper>
    <div>
      <AButton class="bg-green-400">
        Add Task
      </AButton>
      <h1>
        {{ message }}
      </h1>
    </div>
  </PagePaddingWrapper>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import PagePaddingWrapper from '~/components/templates/PagePaddingWrapper.vue'
import AButton from '~/components/atoms/AButton.vue'

@Component({
  components: {
    PagePaddingWrapper,
    AButton
  }
})
export default class HomePage extends Vue {
  message: string = 'Hello World'
}
</script>
