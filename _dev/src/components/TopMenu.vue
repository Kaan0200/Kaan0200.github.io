<template>
    <div class="wrapper">
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
.wrapper {
    padding-top: 1em;
    padding-bottom: 1em;
    padding-left: 2em;
    padding-right: 2em;

    border-bottom: 1px solid black;
    box-shadow: 0 0 1em black;

    background-color: #CF8E26; 
}
.content {
    display: flex;
}
</style>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Spacer from "./utilities/spacer.vue";
import ClickText from "./utilities/clickText.vue";

@Component({components: {Spacer, ClickText}})
export default class TopMenu extends Vue {}

</script>