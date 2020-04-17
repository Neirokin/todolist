<template>
        <b-col cols="6" class="subtask-container">
            <b-row>
                <b-col>
                    <input type="checkbox">
                </b-col>
                <b-col cols="2">
                    <b-row>
                        <b-col cols="12">Дата создания</b-col>
                        <b-col cols="12">Дата редактирования</b-col>
                    </b-row>
                </b-col>
            </b-row>
            <b-row>
                <b-col cols="2">Подзадачи</b-col>
                <b-col cols="2">Описание</b-col>
                <b-col cols="2">+</b-col>
            </b-row>
            <b-row>
                <subtask></subtask>
            </b-row>
        </b-col>
</template>

<script>
import Subtask from './Subtask'
export default {
    name: 'SubtaskContainer',
    data() {
        return {

        }
    },
    components: {
        Subtask
    }
}
</script>

<style>

</style>