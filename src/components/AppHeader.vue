<script>
export default {
    name: 'AppHeader'
}
</script>

<template>
    <header>
        <nav class="navbar navbar-expand-sm navbar-dark bg-dark py-3">
            <div class="container">

                <router-link class="navbar-brand" to="/">Boolean Cocktails</router-link>

                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarID"
                    aria-controls="navbarID" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse align-self-end" id="navbarID">
                    <div class="navbar-nav">
                        <router-link class="nav-link" to="/">Home</router-link>
                        <router-link class="nav-link" to="/about">About</router-link>
                        <router-link class="nav-link" to="/contacts">Contacts</router-link>
                    </div>
                </div>
            </div>
        </nav>
    </header>
</template>

<style lang="sass" scoped>

</style>