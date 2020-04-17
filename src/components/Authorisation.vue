<template>
  <div class="authorisation" vertical-align="center">
    <b-row>
        <b-col
            cols="4"
            offset="1"
            class="text-center"
            align-self="center">

            <img alt="ToDoList" src="../assets/logo.svg" class="img-fluid">
        </b-col>
        
        <b-col 
            id="auth-form"
            cols="4"
            offset="1">
            <b-row>
                <b-col cols="12" class="mb-4"><h1>Вход</h1></b-col>
                <b-col cols="12">
                    <b-form 
                        :novalidate="true"
                        @submit.prevent="onSubmit">
                        <b-form-group
                            id="label-email"
                            label="Логин:"
                            label-for="input-email"
                            label-align="left">

                            <b-form-input
                                id="input-email"
                                type="text"
                                required
                                v-model="login"
                                :class="{invalid: isInvalidLoginComp}">
                            </b-form-input>
                        </b-form-group>

                        <b-form-group
                            id="label-password"
                            label="Пароль:"
                            label-for="input-password"
                            label-align="left">

                            <b-form-input
                                id="input-password"
                                type="password"
                                required
                                v-model="password"
                               :class="{invalid: isInvalidPasswordComp}">
                            </b-form-input>
                        </b-form-group>

                        <transition name="component-fade" mode="out-in">
                            <b-form-group
                                class="text-center errors-messages"
                                v-if="isInvalidLoginComp || isInvalidPasswordComp"
                                key="empty-fields">

                                Поля “Логин” и “Пароль” не могут быть пустыми.<br>Введите логин и/или пароль.
                            </b-form-group>

                            <b-form-group
                                class="text-center errors-messages"
                                v-else-if="!authorisationStatus"
                                key="access-denied">
                                
                                Неверно введен логин и/или пароль.
                            </b-form-group>
                        </transition>

                         <b-button
                            id="auth-btn"
                            type="submit"
                            block
                            squared
                            >Войти</b-button>
                    </b-form>
                </b-col>
            </b-row>
        </b-col>
    </b-row>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
    name: 'Authorisation',
    props: {
        baseUrl: String
    },
    data() {
      return {
          login: '',
          password: '',
          isEmptyLogin: true,
          isEmptyPassword: true,
          authorisationStatus: true
      }
    },
    computed: {
        ...mapGetters([
            'AUTHORISATED'
        ]),
        authUrl() {
            if(window.localStorage.userLogin != undefined) {
                return this.baseUrl + '?login=' + window.localStorage.getItem('userLogin') +
                                      '&password=' + window.localStorage.getItem('userPassword')
            }
            else{
                return this.baseUrl + '?login=' + this.login +
                                      '&password=' + this.password
            }
                
            
        },
        isInvalidLoginComp() {
            return !this.isEmptyLogin
        },
        isInvalidPasswordComp() {
            return !this.isEmptyPassword
        }
    },
    mounted: function() {
        if(window.localStorage.userLogin != undefined)
             this.GET_USER(this.authUrl)
    },
    methods: {
        ...mapActions([
            'GET_USER'
        ]),

        onSubmit() {
            if(this.isFormValid()){
                this.GET_USER(this.authUrl)
                this.authorisationStatus = this.AUTHORISATED
            }   
        },

        isFormValid() {
           
            if(!this.login.length){
                this.isEmptyLogin = false;
            }
            else{
                this.isEmptyLogin = true;
            }
            if(!this.password.length){
                this.isEmptyPassword = false;
            } 
            else{
                this.isEmptyPassword = true
            }
            if(this.login.length > 0 && this.password.length > 0){
                return true
            }
        }
    }
}
</script>

<style lang="scss">
body {
    background: #FFFF !important;
}
#auth-form {
    box-shadow: 4px 5px 12px rgba(0, 0, 0, 0.1);
    border-radius: 0.75rem;
    padding-left: 2.5rem;
    padding-right: 2.5rem;
    padding-bottom: 4.8125rem;
    padding-top : 2.1875rem;
}
#auth-btn {
    height: 40px;
    background: #F88081;
    border: none;
    margin-top: 55px;

    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
}
.errors-messages {
    color: #DB2322;
    font-family: Roboto;
    font-weight: 300;
    font-size: 12px;
    line-height: 14px;
}
h1 {
    color: #6A63FF;
    font-weight: normal;
    font-size: 40px;
    line-height: 45px;
}
label {
    font-size: 18px;
}
input{
    color: #292E4E !important;
    font-family: Roboto !important;
    font-weight: normal;
    font-size: 14px !important;
    line-height: 16px !important;
    height: 45px !important;
    &:hover {
        border-color: #292E4E;
    }
}
button,
input {
    &:focus {
        outline: none !important;
        border-color:#6A63FF !important;
        box-shadow: none !important;
    }
}
.invalid {
    border-color: red !important;
}
.component-fade-enter-active, .component-fade-leave-active {
  transition: opacity .3s ease;
}
.component-fade-enter, .component-fade-leave-to
/* .component-fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}

</style>