<template>
  <div id="app">
    <div id="main-window" v-if="AUTHORISATED">
      <b-container fluid>
        <b-row>
          <todo-header></todo-header>
        </b-row>
      </b-container>
      
      <b-container>
          <b-row>
            <task-container></task-container>
            <subtask-container></subtask-container>
          </b-row>
        </b-container>
    </div>

   <b-container id="authorisation"  v-else>
     <authorisation :base-url="baseUrl"></authorisation>
   </b-container>

   
  </div>
</template>

<script>
import TaskContainer from './components/TaskContainer/TaskContainer'
import SubtaskContainer from './components/SubtaskContainer/SubtaskContainer'
import TodoHeader from './components/TodoHeader'
import Authorisation from './components/Authorisation'
import {mapActions, mapGetters} from 'vuex'


export default {
  name: 'App',
  data() {
    return {
      validated: true,
      userName: '',
      // ***
      baseUrl: 'http://localhost:3000/users'
    }
  },
  components: {
    Authorisation,
    TodoHeader,
    TaskContainer,
    SubtaskContainer
  },
  computed: {
    ...mapGetters([
      'AUTHORISATED'
    ])
  },
  methods: {
    ...mapActions([
      'GET_USERS_FROM_DB'
    ]),
  }
}
</script>

<style lang="scss">
#app {
  font-family: Comfortaa;
  font-style: normal;
}
#authorisation {
  margin-top: 121px;
}

</style>
