<script setup>
defineProps(['dados'])

function gerarDica() {
    if (dados.energia > 1000) {
        return "Reduza o consumo de energia utilizando equipamentos mais eficientes."
    }
    if (dados.agua > 5000) {
        return "Reutilize água nos processos industriais."
    }
    if (dados.residuos > 300) {
        return "Implemente coleta seletiva na empresa."
    }
    return "Parabéns! Sua empresa está sustentável 🎉"
}
</script>

<template>
    <div class="p-4">
        <h2 class="font-bold">💡 Dicas</h2>
        <p>{{ gerarDica() }}</p>
    </div>
</template>