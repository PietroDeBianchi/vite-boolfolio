<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">BoolFolio!</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <li class="nav-item" v-for="item in headerNavbar">
                        <router-link :to="{ name: item.route }" class="nav-link">{{ item.label }}</router-link>
                    </li>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'AppHeader',

    data() {
        return {
            headerNavbar: [
                {
                    label: 'Home',
                    route: 'Home'
                },
                {
                    label: 'Projects List',
                    route: 'Projects List'
                }
            ]
        }
    }
}
</script>

<style lang="scss"></style>
