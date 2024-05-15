import BaseSchema from '@ioc:Adonis/Lucid/Schema';

export default class CreateUsersTable extends BaseSchema {
  protected tableName = 'usuarios';

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary();
      table.string('nome').notNullable();
      table.string('email').notNullable().unique();
      table.string('telefone').notNullable();
      table.timestamps(true, true);
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}

import { DateTime } from 'luxon';
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm';

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public nome: string;

  @column()
  public email: string;

  @column()
  public telefone: string;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;
}

import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import User from 'app/Models/User';

export default class UsersController {
  public async index({}: HttpContextContract) {
    const users = await User.all();
    return users;
  }

  public async store({ request }: HttpContextContract) {
    const data = request.only(['nome', 'email', 'telefone']);
    const user = await User.create(data);
    return user;
  }

  public async show({ params }: HttpContextContract) {
    const user = await User.findOrFail(params.id);
    return user;
  }

  public async update({ params, request }: HttpContextContract) {
    const user = await User.findOrFail(params.id);
    const data = request.only(['nome', 'email', 'telefone']);
    user.merge(data);
    await user.save();
    return user;
  }

  public async destroy({ params }: HttpContextContract) {
    const user = await User.findOrFail(params.id);
    await user.delete();
  }
}

