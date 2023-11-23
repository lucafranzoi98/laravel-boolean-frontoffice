<script>
export default {
    name: 'AppCard',
    props: {
        cocktail: Object
    },
    data() {
        return {

        }
    },
    methods: {

    }
}
</script>

<template>
    <router-link :to="{ name: 'Cocktail', params: { slug: cocktail.slug } }">

        <div class="card h-100 bg-dark">

            <img :src="cocktail.thumb" alt="">

            <div class="card-body h-100 d-flex flex-column justify-content-around">
                <h3 class="text-center text-truncate text-danger">{{ cocktail.name }}</h3>
                <div class="d-flex justify-content-center flex-wrap">
                    <small class="badge rounded-pill text-bg-danger m-1" v-for="ingredient in cocktail.ingredients">{{
                        ingredient }}</small>
                    <div class="text-white">

                        {{ cocktail.ingredients }}
                    </div>
                    <small class="badge rounded-pill text-bg-primary m-1" v-for="measure in cocktail.measures">{{
                        measure }}</small>
                </div>
                <p class="card-text text-white placeholder-glow">
                    {{ cocktail.instruction }}
                </p>
                <div class="col">

                </div>
                <div class="d-flex justify-content-between py-1">
                    <h4 class="text-light">{{ cocktail.alcholic }}</h4>
                </div>
            </div>
        </div>
    </router-link>
</template>


<style lang="scss" scoped></style>