export default interface TGames {
  id?: string
  nome: string
  descricao: string
  data_lancamento: Date
  genero: string
  plataforma: string[]
  classificacao_etaria: number
  desenvolvedor: string
  editora: string
  avaliacao: number
  capa_imagem: string
  requerimento_sistema: { minimum: string, recommended: string }
  modos_jogo: string[]
  price: number
}
