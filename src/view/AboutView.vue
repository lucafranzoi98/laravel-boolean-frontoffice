<script >

export default {
    name: 'AboutView',
}

</script>

<template>
    <div class="container py-5">

        <h1 class="text-white mb-4">About us</h1>

        <div class="p-5 bg-light rounded-3">
            <div class="container-fluid py-5">
              <h1 class="display-5 fw-bold">Hi there 👋</h1>
              <p class="fs-4">🍸 Hi, we are Carlo, Elia, Danilo, Luca and Alessandro and this is our Cocktails site! 🍸</p>
            </div>
        </div>

    </div>
</template>

<style lang="scss" scoped>
.card-info {
    border: 5px solid black;
    border-radius: 20px;

    & .info {
        display: none;
        text-align: start;
    }

    &:hover {
        .info{
            display: block;
        }
    }
}

.main_content {
    height: 1100px;
    padding-top: 10vh;
}
</style>