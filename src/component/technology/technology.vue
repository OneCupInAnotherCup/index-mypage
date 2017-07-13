<template>
    <div class="crosswise-content" :style="{ width : width }">
        <div class="crosswise-body"
             :style="{ transform : move }"
             v-if="page.firstPage.display">
            <div class="crosswise-inner-content">
                <titlelist></titlelist>
            </div>
        </div>
    </div>
</template>
<script>

    import titleList from './technologyTitleList.vue';
    var technologyCrosswiseBodyConfig = {
        width: '200%',
        queue: [],
        move: 'translate(0)',
        page: {
            firstPage: {
                index: 1,
                display: true,
                method: {
                    reset: function () {
                        technologyCrosswiseBodyConfig.move = 'translate(0)';
                        technologyCrosswiseBodyConfig.queue = [technologyCrosswiseBodyConfig.page.firstPage];
                        technologyCrosswiseBodyConfig.width = '200%';
                    }
                }
            }
        }
    }
    export default {
        components: {
            titlelist: titleList
        },
        data(){
            return technologyCrosswiseBodyConfig
        },
        methods: {
            back: function () {
                var page = this.queue.pop();
                var $this = this;
                this.move = 'translate(-' + (this.queue.length - 1) * 100 + '%)';
                setTimeout(function () {
                    $this.width = ($this.queue.length + 1) * 100 + '%';
                    page.display = false;
                }, 800)
            }
        }
    }
</script>