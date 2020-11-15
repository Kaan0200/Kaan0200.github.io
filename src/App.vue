<style>
	body {
		height: 100vh;
		width: 100vw;
		margin: 0;
		padding: 0;
		background-image: linear-gradient(#312F30, #393A41);
	}
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;



		color: lightgrey;
    }
</style>

<template>
    <div id="app">
		<Main></Main>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Main from './components/Main.vue';

	@Component({
		components: {
			Main
		}
	})

export default class App extends Vue {}
</script>