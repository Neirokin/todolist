<template>
  <div id="app">
    <div id="main-window" v-if="AUTHORISATED">
      <b-container fluid>
        <b-row>
          <todo-header></todo-header>
        </b-row>
      </b-container>
      
      <b-container>
          <b-row align-h="between" class="todolist-body">
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
import {mapGetters} from 'vuex'


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
  watch: {
    AUTHORISATED() {
        this.changeBgColor();
    }
  },
  mounted: function() {
    this.changeBgColor();
  },
  methods: {
    changeBgColor() {
      let body = document.querySelector('body');
      if(this.AUTHORISATED){
        body.classList.add('bg-gray');
      }
      else {
        body.classList.remove('bg-gray');
      }
    }
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
.bg-gray{
  background-color: #E5E5E5 !important;
}
.todolist-body{
  margin-top: 1.3125rem;
}
</style>
