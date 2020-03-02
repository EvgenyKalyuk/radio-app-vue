<script>
    import Header from './components/header/index.vue';

    export default {
        components: {
            Header
        },
        created() {
            console.log('created');
        }
    }
</script>

<template>
    <div>
        <Header />
        hello world
        <RouterView :key="$router.fullPath" />
    </div>
</template>


