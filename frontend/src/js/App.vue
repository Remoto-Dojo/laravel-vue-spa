<template>
    <div class="container mx-auto">
        <div
            class="bg-gray-200 min-h-screen p-16 flex flex-col justify-center"
            id="app"
        >
            <div id="nav">
                <router-link to="/">Home</router-link> |
                <router-link to="/about">About</router-link>
            </div>
            <router-view />
        </div>
    </div>
</template>
