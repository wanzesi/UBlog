<template>
<nav class="tabs border-top">
    <slot/>
</nav>
</template>

<script>
export default {
    name: 'tab-bar'
    
}
</script>

<style scoped>
.tabs{
    width: 100%;
    height: 49px;
    position: absolute;
    left: 0;
    bottom: 0;
    display: flex;
    background: #ffffff;
}
</style>
