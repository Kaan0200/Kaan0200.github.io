<template>
    <div class="topmenu-wrapper">
        <div class="content">
            <ClickText>Welcome</ClickText>
             <Spacer/>
            <ClickText>Skills</ClickText>
            <Spacer/>
            <ClickText>Links</ClickText>
             <Spacer/>
            <ClickText>Contact</ClickText>
        </div>
    </div>
</template>
<style>
.topmenu-wrapper {
    padding-top: 1em;
    padding-bottom: 1em;
    padding-left: 2em;
    padding-right: 2em;

    border-bottom: 1px solid black;
    box-shadow: 0 0 1em black;

    background: linear-gradient(-45deg, #423E3B, #FF2E00, #F48F01, #5448C8, #423E3B);
	background-size: 400% 400%;
	animation: gradient 15s ease infinite;
}
.content {
    display: flex;
}

@keyframes gradient {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}
</style>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Spacer from "./utilities/spacer.vue";
import ClickText from "./utilities/clickText.vue";

@Component({components: {Spacer, ClickText}})
export default class TopMenu extends Vue {}

</script>