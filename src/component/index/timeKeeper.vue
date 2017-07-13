<template>
    <div class="content-attribute">
        <span>{{currentTime}}</span>
    </div>
</template>
<style>
    .content-attribute {
        font-size: 50px;
        font-family: '13pxbus';
        color: #353535;
        overflow: hidden;
        padding: 0 30px;
        line-height: 60px;
        position: absolute;
        top: 50px;
        right: 0;
        z-index: 9999999;
        border-right: solid 8px #353535;
    }

    .content-attribute > span {
        display: block;
        margin-top: 25px;
    }
</style>
<script>

    import '../../../lib/js/date.js'

    var $currentTime = {currentTime: new Date().toString('HH:mm:ss')};

    export default {
        created: function () {
            setInterval(function () {
                $currentTime.currentTime = new Date().toString('HH:mm:ss');
            }, 1000);
        },
        data() {
            return $currentTime
        }
    }
</script>