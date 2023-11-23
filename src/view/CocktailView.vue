<script>
import axios from 'axios';

export default {
    name: 'CocktailsView',
    data() {
        return {
            apiURL: 'http://127.0.0.1:8000/api/cocktails/',
            cocktail: {}

        }
    },
    methods: {

        cocktailApiCall() {
            axios.get(this.apiURL + this.$route.params.slug)
                .then(response => {
                    this.cocktail = response.data.result
                    console.log(this.cocktail);
                })
        }

    },
    mounted() {
        this.cocktailApiCall()
    },
    components: {

    }
}
</script>

<template></template>


<style lang="scss" scoped></style>