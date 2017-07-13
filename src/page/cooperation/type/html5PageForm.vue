<template>
    <form>
        <div class="form-item">
            <label for="projectName">项目名</label>
            <input id="projectName" placeholder="项目名称">
        </div>
        <div class="form-item">
            <label for="projectTime">项目工时</label>
            <input id="projectTime" placeholder="项目工时，单位：天/人">
        </div>
        <div class="form-item">
            <label for="projectPrice">项目报价</label>
            <input id="projectPrice" placeholder="项目报价，单位：元">
        </div>
        <div class="form-item">
            <label for="email">联系邮箱</label>
            <input id="email" placeholder="联系邮箱">
        </div>
        <div class="form-item">
            <label for="projectInfo">项目简介</label>
            <textarea id="projectInfo" placeholder="项目内容简述"></textarea>
        </div>
        <div class="form-item form-msg">
            <span>收到信息后，将在最短时间内通过邮件联系，请随时关注邮箱</span>
        </div>
        <div class="form-item form-button-group">
            <button class="form-button">提交</button>
        </div>
    </form>
</template>
<style>
    @import "../../../../lib/css/common.css";
    @import "../../../../lib/css/form.css";
</style>
<script>
    var html5PageConfig = {};
    export default{
        created: function () {
            window.addEventListener('load', function () {
                parent.alert.alertBodyHeight = document.body.scrollHeight + 'px';
            })
        },
        data(){
            return html5PageConfig;
        }
    }
</script>