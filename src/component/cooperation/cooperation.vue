<template>
    <div class="crosswise-content" :style="{ width : width }">
        <div class="crosswise-body"
             :style="{ transform : move }"
             v-if="page.firstPage.display">
            <div class="crosswise-inner-content">
                <cooperation-type></cooperation-type>
            </div>
        </div>
    </div>
</template>
<script>

    import cooperationType from './cooperationType.vue';
    var cooperationCrosswiseBodyConfig = {
        width: '200%',
        queue: [],
        move: 'translate(0)',
        page: {
            firstPage: {
                index: 1,
                display: true,
                method: {
                    reset: function () {
                        cooperationCrosswiseBodyConfig.move = 'translate(0)';
                        cooperationCrosswiseBodyConfig.queue = [cooperationCrosswiseBodyConfig.page.firstPage];
                        cooperationCrosswiseBodyConfig.width = '200%';
                    }
                }
            }
        }
    }
    export default {
        components: {
            cooperationType: cooperationType
        },
        data(){
            return cooperationCrosswiseBodyConfig
        },

    }
</script>