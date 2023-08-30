<script setup lang="ts">

const props = withDefaults(defineProps<{
    boxSize?: string,
    size?: string,
    backgroundcolor?: string,
    icon?:string,
    color?: string,
    radius:string
  }>(),
  {boxSize: '77px', size:'36px', backgroundcolor: '#FFB988', color:'#fff', icon: 'mdi-stethoscope', radius:'50px'});
</script>
<template>
    <section>
        <div>
            <div class="icon-box" :style="{
                width: props.boxSize,
                height: props.boxSize,
                backgroundColor: props.backgroundcolor,
                color: props.color,
                borderRadius: props.radius
            }">
                <VIcon :size="props.size" :icon="props.icon"></VIcon>
            </div>
        </div>
    </section>
</template>
<style lang="scss" scoped >

// :root {
//   --size: {{ props.size }};
// }
.icon-box {
    // width: var(--size);
    display: grid;
    place-items: center;
    
    margin: auto;
}
</style>