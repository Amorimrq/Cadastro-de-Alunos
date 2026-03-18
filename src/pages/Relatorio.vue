<template>
  <div class="relatorio">
    <h2>Relatório de Alunos</h2>
    <p>Esta página mostra o relatório da lista de alunos.</p>
    <ul>
      <li v-for="(aluno, index) in alunos" :key="index">
        {{ aluno.nome }} - {{ aluno.idade }} anos
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const alunos = ref([])

onMounted(() => {
  const saved = localStorage.getItem('alunos')
  alunos.value = saved ? JSON.parse(saved) : []
})
</script>

<style scoped>
.relatorio {
  max-width: 450px;
  margin: auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}
</style>