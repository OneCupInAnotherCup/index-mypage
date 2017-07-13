<template>
    <div class="alert-content" :class="{ show: alertShow }" v-show="alertOn">
        <div class="alert-close-sign">
            <div @click="close()">关闭</div>
        </div>
        <iframe class="alert-body" frameborder="0" :src="contentUrl" :style="{ height: alertAttribute.alertBodyHeight }"></iframe>
    </div>
</template>
<style>

    body.alert-on, body.read-view-on {
        overflow: hidden;
    }

    .alert-content {
        position: fixed;
        width: 100%;
        top: 50%;
        left: 0;
        height: 585px;
        margin-top: -292.5px;
        z-index: 99999999;
        overflow-y: auto;
        opacity: 0;
        transition: opacity .6s;
        -moz-transition: opacity .6s; /* Firefox 4 */
        -webkit-transition: opacity .6s; /* Safari 和 Chrome */
        -o-transition: opacity .6s; /* Opera */
    }

    .alert-content.show {
        opacity: 1;
    }

    .alert-content:before {
        content: '';
        display: block;
        position: fixed;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        background: #353535;
        z-index: -1;
    }

    .alert-content:after {
        content: '';
        display: block;
        position: fixed;
        width: 100%;
        top: 50%;
        left: 0;
        height: 0;
        margin-top: -292.5px;
        background: #fffd58;
        z-index: -1;
        transform: translateX(-100%);
        transition: transform .6s, height .6s ease .6s;
        -moz-transition: transform .6s, height .6s ease .6s; /* Firefox 4 */
        -webkit-transition: transform .6s, height .6s ease .6s; /* Safari 和 Chrome */
        -o-transition: transform .6s, height .6s ease .6s; /* Opera */
    }

    .alert-content.show:after {
        height: 585px;
        transform: translateX(0);
    }

    .alert-body {
        width: 1200px;
        display: block;
        opacity: 0;
        margin: 50px auto 0 auto;
        transition: opacity .6s ease 1.2s;
        -moz-transition: opacity .6s ease 1.2s; /* Firefox 4 */
        -webkit-transition: opacity .6s ease 1.2s; /* Safari 和 Chrome */
        -o-transition: opacity .6s ease 1.2s; /* Opera */
    }

    .alert-content.show .alert-body {
        opacity: 1;
    }

    .alert-close-sign {
        position: fixed;
        width: 1200px;
        height: 40px;
        right: 50%;
        text-align: right;
        margin-right: -600px;
        z-index: 99;
    }

    .alert-close-sign > div {
        position: relative;
        height: 40px;
        float: right;
        z-index: 99;
        line-height: 40px;
        padding: 0 40px;
        font-size: 15px;
        font-weight: bold;
        color: #353535;
        cursor: pointer;
        border-bottom: 3px solid #353535;
        transition: color .3s ease .3s;
        -moz-transition: color .3s ease .3s; /* Firefox 4 */
        -webkit-transition: color .3s ease .3s; /* Safari 和 Chrome */
        -o-transition: color .3s ease .3s; /* Opera */
    }

    .alert-close-sign > div:hover {
        color: #fffd58;
    }

    .alert-close-sign > div:before {
        content: '';
        display: block;
        width: 100%;
        height: 100%;
        background: #353535;
        position: absolute;
        top: 0;
        right: 0;
        z-index: -1;
        transform: translateY(-100%);
        transition: transform .3s;
        -moz-transition: transform .3s; /* Firefox 4 */
        -webkit-transition: transform .3s; /* Safari 和 Chrome */
        -o-transition: transform .3s; /* Opera */
    }

    .alert-close-sign > div:hover:before {
        transform: translateY(0);
    }

</style>
<script>
    import controller from '../../../lib/js/controller.js';
    controller['alert'] = controller['alert'] || {};
    window.alert = window.alert || {
            alertBodyHeight: 0
        }
    var alertConfig = {
        alertOn: false,
        alertShow: false,
        alertAttribute: window.alert,
        contentUrl: ''
    };
    export default{
        data(){
            return alertConfig;
        },
        created: function () {
            controller['alert']['open'] = this.open;
            controller['alert']['close'] = this.close;
        },
        methods: {
            open: function (contentUrl) {
                document.body.classList.add('alert-on');
                alertConfig.alertOn = true;
                alertConfig.contentUrl = contentUrl;
                setTimeout(function () {
                    alertConfig.alertShow = true;
                }, 200)
            },
            close: function () {
                document.body.classList.remove('alert-on');
                this.alertShow = false;
                setTimeout(function () {
                    alertConfig.alertOn = false;
                    alertConfig.contentUrl = '';
                }, 600)
            }
        }
    }
</script>