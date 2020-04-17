<template>

    <b-col
        cols="6"
        class="task-container">

        <b-row
            id="task-container-head"
            class="px-3 py-4">
            
            <b-col>
                <span>
                    Задачи
                    <img src="../../assets/icons/sort.svg" alt="Сортиротвать задачи">
                    <img src="../../assets/icons/filter.svg" alt="Фильтровать задачи">
                </span>
            </b-col>

            <b-col class="text-right">
                <span><img src="../../assets/icons/add.svg" class="py-2"></span>
            </b-col>
        </b-row>
        <b-row>
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
</style>