<template>
    <div class="card" id="cardContainer" style="height: 26rem;">
        <img v-if="project.image" :src="`${store.baseUrl}/storage/${project.image}`" class="card-img-top"
            :alt="project.title">
        <img v-else src="https://i.ebayimg.com/images/g/BBYAAOSwT-Neb3XT/s-l400.jpg" class="card-img-top"
            :alt="project.title">
        <div class="card-body d-flex flex-column justify-content-between">
            <div class="cardInfo">
                <h5 class="card-title">{{ project.title }}</h5>
                <span class="badge rounded-pill text-bg-primary me-1" v-for="technology in project.technologies"
                    :key="technology.id">
                    {{ technology.type }}
                </span>
                <p class="card-text my-1">{{ project.sub_title }}</p>
            </div>
            <router-link :to="{ name: 'Project Page', params: { slug: project.slug } }" class="btn btn-primary">
                See Full Project
            </router-link>
        </div>
    </div>
</template>

<script>
import { store } from '../store.js'

export default {
    name: 'AppProject',
    props: ['project'],
    data() {
        return {
            store
        }
    }
}
</script>

<style lang="scss"></style>