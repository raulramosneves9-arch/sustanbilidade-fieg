<script setup>
import { ref } from 'vue'

const nome = ref('')
const funcionarios = ref(0)
const energia = ref(0)
const agua = ref(0)
const residuos = ref(0)

const emitirDados = defineEmits(['enviar'])

function enviar() {
    emitirDados({
        nome: nome.value,
        funcionarios: funcionarios.value,
        energia: energia.value,
        agua: agua.value,
        residuos: residuos.value
    })
}
</script>

<template>
    <div class="p-4">
        <input v-model="nome" placeholder="Empresa" class="input" />
        <input v-model="funcionarios" type="number" placeholder="Funcionários" />
        <input v-model="energia" type="number" placeholder="Energia (kWh)" />
        <input v-model="agua" type="number" placeholder="Água (L)" />
        <input v-model="residuos" type="number" placeholder="Resíduos (kg)" />

        <button @click="enviar" class="btn">Analisar</button>
    </div>
</template>