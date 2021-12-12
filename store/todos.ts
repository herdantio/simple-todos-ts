import { Module, VuexModule } from 'vuex-module-decorators'

@Module({
  name: 'todos',
  stateFactory: true,
  namespaced: true
})
export default class TodosModule extends VuexModule {
    public message: string = 'Hello from module'
}
