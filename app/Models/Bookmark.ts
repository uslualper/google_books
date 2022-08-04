import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'
import User from 'App/Models/User'

export default class Bookmark extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public userId: number

  @column()
  public googleId: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @belongsTo(()=> User)
  public user: BelongsTo<typeof User>
}
