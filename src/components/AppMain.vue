<template>
    <div class="container my-4">
        <div class="d-flex flex-wrap justify-content-between">
            <div v-for="project in  projects " class="mt-4">
                <div class=" card" style="width: 18rem; min-height: 26rem;">
                    <img v-if="project.image" :src="`${baseUrl}/storage/${project.image}`" class="card-img-top"
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
        <div class="pages mt-3">
            <nav aria-label="Page navigation example">
                <ul class="pagination">
                    <li class="page-item me-2">
                        <button @click="getProject(currentPage - 1)" class="btn btn-primary previous">&laquo;</button>
                    </li>
                    <li class="page-item me-2">
                        <button @click="getProject(currentPage + 1)" class="btn btn-primary next">&raquo;</button>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'AppMain',

    data() {
        return {
            projects: [],
            baseUrl: 'http://127.0.0.1:8000',
            currentPage: 1
        }
    },
    methods: {
        getProject(pageScroll) {
            axios.get(`${this.baseUrl}/api/projects`, {
                params: {
                    page: pageScroll // don't forget this.
                }
            })
                .then(response => {
                    this.projects = response.data.results.data;
                    this.currentPage = response.data.results.current_page;
                    console.log(response);
                })
        }
    },
    mounted() {
        this.getProject(1);
    }
}
</script>

<style lang="scss"></style>