<template>
    <div class="project__card" :data-id="project.dataid">
        <img :src="project.src" :alt="project.alt" class="projects__card-image" :class="project.class" />
        <div class="projects__card-content">
            <div class="projects__card-textbox" :class="project.classbottom">
                <h3 class="projects__card-title">{{ project.title }}</h3>
                <ul class="projects__card-list">
                    <li class="projects__card-list-item projects__card-list-item_slash">
                        {{ project.subject }}
                    </li>
                    <li class="projects__card-list-item">{{ project.field }}</li>
                </ul>
            </div>


        </div>
        <slot class="star-image" />

    </div>
</template>

<script>
export default {
    name: 'WebsiteInternoVueSliProjectCard',
    props: {
        project: Object,
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

<style lang="scss" scoped></style>