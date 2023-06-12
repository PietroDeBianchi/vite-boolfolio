<template>
    <div class="container col-xxl-8 px-4 py-5" v-if="project">
        <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div class="col-10 col-sm-8 col-lg-6">
                <img v-if="project.image" :src="`${store.baseUrl}/storage/${project.image}`" class="card-img-top"
                    :alt="project.title">
                <img v-else src="https://i.ebayimg.com/images/g/BBYAAOSwT-Neb3XT/s-l400.jpg" class="card-img-top"
                    :alt="project.title">
            </div>
            <div class="col-lg-6">
                <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">{{ project.title }}</h1>
                <span class="badge rounded-pill text-bg-primary me-1" v-for="technology in project.technologies"
                    :key="technology.id">
                    {{ technology.type }}
                </span>
                <h5 class="lead mt-2">{{ project.sub_title }}</h5>
                <p>{{ project.description }}</p>
                <div>
                    <router-link :to="{ name: 'Projects List' }" class="btn btn-primary">
                        Go Back to List
                    </router-link>
                </div>
            </div>
        </div>
    </div>
    <div v-else>
        <div class="spinner-border text-success" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import { store } from '../store.js'

export default {
    name: 'AppProjectPage',
    data() {
        return {
            store,
            project: null
        }
    },
    mounted() {
        const slug = this.$route.params.slug;

        axios.get(`${this.store.baseUrl}/api/projects/${slug}`)
            .then(response => {
                if (response.data.success == true) {
                    // Update the project data, current page, and last page based on the API response
                    this.project = response.data.project;
                } else {
                    this.$router.push({ name: 'Not found' })
                }
            })
    }
}
</script>