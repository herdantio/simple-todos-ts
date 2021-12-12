<template>
  <TemplatesPagePaddingWrapper>
    <div class="flex flex-row space-x-10">
      <div class="w-1/6">
        <AtomsAButton class="bg-green-400">
          Add todos
        </AtomsAButton>
      </div>
      <div class="w-full">
        <OrganismsTodosList />
      </div>
    </div>
  </TemplatesPagePaddingWrapper>
</template>

<script lang="ts">
import { Component, Vue, namespace } from 'nuxt-property-decorator'
const todos = namespace('todos')

@Component
export default class HomePage extends Vue {
  @todos.Mutation public initTodos!: () => void

  mounted () {
    this.initTodos()
  }
}
</script>
