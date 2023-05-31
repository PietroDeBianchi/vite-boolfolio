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
                    this.projects = response.data;
                    console.log(response.data);
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
        <div class="row"></div>
    </div>
</template>

<style lang="scss"></style>