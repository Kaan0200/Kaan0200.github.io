<template>
    <div>
        <svg v-if="isLeft === false" height="100" width="200" class="lines right">
          <path d="M0 50 L100 50 L100 100 L200 50 L100 0"  />
        </svg>
        <svg v-if="isLeft === true" height="100" width="200" class="lines left" >
            <path d="M100 100 L0 50 L100 0 L100 50 L200 50" />
        </svg>
    </div>
</template>
<style>
.lines {
  fill: none;
  stroke: whitesmoke;
  stroke-width: 2;
  cursor: pointer;
}
.lines:hover {
    stroke-dasharray: 80;
}
.right:hover {
    animation: dasher-right 3s linear;
}
.left:hover {
    animation: dasher-left 3s linear;
}

@keyframes dasher-right {
    to {
        stroke-dashoffset: -1000;
    }
}
@keyframes dasher-left {
    to {
        stroke-dashoffset: 1000;
    }
}
</style>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({props: 
	{isLeft: {type: Boolean}}
}) export default class Arrow extends Vue {
}
</script>