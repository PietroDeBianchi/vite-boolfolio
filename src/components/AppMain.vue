<script>
import axios from 'axios';

export default {
    name: 'AppMain',

    data() {
        return {
            projects: [],
            baseUrl: 'http://127.0.0.1:8000'
        }
    },
    methods: {
        getProject() {
            axios.get(`${this.baseUrl}/api/projects`)
                .then(response => {
                    this.projects = response.data.results;
                    console.log(response.data.results);
                })
        }
    },
    mounted() {
        this.getProject();
    }
}
</script>

<template>
    <div class="container">
        <div class="d-flex flex-wrap justify-content-between">
            <div v-for="project in  projects " class="mt-4">
                <div class=" card" style="width: 18rem; min-height: 26rem;">
                    <img v-if="project.image" :src="`${this.baseUrl}/storage/${project.image}`" class="card-img-top"
                        :alt="project.title">
                    <img v-else src="https://i.ebayimg.com/images/g/BBYAAOSwT-Neb3XT/s-l400.jpg" class="card-img-top"
                        :alt="project.title">
                    <div class="card-body d-flex flex-column justify-content-between">
                        <div>
                            <h5 class="card-title">{{ project.title }}</h5>
                            <span>{{ project.technologies[type] }}</span>
                            <p class="card-text">{{ project.sub_title }}</p>
                        </div>
                        <a href="#" class="btn btn-primary">See full Project</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss"></style>