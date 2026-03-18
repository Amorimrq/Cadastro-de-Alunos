import { createRouter, createWebHistory } from 'vue-router'


import CadastroAluno from '@/components/CadastroAlunos.vue'
import Relatorio from '@/pages/Relatorio.vue'

const routes = [
  { path: '/', name: 'Cadastro', component: CadastroAluno },
  { path: '/relatorio', name: 'Relatorio', component: Relatorio }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router