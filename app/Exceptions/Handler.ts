import Logger from '@ioc:Adonis/Core/Logger'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import HttpExceptionHandler from '@ioc:Adonis/Core/HttpExceptionHandler'

export default class ExceptionHandler extends HttpExceptionHandler {
  constructor () {
    super(Logger)
  }

  public async handle(error: any, ctx: HttpContextContract) {

    //  if (error.code === '') {
    //    return ctx.response.status(401).send({response: 'Usuario nao autenticado' })
    //  }


    return super.handle(error, ctx)
  }
}
