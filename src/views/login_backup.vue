<script setup lang='ts'>
   import { ref } from 'vue'
   const cli = ref(false)
    import { useTheme } from 'vuetify'
    const $vuetify = useTheme()
    const color = $vuetify.current.value.colors;

</script>

<template>
    <div class='text-1' :style="{padding: '10px', backgroundColor: color.danish}">
        Hello login<br />
        <v-btn @click="cli = !cli" color="danish" variant="flat">Login</v-btn>
    </div>
    
    <div v-for="(x, key) in 10">
      Component-{{ x }}
    </div>
    <HelloWorld :color=' color.danish' text="Danish koba" />
</template>

<style scoped lang="scss">

</style>