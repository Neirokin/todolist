<template>
    <b-col cols="12" class="todo-header py-4">
        <b-container>
            <b-row align-h="between" align-v="center">
                <b-col cols="3" class="text-left">
                    <img alt="ToDoList" src="../assets/logo.svg" class="img-fluid">
                </b-col>
                <b-col cols="3" class="text-right">
                    <label for="logout-btn" id="nickname" class="mr-4 mb-0">{{ USERNAME }}</label>
                    <b-button id="logout-btn" squared @click="logOut">Выйти</b-button>
                </b-col>
            </b-row>
        </b-container>
    </b-col>
</template>

<script>
import {mapMutations, mapGetters} from 'vuex'
export default {
    name: 'TodoHeader',
    methods: {
        ...mapMutations([
            'CHANGE_AUTHORISATED_FLAG',
            'CLEAR_DATA'
        ]),
        logOut() {
            this.CHANGE_AUTHORISATED_FLAG()
            this.CLEAR_DATA()
            window.localStorage.removeItem('userLogin');
            window.localStorage.removeItem('userPassword');
        }
    },
    computed: {
        ...mapGetters([
            'USERNAME'
        ])
    }
}
</script>

<style lang="scss">
    #logout-btn {
        background: #FFFFFF;
        border: 1px solid #6A63FF;
        box-sizing: border-box;
        color: #6A63FF;
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 14px;
        padding: 15px 33px 15px 33px;
        &:hover {
            outline: 1px solid #6A63FF;
        }
        &:active {
            outline: 1px solid #6A63FF;
            background: #E1DFFF;
        }
    }
    .todo-header {
        box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.15);
        background-color: #FFFFFF;
    }
    #nickname {
        font-family: Roboto;
        font-weight: normal;
        font-size: 20px;
        line-height: 23px;
    }
</style>