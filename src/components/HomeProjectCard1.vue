<template>
    <div class="project__item">
        <img src="../assets/Photo1.svg" alt="photo" class="project__item_img">
        <div class="project__item_content">
            <div class="project__item_content-text">
                <p class="project__item_content-title">Modern Kitchan</p>
                <p class="project__item_content-subtitle">
                    <span>Decor</span>
                    /
                    <span>Artchitecture</span>
                </p>
            </div>
            <!-- <img src="../assets/Elem.svg" alt="photo" class="project__item_elem"> -->
            <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none">
                <circle cx="35" cy="35" r="35" fill="#F4F0EC" />
                <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round" />
            </svg>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HomeProjectCard',
}
</script>

<style lang="scss" script>
.project__item {
    display: grid;
    gap: 24px;

    &_content {
        display: flex;
        gap: 260px;

        &-title {
            color: #292F36;
            font-family: DM Serif Display;
            font-size: 25px;
            font-style: normal;
            font-weight: 400;
            line-height: 125%;
            /* 31.25px */
            letter-spacing: 0.5px;
        }

        &-subtitle {
            width: 217px;
            height: 27px;
            color: #4D5053;
            font-family: Jost;
            font-size: 22px;
            font-style: normal;
            font-weight: 400;
            line-height: 150%;
            /* 33px */
            letter-spacing: 0.22px;
        }
    }
}
</style>