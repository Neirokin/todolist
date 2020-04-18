<template>

    <b-col
        cols="6"
        class="task-container">

        <b-row align-v="center"
            id="task-container-head"
            class="px-3 py-4">
            
                <b-col
                align-v="center"
                class="inner-head">
                    <span>
                        Задачи 
                        <img class="ml-1" src="../../assets/icons/sort.svg" alt="Сортиротвать задачи">
                        <img class="ml-2" src="../../assets/icons/filter.svg" alt="Фильтровать задачи">
                    </span>
                </b-col>

                <b-col>
                    <div class="add-container text-center align-text-bottom ml-auto"><img src="../../assets/icons/plus.svg"></div>
                </b-col>
        </b-row>
        <b-row
            class="task-container-body">
            <task></task>
        </b-row>
    </b-col>
    
</template>

<script>
import Task from './Task'
export default {
    name: 'TaskContainer',
    data() {
        return {

        }
    },
    components: {
        Task
    }
}
</script>

<style lang="scss">
    .add-container {
        width: 36px;
        height: 36px;
        background-color: white;
        border-radius: 50%;
        padding-top: 3px;
    }
    #task-container-head {
        background: #615AFE !important;
        box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.25)!important;
        border-radius: 20px 20px 0px 0px !important;
        font-family: Roboto;
        font-weight: 500;
        font-size: 24px;
        line-height: 28px;
        color: #FFFFFF;
    }
    .task-container-body {
        // overflow-y: scroll;
        min-height: 438px;
        background: #EFEEFF;
        box-shadow: inset 12px 0px 10px rgba(202, 201, 214, 0.5), inset -12px -16px 10px rgba(255, 255, 255, 0.5);
        border-radius: 0px 0px 20px 20px;
        padding: 1.625rem 2.5rem 1.5rem;
    }
    
</style>