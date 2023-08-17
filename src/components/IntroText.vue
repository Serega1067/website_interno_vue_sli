<template>
    <!-- <section class="intro"> -->
    <div class="intro__title">
        <!-- <h2 class="intro__heading">Articles & News</h2> -->
        <h2 class="intro__heading">{{ text.title }}</h2>
        <div class="intro__subhead-box">
            <a href="../index.html" class="intro__subhead-box-item">{{ text.subheadOne }}</a>
            <span>/</span>
            <a href="blog.html" class="intro__subhead-box-item">{{ text.subheadTwo }}</a>
        </div>
    </div>
    <!-- </section> -->
</template>

<script>
export default {
    name: 'WebsiteInternoVueSliIntroText',
    props: {
        text: Object
    },

    data() {
        return {

        };
    },

    mounted() {

    },

    methods: {

    },
};
</script>


<style lang="scss" scoped>
.intro__heading {
    color: #292f36;
    font-family: DM Serif Display;
    font-size: 50px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
}

.intro__subhead-box {
    display: inline-flex;
    flex-direction: row;

    &-item {
        color: #4d5053;
        font-family: Jost;
        font-size: 22px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%;
        letter-spacing: 0.22px;
        text-align: center;

        &:first-child::after {
            content: "/\00a0";
            padding-left: 5px;
        }
    }
}
</style>