<template>
     <transition name="fade">
            <slot> </slot>
    </transition>
</template>

<style scoped>

    .fade-enter-active,
    .fade-leave-active {
        transition: opacity 0.6s;
    }

    .fade-enter,
    .fade-leave-to {
        opacity: 0;
    }
</style>