<template>
  <div class="cadastro-aluno">
    <h2>Cadastro de Alunos</h2>

    <form class="form"  @submit.prevent="salvar">
      <input v-model="aluno.nome" placeholder="Nome" required />
      <input type="number" v-model.number="aluno.idade" placeholder="Idade" required min="5" />
      <button type="submit">{{ aluno.index === null ? 'Adicionar' : 'Salvar' }}</button>
      <button v-if="aluno.index !== null" type="button" @click="cancelar">Cancelar</button>
    </form>

    <input v-model="busca" placeholder="Buscar aluno..." />

    <ul>
      <li v-for="(a, i) in alunosFiltrados" :key="i">
        {{ a.nome }} - {{ a.idade }} anos
        <button @click="editar(i)">Editar</button>
        <button @click="remover(i)">Remover</button>
      </li>
    </ul>
    <p v-if="!alunosFiltrados.length">Nenhum aluno encontrado.</p>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted } from 'vue'

const alunos = ref([])


const aluno = ref({ nome: '', idade: null, index: null })


const busca = ref('')

onMounted(() => {
  const saved = localStorage.getItem('alunos')
  if (saved) alunos.value = JSON.parse(saved)
})

watch(alunos, val => localStorage.setItem('alunos', JSON.stringify(val)), { deep: true })

const alunosFiltrados = computed(() =>
  alunos.value.filter(a => a.nome.toLowerCase().includes(busca.value.toLowerCase()))
)

const salvar = () => {
  if (!aluno.value.nome || !aluno.value.idade) return

  const novo = { nome: aluno.value.nome, idade: aluno.value.idade }
  if (aluno.value.index === null) alunos.value.push(novo)
  else alunos.value.splice(aluno.value.index, 1, novo)

  aluno.value = { nome: '', idade: null, index: null }
}

const editar = i => {
  aluno.value = { ...alunos.value[i], index: i }
}

const cancelar = () => aluno.value = { nome: '', idade: null, index: null }

const remover = i => alunos.value.splice(i, 1)
</script>