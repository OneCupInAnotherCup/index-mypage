<template>
    <div>
        <ul class="content-index">
            <li :class="{ action: index==0 }" @click="chosenIndex(0)">首页</li>
            <li :class="{ action: index==1 }" @click="chosenIndex(1)">技术</li>
            <li :class="{ action: index==2 }" @click="chosenIndex(2)">书评</li>
            <li :class="{ action: index==3 }" @click="chosenIndex(3)">合作</li>
        </ul>
        <ul class="content-body">
            <li class="page-content" :style="pageContentStyle">
                <img class="first-page-image" src="../../../lib/image/coding_dog.png">
            </li>
            <li class="page-content" :style="pageContentStyle">
                <technology></technology>
            </li>
            <li class="page-content" :style="pageContentStyle"></li>
            <li class="page-content" :style="pageContentStyle">
                <cooperation></cooperation>
            </li>
        </ul>
    </div>
</template>
<style>
    .first-page-image {
        margin-left: 15%;
        margin-top: 15%;
    }

    .content-body {
        width: 100%;
        height: 100%;
        min-width: 1000px;
        position: absolute;
        right: 0;
        left: 0;
        z-index: 9;
        overflow: hidden;
    }

    .content-body > .page-content {
        height: 100%;
        position: relative;
        transition: transform 1.5s ease .5s;
        -moz-transition: transform 1.5s ease .5s; /* Firefox 4 */
        -webkit-transition: transform 1.5s ease .5s; /* Safari 和 Chrome */
        -o-transition: transform 1.5s ease .5s; /* Opera */
    }

    .content-index {
        position: absolute;
        z-index: 9999;
        right: 0;
        bottom: 100px;
    }

    .content-index > li {
        position: relative;
        width: 200px;
        line-height: 40px;
        font-size: 15px;
        font-weight: bold;
        text-align: center;
        cursor: pointer;
        margin-bottom: 3px;
        color: #353535;
        border-right: 8px solid #353535;
        border-bottom-left-radius: 10px;
        -moz-border-radius-bottomleft: 10px;
        border-top-left-radius: 10px;
        -moz-border-radius-topleft: 10px;
        transition: color .5s ease .5s;
        -moz-transition: color .5s ease .5s; /* Firefox 4 */
        -webkit-transition: color .5s ease .5s; /* Safari 和 Chrome */
        -o-transition: color .5s ease .5s; /* Opera */
        overflow: hidden;
    }

    .content-index > li.action {
        background: #353535;
    }

    .content-index > li:after {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        width: 100%;
        height: 100%;
        transform: translate(100%);
        transition: transform .5s;
        -moz-transition: transform .5s; /* Firefox 4 */
        -webkit-transition: transform .5s; /* Safari 和 Chrome */
        -o-transition: transform .5s; /* Opera */
        background: #353535;
    }

    .content-index > li:hover, .content-index > li.action {
        color: #fff;
    }

    .content-index > li:hover:after, .content-index > li.action:after {
        transform: translate(0);
    }

    .crosswise-content {
        height: 100%;
    }

    .crosswise-body {
        display: inline-block;
        vertical-align: middle;
        width: 1200px;
        height: 100%;
        transition: transform .8s;
        -moz-transition: transform .8s; /* Firefox 4 */
        -webkit-transition: transform .8s; /* Safari 和 Chrome */
        -o-transition: transform .8s; /* Opera */
    }

    .crosswise-inner-content {
        position: relative;
        padding: 50px 340px 30px 125px;
    }

    .back-sign {
        position: relative;
        cursor: pointer;
        color: #353535;
        font-size: 45px;
        font-family: 'Dancing Script';
        padding: 10px 45px;
        transition: top 2s;
        -moz-transition: top 2s; /* Firefox 4 */
        -webkit-transition: top 2s; /* Safari 和 Chrome */
        -o-transition: top 2s; /* Opera */
    }

    .back-sign-border {
        position: absolute;
        left: 30px;
        overflow: hidden;
        text-align: center;
    }

    .back-sign-border:after {
        position: relative;
        background: #353535;
        content: '';
        display: block;
        width: 80px;
        height: 8px;
        margin: auto;
        bottom: 0;
        transform: translateX(-260%);
        transition: transform .6s;
        -moz-transition: transform .6s; /* Firefox 4 */
        -webkit-transition: transform .6s; /* Safari 和 Chrome */
        -o-transition: transform .6s; /* Opera */
    }

    .back-sign-border:hover > .back-sign {
        top: -10px;
    }

    .back-sign-border:hover:after {
        transform: translateX(0);
    }
</style>
<script>
    import technology from '../technology/technology.vue';
    import cooperation from '../cooperation/cooperation.vue';
    var containerConfig = {
        index: 0,
        hoverCycle: 'none',
        pageContentStyle: {
            transform: 'translate(0, -' + 0 + '%)'
        },
//        crosswiseBodyManager: crosswiseBodyManager
    };
    export default {
        components: {
            technology: technology,
            cooperation: cooperation
        },
        data(){
            return containerConfig;
        },
        methods: {
            chosenIndex: function (index) {
                containerConfig.index = index;
//                this.crosswiseBodyManager.cooperation.page.firstPage.method.reset();
                containerConfig.pageContentStyle.transform = 'translate(0, -' + index * 100 + '%)';
            }
        }
    }
</script>