<template>
    <div class="main-content">
        <TopMenu>
        </TopMenu>
        
        <Footer />
    </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import VueRouter, { RouteConfig } from 'vue-router';
import TopMenu from "./TopMenu.vue";
import Footer from "./Footer.vue";
import LinksView from "./pages/LinksView.vue";
import MainView from "./pages/MainView.vue";

@Component({components: {TopMenu, Footer, MainView, LinksView}})
export default class Main extends Vue {

    router: VueRouter = new VueRouter({
    	mode: 'history',
    	routes: [
    		{
    			name: 'Main',
    			path: '/',
    			component: MainView
    		},
    		{
    			name: 'Links',
    			path: '/links',
    			component: LinksView 
    		}
    	]
    })

}
</script>
<style>
.abilities {
    display: flex;
    align-content: center;
    margin: auto;
}
.section {
    width: 200px;
}
.main-content {
    display: grid;
    height: 100vh;
    grid-template-rows: auto 1fr auto;
}
</style>