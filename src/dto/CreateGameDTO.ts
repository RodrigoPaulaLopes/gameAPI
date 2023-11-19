export class GameDTO {
  id: string
  nome: string
  descricao: string
  dataLancamento: string
  genero: string
  plataforma: string[]
  classificacaoEtaria: number
  desenvolvedor: string
  editora: string
  avaliacao: number
  capaImagem: string
  requerimentoSistema: { minimum: string, recommended: string }
  modosJogo: string[]
  price: number
}
