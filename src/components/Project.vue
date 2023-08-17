<template>
    <main class="project">
        <!-- <section class="project__intro">
            <IntroText class="project__intro_text" :text="text" v-for="text in introTexts" />

        </section> -->
        <section class="intro">
            <!-- <div class="intro__title"> -->
            <IntroText class="intro__title" :text="text" v-for="text in introTexts" />
            <!-- </div> -->
        </section>
        <section class="project__content center">
            <div class="buttons__box">
                <Button class="button" @change="activeButton" @click="projectsFilter" v-for="button in buttons"
                    :key="button.id" :id="button.id">
                    {{ button.text }}</Button>
            </div>
        </section>
        <article class="project-cards-box">
            <ProjectCard class="project-card" :project="project" :data-id="project.dataid" v-for="project in projectCards"
                :key="project.id" :src="project.src" :class="project.class" @click="addToFavorites"></ProjectCard>
        </article>

    </main>
</template>

<script>
// import BlogIntro from '@/components/BlogIntro.vue';
import IntroText from '@/components/IntroText.vue';
import Button from '@/components/Button.vue';
import ProjectCard from '@/components/ProjectCard.vue';

export default {
    name: 'WebsiteInternoVueSliProject',
    props: {},
    components: {
        IntroText,
        Button,
        ProjectCard
    },
    data() {
        return {
            introTexts: [
                {
                    id: "introText",
                    title: "Our Project",
                    subheadOne: "Home",
                    subheadTwo: "Project",
                    routerlink: "/project-details",
                },
            ],
            buttons: [
                { id: "bathroom", text: "Bathroom" },
                { id: "bedroom", text: "Bedroom" },
                { id: "kitchen", text: "Kitchen" },
                { id: "livingroom", text: "Living Area" },
            ],
            projectCards: [
                {
                    id: "product-card1",
                    dataid: "bedroom",
                    src: require("../assets/project-card-1.png"),
                    alt: "interio",
                    title: "Minimal Bedroom",
                    subject: "Decor",
                    field: "Architecture",
                    class: "project-card-image-1",
                    starid: "star1",
                },
                {
                    id: "product-card2",
                    dataid: "bedroom",
                    src: require("../assets/project-card-2.png"),
                    alt: "interio",
                    title: "Classic Minimal Bedroom",
                    subject: "Decor",
                    field: "Architecture",
                    class: "project-card-image-2",
                    starid: "star2",
                },
                {
                    id: "product-card3",
                    dataid: "bedroom",
                    src: require("../assets/project-card-3.png"),
                    alt: "interio",
                    title: "Minimal Bedroom table",
                    subject: "Decor",
                    field: "Architecture",
                    class: "project-card-image-3",
                    starid: "star3",
                },
                {
                    id: "product-card4",
                    dataid: "bedroom",
                    src: require("../assets/project-card-4.png"),
                    alt: "interio",
                    title: "Modern Medroom",
                    subject: "Decor",
                    field: "Architecture",
                    class: "project-card-image-4",
                    starid: "star4",
                },
                {
                    id: "product-card5",
                    dataid: "bedroom",
                    src: require("../assets/project-card-5.png"),
                    alt: "interio",
                    title: "Minimal Bedroom",
                    subject: "Decor",
                    field: "Architecture",
                    class: "project-card-image-5",
                    starid: "star5",
                },
                {
                    id: "product-card6",
                    dataid: "bedroom",
                    src: require("../assets/project-card-6.png"),
                    alt: "interio",
                    title: "Modern Bedroom",
                    subject: "Decor",
                    field: "Architecture",
                    class: "project-card-image-6",
                    starid: "star6",
                },
                {
                    id: "product-card7",
                    dataid: "bedroom",
                    src: require("../assets/project-card-7.png"),
                    alt: "interio",
                    title: "System Table",
                    subject: "Decor",
                    field: "Architecture",
                    class: "project-card-image-7",
                    starid: "star7",
                },
                {
                    id: "product-card8",
                    dataid: "bedroom",
                    src: require("../assets/project-card-8.png"),
                    alt: "interio",
                    title: "Modern Bedroom",
                    subject: "Decor",
                    field: "Architecture",
                    class: "project-card-image-8",
                    starid: "star8",
                },
            ],

        };
    },
    mounted() {
    },
    methods: {

    },

};
</script>

<style lang="scss" scoped>
.intro {
    margin-top: 45px;
    background-image: url("../assets/project_intro-picture.png");
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;

    &__title {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 40px 78px;
        width: 503px;
        margin-top: 179px;
        border-radius: 37px 37px 0px 0px;
        background-color: #fff;
    }

    // &__heading {
    //     color: #292f36;
    //     font-family: DM Serif Display;
    //     font-size: 50px;
    //     font-style: normal;
    //     font-weight: 400;
    //     line-height: 125%;
    // }

    // &__subhead-box {
    //     display: inline-flex;
    //     flex-direction: row;

    //     &-item {
    //         color: #4d5053;
    //         font-family: Jost;
    //         font-size: 22px;
    //         font-style: normal;
    //         font-weight: 400;
    //         line-height: 150%;
    //         letter-spacing: 0.22px;
    //         text-align: center;

    //         &:first-child::after {
    //             content: "/\00a0";
    //             padding-left: 5px;
    //         }
    //     }
    // }

}

.project__content {
    padding-top: 200px;
    padding-bottom: 200px;
    display: flex;
    flex-direction: column;
    gap: 61px;
}

.buttons__box {
    display: flex;
    flex-direction: row;
    gap: 1px;
    margin-left: 160px;
    margin-right: 160px;
    justify-content: center;
    border: 1px solid #cda274;
    border-radius: 19px;
}

.button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 219px;
    height: 75px;
    align-items: center;
    padding: 26px 57px;
    text-align: center;
    font-family: Jost;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 125%;
    letter-spacing: 1.36px;
    color: #292f36;
    background-color: white;
    border-radius: 18px;
    border: none;
    transition: 0.3s;

    &-active {
        background-color: #cda274;
        color: white;
    }
}
</style>