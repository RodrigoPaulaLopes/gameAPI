import { Entity, PrimaryGeneratedColumn, Column, Table } from 'typeorm'

@Entity()
export class Games {
  @PrimaryGeneratedColumn('uuid')
    id: string

  @Column()
    nome: string

  @Column('text')
    descricao: string

  @Column({ type: 'date' })
    data_lancamento: Date

  @Column()
    genero: string

  @Column('simple-array')
    plataforma: string[]

  @Column()
    classificacao_etaria: number

  @Column()
    desenvolvedor: string

  @Column()
    editora: string

  @Column({ type: 'decimal', precision: 5, scale: 2, nullable: true })
    avaliacao: number

  @Column()
    capa_imagem: string

  @Column('json')
    requerimento_sistema: { minimum: string, recommended: string }

  @Column('simple-array')
    modos_jogo: string[]

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
    price: number
}
