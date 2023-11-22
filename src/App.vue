<script>
import HomeView from './view/HomeView.vue';
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';

export default {
    name: 'App',
    components: {
        HomeView,
        AppHeader,
        AppFooter
    }

}
</script>

<template>
    <AppHeader></AppHeader>
    <HomeView></HomeView>
    <AppFooter></AppFooter>
</template>
