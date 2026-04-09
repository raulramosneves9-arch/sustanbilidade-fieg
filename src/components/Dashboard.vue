<script setup>
defineProps(['dados'])
</script>

<template>
    <div class="p-4">
        <h2 class="text-xl font-bold">Dashboard</h2>

        <p>⚡ Energia: {{ dados.energia }}</p>
        <p>💧 Água: {{ dados.agua }}</p>
        <p>♻️ Resíduos: {{ dados.residuos }}</p>
    </div>
</template>