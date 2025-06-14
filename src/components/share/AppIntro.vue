<template>
    <div class="app-intro">
        <img src="../../assets/icons/aosc_logo.png" alt="安同社区的logo">
        <div>
            <div class="name">WPS 办公套件</div>
            <div class="intro">文档、幻灯片、表格三位一体</div>
        </div>
    </div>
</template>

<script setup></script>

<style scoped>
.app-intro {
    width: 350px;
    height: 72px;
    border-radius: 5px;
    display: flex;
}

.app-intro:hover {
    background-color: lightgray;
}

.app-intro img {
    width: 52px;
    height: 52px;
    margin: 10px;
}

.name {
    margin-top: 10px;
    font-size: 20px;
}

.intro {
    margin-top: 4px;
    font-size: 14px;
}
</style>