<script setup>
import { ref } from 'vue'
import Formulario from '../components/Formulario.vue'
import Dashboard from '../components/Dashboard.vue'
import Dicas from '../components/Dicas.vue'

const dados = ref(null)

function receber(d) {
    dados.value = d
}

localStorage.setItem('dados', JSON.stringify(dados))

const salvo = localStorage.getItem('dados')
if (salvo) dados.value = JSON.parse(salvo)

</script>

<template>
    <div>
        <Formulario @enviar="receber" />

        <div v-if="dados">
            <Dashboard :dados="dados" />
            <Dicas :dados="dados" />
        </div>
    </div>
</template>

<style scoped>
input {
    display: block;
    margin: 10px 0;
    padding: 8px;
    border: 1px solid #ccc;
}

button {
    background: green;
    color: white;
    padding: 10px;
}
</style>
