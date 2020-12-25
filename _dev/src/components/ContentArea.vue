<template>
    <div class="static-sides">
        <div style="margin: auto;">
            <Arrow isLeft />
        </div>
        <div class="content-internal">
            <div class="abilities">
                <div class="section">
                     <div style="font-size: 100px;">
                        <i class='bx bxs-category-alt'></i>
                    </div>
                    <div>
                        I understand a wide variety of technologies, topics, and skills. Ranging from everything like art, music, and of course programming!
                    </div>
                </div>
                <div class="section">
                    <div style="font-size: 100px;">
                        <i class='bx bxs-brain'></i>
                    </div>
                    <div>
                        I enjoy numerous programming projects and puzzles and love to try to familiarize many new technologies.  Mostly because it's a good brain workout!
                    </div>
                </div>
                <div class="section">
                    <div style="font-size: 100px;">
                        <i class='bx bxs-network-chart'></i>
                    </div>
                    <div>
                        I relish in testing my skills and knowledge through freelance work, developing, discussing, and creating solutions! 
                    </div>
                </div>
            </div>
        </div>
        <div style="margin: auto;">
            <Arrow />
        </div>
    </div>
</template>
<style>
.static-sides {
    display: grid;
    grid-template: auto / auto 1fr auto;
}
.content-internal {
    display: grid;
    place-items: center
}
.abilities {
    display: flex;
    align-content: center;
    margin: auto;
}
.section {
    width: 200px;
}
</style>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Arrow from "./Controls+Utils/arrow.vue";

@Component({components: {Arrow}})
export default class ContentArea extends Vue {

}
</script>