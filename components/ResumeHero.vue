<script setup lang="ts">
import me from '/me.json'
</script>

<template>
    <div class="resume-hero">
        <h1>{{ me.name }}
            <span v-if="me.title">{{ me.title }}</span>
        </h1>
        <div class="photo-container">
            <NuxtImg :src="me.photo" :alt="`A professional photo of ${me.name}. This is definitely a good hire!`"
                class="photo" />
        </div>
    </div>
</template>

<style lang="css" scoped>
.resume-hero {
    text-align: center;
    margin-block-end: 2rem;
    border-bottom: 1px solid #ccc;
    margin-inline: auto;
    padding: 2rem 0;
    background-color: #fff;
    z-index: 100;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;

    animation:
        adjust-hero linear forwards;
        animation-timeline: scroll(root);
        animation-range: 0 150px;
}

h1 {
    font-size: 2.5rem;
    margin: 0;
    margin-block-end: 0; /* Use flex gap for spacing */
    animation: shrink-h1 linear forwards;
    animation-timeline: scroll(root);
    animation-range: 0 150px;
}

h1 span {
    display: block;
    font-size: 1.5rem;
    color: #666;
    animation: shrink-h1-span linear forwards;
    animation-timeline: scroll(root);
    animation-range: 0 150px;
}

.photo-container {
    position: relative;
    display: inline-block;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    border: 4px solid #00b882;
    animation: shrink-photo-container linear forwards;
    animation-timeline: scroll(root);
    animation-range: 0 100px;
}

.photo {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
}

.photo-container::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: #00b882;
    opacity: 0.2;
    pointer-events: none;
}

@keyframes adjust-hero {
    to {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        margin-inline: 0;
        padding-inline: 2rem;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        border-bottom: 1px solid #e0e0e0;
        height: 100px;

        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
        text-align: left;
    }
}

@keyframes shrink-h1 {
    to {
        font-size: 1.5rem;
        margin-block-end: 0;
    }
}

@keyframes shrink-h1-span {
    to {
        font-size: 1rem;
    }
}

@keyframes shrink-photo-container {
    to {
        width: 75px;
        height: 75px;
        flex-shrink: 0;
    }
}
</style>