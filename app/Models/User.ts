import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string
  
  @column()
  public email: string

  @column()
  public phone: number

  @column()
  public password: string

  @column.dateTime({ serializeAs: null })
  public createdAt: DateTime

  @column.dateTime({ serializeAs: null })
  public updatedAt: DateTime
}
