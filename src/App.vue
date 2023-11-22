<script>
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';

export default {
    name: 'App',
    components: {
        AppHeader,
        AppFooter
    }
}
</script>

<template>
    <AppHeader></AppHeader>
    <main class="py-5">
        <div class="container">
            <h1>Title</h1>
        </div>
    </main>
    <AppFooter></AppFooter>
</template>
