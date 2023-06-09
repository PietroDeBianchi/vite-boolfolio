<template>
    <div class="container my-4">
        <div class="d-flex flex-wrap justify-content-between">
            <div v-for="project in  projects " class="mt-4">
                <div class="card" id="cardContainer" style="width: 18rem; height: 26rem;">
                    <img v-if="project.image" :src="`${baseUrl}/storage/${project.image}`" class="card-img-top"
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
                        <a href="#" class="btn btn-primary">See full Project</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="pages mt-3">
            <nav aria-label="Page navigation example">
                <ul class="pagination">
                    <li class="page-item me-2">
                        <button @click="getProject(currentPage - 1)" class="btn btn-primary previous"
                            :class="{ 'disabled': currentPage == 1 }">&laquo;</button>
                    </li>
                    <li class="page-item me-2">
                        <button @click="getProject(currentPage + 1)" class="btn btn-primary next"
                            :class="{ 'disabled': currentPage == lastPage }">&raquo;</button>
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
            projects: [], // Array to store the project data
            baseUrl: 'http://127.0.0.1:8000', // Base URL for API requests
            currentPage: 1, // Current page of projects
            lastPage: null // Last page of projects
        }
    },
    methods: {
        getProject(pageScroll) {
            // Method to fetch project data from the API based on the page
            axios.get(`${this.baseUrl}/api/projects`, {
                params: {
                    page: pageScroll // Specify the page to fetch !dont forget!
                }
            })
                .then(response => {
                    // Update the project data, current page, and last page based on the API response
                    this.projects = response.data.results.data;
                    this.currentPage = response.data.results.current_page;
                    this.lastPage = response.data.results.last_page;
                    console.log(response); // Log the API response for debugging purposes
                })
        }
    },
    mounted() {
        // Call the getProject method with the initial page (1) when the component is mounted
        this.getProject(1);
    }
}
</script>


<style lang="scss"></style>