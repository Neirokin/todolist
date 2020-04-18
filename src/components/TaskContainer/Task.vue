<template>
        <b-col
            cols="12"
            class="task">
            <b-row
            class="task-body"
            align-v="center">
                <b-col
                    cols="8"
                    class="pl-0">
                    <b-form-checkbox
                        id="task-1-checkbox"
                        name="complete-task"
                        class="checkbox-task"
                        plain>

                        <span class="task-text">lorem</span>                    
                        <!-- <span class="task-text">asdfas</span> -->
                    </b-form-checkbox>
                                            
                </b-col>
                <b-col
                    class="text-right">
                    <div>
                        <img src="../../assets/icons/create-date.svg" alt="">
                        <span class="date-text">30.05.20 <span class="time-text">12:34</span></span>
                    </div>
                    <div>
                        <img src="../../assets/icons/edit-date.svg" alt="">
                        <span class="date-text">30.05.20 <span class="time-text">12:34</span></span>
                    </div>
                </b-col>
            </b-row>
        </b-col>        
</template>

<script>
export default {
    name: 'Subtask'
}
</script>

<style lang="scss">
.task{
    background: #FFFFFF;
    box-shadow: 3px 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 20px;
    height: 0%;
    padding-top: 1.0625rem;
    padding-bottom: 17px;
    padding-right: 2.375rem !important;
    position: relative;
    background-image: url('../../assets/icons/task-status-complete.svg');
    background-position-x: right;
    background-repeat:repeat-y;
}
.date-text {
    font-family: Roboto;
    font-weight: 300;
    font-size: 12px;
    line-height: 14px;
    color: #292E4E;
}
.time-text {
    font-weight: 500;
}
.task-text {
    font-family: Roboto;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    color: #615AFE;
}
.checkbox-task {
    min-height: 27px;
    padding-left: 3.9375rem !important;
}
.checkbox-task label {
    min-height: 27px;
    position: absolute !important;
}
.checkbox-task input[type="checkbox"] {
    margin: 0;
    padding: 0;
    opacity: 0 !important;
}
.checkbox-task input[type="checkbox"]:hover + label::before{
   background: #E0DFFF;
    
}
.checkbox-task input[type="checkbox"]:checked + label::before {
    background: #48A87F;
    border-color: #48A87F;
}
.checkbox-task input[type="checkbox"] + label::after {
    content: none;
}
.checkbox-task input[type="checkbox"]:checked + label::after {
    content: '';
}
.checkbox-task label {
    position: relative;
    &::before {
        content: '';
        display: inline-block;
        height: 1.625rem;
        width: 1.625rem;
        border: 1px solid #615AFE;
        border-radius: 200px;
        position: absolute;
        left: -37px;
        top: calc(50% - 26px/2);        
    }
    &::after {
        content: '';
        display: inline-block;
        width: 1.25rem;
        height: 1.25rem;
        background-image: url('../../assets/icons/checked.svg');
        position: absolute;
        top: calc(50% - 20px/2);
        left: -34px;
    }
}



</style>