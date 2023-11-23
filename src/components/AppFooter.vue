<script>
export default {
    name: 'AppFooter'
}
</script>

<template>
    <footer class="bg-dark text-white py-4">
        <div class="container">
            <div class="site-map">
                <div class="fw-semibold text-uppercase fs-5 mb-2">Site map</div>

                <router-link class="nav-link" to="/">Home</router-link>
                <router-link class="nav-link" to="/about">About</router-link>
                <router-link class="nav-link" to="/contacts">Contacts</router-link>
            </div>
        </div>
    </footer>
</template>

<style lang="sass" scoped>

</style>