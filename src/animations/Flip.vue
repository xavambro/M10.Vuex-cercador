<template>
    <transition-group enter-active-class="animate__animated animate__fadeInLeft" leave-active-class="animate__animated animate__fadeOutRight">
        <slot></slot>
    </transition-group>
</template>
<script>
export default {}
</script>
