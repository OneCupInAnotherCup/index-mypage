<template>
    <div>
        <time-keeper></time-keeper>
        <container></container>
        <alert></alert>
        <read-view></read-view>
    </div>
</template>
<style>
    @import '../../../lib/css/common.css';
    html {
        height: 100%;
        min-height: 585px;
        width: 100%;
        background: #fffd58;
    }

    body {
        width: 1200px;
        height: 585px;
        position: relative;
        top: 50%;
        margin-top: -292.5px;
    }

    body:before {
        content: '';
        display: block;
        width: 50px;
        height: 50px;
        position: absolute;
        left: 0;
        top: 0;
        z-index: 99999;
        border-radius: 5px;
        border-top: solid 8px #353535;
        border-left: solid 8px #353535;
    }

    body:after {
        content: '';
        display: block;
        width: 50px;
        height: 50px;
        position: absolute;
        right: 0;
        bottom: 0;
        z-index: 99999;
        border-radius: 5px;
        border-bottom: solid 8px #353535;
        border-right: solid 8px #353535;;
    }

    ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }
</style>
<script>
    import timeKeeper from '../../../src/component/index/timeKeeper.vue';
    import container from '../../../src/component/index/container.vue';
    import alert from '../../../src/component/index/alert.vue';
    import readView from '../../../src/component/index/readView.vue';
    export default{
        data(){
            return {}
        },
        components: {
            timeKeeper: timeKeeper,
            container: container,
            alert: alert,
            readView: readView
        }
    }
</script>