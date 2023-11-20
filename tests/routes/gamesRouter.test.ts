import { log } from "console"
import { AppDataSource } from "../../src/data-source"
import { Games } from "../../src/entity/Game"
import { testServer } from "../jest.setup"


describe("Teste Na Rota /api/games ", () => {
    const id = '4be67e5c-33bf-4006-bf29-ca37bde23647'
    const objetos = [
        {
          "id": "4be67e5c-33bf-4006-bf29-ca37bde23647",
          "nome": "The Shawshank Redemption",
          "descricao": "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
          "data_lancamento": "1994-09-23",
          "genero": "Drama",
          "plataforma": [
            "Hulu",
            "HBO Max"
          ],
          "classificacao_etaria": 14,
          "desenvolvedor": "Frank Darabont",
          "editora": "Columbia Pictures",
          "avaliacao": "4.90",
          "capa_imagem": "https://example.com/shawshank_redemption.jpg",
          "requerimento_sistema": {
            "minimum": "Resilient spirit",
            "recommended": "Heartfelt emotions"
          },
          "modos_jogo": [
            "Single-player",
            "Multiplayer"
          ],
          "price": "9.99"
        },
        {
          "id": "97092629-0a2a-41fc-ac2b-42c79b03948c",
          "nome": "Inception",
          "descricao": "A skilled thief who enters the dreams of others to steal their secrets.",
          "data_lancamento": "2010-07-16",
          "genero": "Action",
          "plataforma": [
            "Netflix",
            "Amazon Prime"
          ],
          "classificacao_etaria": 12,
          "desenvolvedor": "Christopher Nolan",
          "editora": "Warner Bros. Pictures",
          "avaliacao": "4.80",
          "capa_imagem": "https://example.com/inception.jpg",
          "requerimento_sistema": {
            "minimum": "High imagination",
            "recommended": "Dreamy mind"
          },
          "modos_jogo": [
            "Single-player"
          ],
          "price": "12.99"
        },
        {
          "id": "b0ec66f0-18a3-476a-9a18-4e3292cc9935",
          "nome": "The Shawshank Redemption",
          "descricao": "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
          "data_lancamento": "1994-09-23",
          "genero": "Drama",
          "plataforma": [
            "Hulu",
            "HBO Max"
          ],
          "classificacao_etaria": 14,
          "desenvolvedor": "Frank Darabont",
          "editora": "Columbia Pictures",
          "avaliacao": "4.90",
          "capa_imagem": "https://example.com/shawshank_redemption.jpg",
          "requerimento_sistema": {
            "minimum": "Resilient spirit",
            "recommended": "Heartfelt emotions"
          },
          "modos_jogo": [
            "Single-player",
            "Multiplayer"
          ],
          "price": "9.99"
        },
        {
          "id": "c7d091c1-9325-4a4b-b55a-2d5023a22a14",
          "nome": "Inception",
          "descricao": "A skilled thief who enters the dreams of others to steal their secrets.",
          "data_lancamento": "2010-07-16",
          "genero": "Action",
          "plataforma": [
            "Netflix",
            "Amazon Prime"
          ],
          "classificacao_etaria": 12,
          "desenvolvedor": "Christopher Nolan",
          "editora": "Warner Bros. Pictures",
          "avaliacao": "4.80",
          "capa_imagem": "https://example.com/inception.jpg",
          "requerimento_sistema": {
            "minimum": "High imagination",
            "recommended": "Dreamy mind"
          },
          "modos_jogo": [
            "Single-player"
          ],
          "price": "12.99"
        },
        {
          "id": "f3c331f5-6219-4c48-8e89-fb2de73f337e",
          "nome": "The Dark Knight",
          "descricao": "When the menace known as The Joker emerges, Batman must confront one of the greatest psychological tests of his ability to fight injustice.",
          "data_lancamento": "2008-07-18",
          "genero": "Action",
          "plataforma": [
            "Netflix",
            "Hulu",
            "Amazon Prime"
          ],
          "classificacao_etaria": 16,
          "desenvolvedor": "Christopher Nolan",
          "editora": "Warner Bros. Pictures",
          "avaliacao": "4.70",
          "capa_imagem": "https://example.com/dark_knight.jpg",
          "requerimento_sistema": {
            "minimum": "Bat-suit",
            "recommended": "Batmobile"
          },
          "modos_jogo": [
            "Single-player",
            "Multiplayer"
          ],
          "price": "14.99"
        }
      ]
    beforeAll(async () => {
        await AppDataSource.initialize()
    })

    afterAll(async () => {
        await AppDataSource.destroy()
    })
    it('Deve Fazer Uma Chamada GET para a rota /api/games e retornar todos os objetos', async () => {

        const resposta = await testServer.get('/api/games').expect(200)
        const body = resposta.body.content

    
        expect(body).toEqual(objetos)
    })

    it('Deve fazer uma chamada GET para rota /api/games/:id e retornar um game pelo id', async () => {
        
        const resposta = await testServer.get(`/api/games/${id}`).expect(200)

        const body = resposta.body.content

        expect(body.id).toEqual(id)
    })
    it('Deve fazer uma chamada GET para rota /api/games/:id e retornar um que o game não foi encontrado', async () => {
        
      const resposta = await testServer.get(`/api/games/1234`).expect(400)

      const body = resposta.body.content

      expect(body).toEqual('Game não encontrado!')
  })
})