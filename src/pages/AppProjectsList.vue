<template>
    <div class="container my-4">
        <div class="d-flex flex-wrap justify-content-between">
            <div v-if="loading == false" v-for="project in  projects " class="mt-4 px-2 w-25">
                <AppProject :project="project"></AppProject>
            </div>
            <div v-else>
                <div class="spinner-border text-success" role="status">
                    <span class="visually-hidden">Loading...</span>
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
                    <li class="page-item" v-for="page in lastPage" :class="{ 'active': page == currentPage }">
                        <button class="page-link" @click="getProject(page)">{{ page }}</button>
                    </li>
                    <li class="page-item ms-2">
                        <a @click="getProject(currentPage + 1)" class="btn btn-primary next"
                            :class="{ 'disabled': currentPage == lastPage }">&raquo;</a>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import AppProject from '../components/AppProject.vue';
import { store } from '../store.js'

export default {
    name: 'AppProjectsList',

    data() {
        return {
            store, //*Base URL for API requests
            projects: [], // Array to store the project data
            currentPage: 1, // Current page of projects
            lastPage: null, // Last page of projects
            loading: true // Set loading
        }
    },
    components: {
        AppProject
    },
    methods: {
        getProject(pageScroll) {
            // Method to fetch project data from the API based on the page
            axios.get(`${this.store.baseUrl}/api/projects`, {
                params: {
                    page: pageScroll // Specify the page to fetch !dont forget!
                }
            })
                .then(response => {
                    // Update the project data, current page, and last page based on the API response
                    this.projects = response.data.results.data;
                    this.currentPage = response.data.results.current_page;
                    this.lastPage = response.data.results.last_page;
                    this.loading = false;
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