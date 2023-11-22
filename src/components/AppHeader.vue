<script>
export default {
    name: 'AppHeader'
}
</script>

<template>
    <header>
        <nav class="navbar navbar-expand-sm navbar-dark bg-dark py-3">
            <div class="container">

                <!-- Change from a to router-link -->
                <a class="navbar-brand" href="#">Boolean Cocktails</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarID"
                    aria-controls="navbarID" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse align-self-end" id="navbarID">
                    <div class="navbar-nav">
                        <a class="nav-link" aria-current="page" href="#">Home</a>
                        <a class="nav-link" aria-current="page" href="#">About</a>
                        <a class="nav-link" aria-current="page" href="#">Contacts</a>

                    </div>
                </div>
            </div>
        </nav>
    </header>
</template>

<style lang="sass" scoped>

</style>