<template>
    <div id="readView" class="read-view" :class="{ show: readViewShow }">
        <div class="read-view-close" @click="close()">
            <span>关闭</span>
        </div>
        <div class="read-view-content">
            <iframe class="read-view-body" frameborder="0"></iframe>
        </div>
        <div class="read-view-menu">

        </div>
    </div>
</template>
<style>
    .read-view {
        position: fixed;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        background: #fffd58;
        z-index: 9999999999;
        overflow-y: auto;
        transform: translateX(-100%);
        transition: transform .5s;
        -moz-transition: transform .5s; /* Firefox 4 */
        -webkit-transition: transform .5s; /* Safari 和 Chrome */
        -o-transition: transform .5s; /* Opera */
    }

    .read-view.show {
        transform: translateX(0);
    }

    .read-view-close {
        position: fixed;
        right: 140px;
        top: -60px;
        padding: 80px 80px 30px 30px;
        background: #353535;
        border-radius: 100%;
        cursor: pointer;
    }

    .read-view-close > span {
        font-size: 15px;
        color: #fff;
        font-weight: bold;
    }

    .read-view-content {
        padding: 40px 0;
    }

    .read-view-body {
        width: 1000px;
        height: 100%;
        background: #fff;
        position: relative;
        left: 50%;
        margin-left: -500px;
        box-shadow: 0 0 15px -5px #000;
    }

    .read-view-menu {
        position: fixed;
        top: 0;
        right: 0;
        width: 200px;
        top: 0;
        bottom: 0;
        background: #353535;
        box-shadow: 0 0 15px #000;
    }
</style>
<script>
    import controller from '../../../lib/js/controller.js';
    var readViewConfig = {
        readViewShow: false,
        readViewUrl: ''
    };
    export  default{
        created: function () {
            controller['readView'] = controller['readView'] || {}
            controller['readView']['open'] = this.open;
            controller['readView']['close'] = this.close;
        },
        data(){
            return readViewConfig
        },
        methods: {
            open: function (contentUrl) {
                document.body.classList.add('read-view-on');
                readViewConfig.readViewShow = true;
            },
            close: function () {
                document.body.classList.remove('read-view-on');
                readViewConfig.readViewShow = false;
            }
        }
    }

</script>