<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png" />
        <HelloWorld msg="Welcome to Your Vue.js App" />
    </div>
</template>

<script>
// @components is an alias to /src/js/components
import HelloWorld from "@components/HelloWorld.vue";

export default {
    name: "Home",
    components: {
        HelloWorld
    }
};
</script>
