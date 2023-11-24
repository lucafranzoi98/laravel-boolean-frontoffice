<script>
export default {
    name: 'AppHeader'
}
</script>

<template>
    <header>
        <nav class="navbar navbar-expand-sm navbar-dark bg-dark py-3">
            <div class="container">

                <router-link class="navbar-brand d-flex align-items-center" to="/">Boolean
                    <img class="img_brand" src="../assets/image/brand.png" alt="">
                </router-link>

                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarID"
                    aria-controls="navbarID" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="container d-flex">
                    <div class="collapse navbar-collapse justify-content-end align-items-center" id="navbarID">
                        <div class="navbar-nav gap-5">
                            <router-link class="nav-link" to="/">Home</router-link>
                            <router-link class="nav-link" to="/about">About</router-link>
                            <router-link class="nav-link" to="/contacts">Contacts</router-link>
                            <router-link class="nav-link" to="/filter">Filter</router-link>

                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </header>
</template>

<style lang="scss" scoped>
.img_brand {
    width: 15%;
    height: 15%;
}
</style>