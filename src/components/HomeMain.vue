<template>
    <HomeBanner />
    <HomeProject />
    <HomeCounter />
    <HomeBlog />
</template>

<script>
import HomeBanner from './HomeBanner.vue';
import HomeProject from './HomeProject.vue';
import HomeCounter from './HomeCounter.vue';
import HomeBlog from './HomeBlog.vue';
export default {
    name: 'WebsiteInternoVueSliHomeMain',
    data() {
        return {};
    },
    mounted() {
    },
    methods: {},
    components: {
        HomeBanner,
        HomeProject,
        HomeCounter,
        HomeBlog
    }
};
</script>

<style lang="scss" scoped></style>