<template>
    <div class="header">
        <mt-header title="测试的vue">
            <router-link :to="{name:''}" slot="right">
                <mt-button icon="search"></mt-button>
            </router-link>
        </mt-header>
    </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import '../../assets/index/style.css';

</style>

