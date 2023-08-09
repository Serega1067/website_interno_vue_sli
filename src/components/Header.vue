<template>
    <header class="header center">
        <nav class="logo">
            <img src="../assets/Logo.svg" alt="logo" class="logo__img">
            <a href="./index.html" class="logo__text">Interno</a>
        </nav>
        <nav class="menu">
            <a href="./index.html" class="menu__home">Home</a>
            <a href="#" class="menu__project">Project</a>
            <a href="./pages/blog.html" class="menu__blog">Blog</a>
        </nav>
    </header>
</template>

<script>
export default {
    name: 'WebsiteInternoVueSliHeader',

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
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 53px;
}

.logo {
    display: flex;
    align-items: center;
    gap: 10px;

    &__text {
        color: #292F36;
        font-family: DM Serif Display;
        font-size: 40px;
        font-style: normal;
        font-weight: 400;
        line-height: 125%;
        /* 50px */
    }
}

.menu {
    display: flex;
    justify-content: space-between;
    width: 243px;
    color: #292F36;
    text-align: center;
    font-family: Jost;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
    /* 25px */
}
</style>