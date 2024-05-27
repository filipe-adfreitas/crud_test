import Logger from '@ioc:Adonis/Core/Logger'
// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import HttpExceptionHandler from '@ioc:Adonis/Core/HttpExceptionHandler'

export default class ExceptionHandler extends HttpExceptionHandler {
  constructor () {
    super(Logger)
  }
  // Olhar com mais calma depois, pois achei que tinha entendido, porém não entendi direito 
  // public async handle(error: any, ctx: HttpContextContract) {
  //   if (error instanceof Error) {
  //     return ctx.response.status(400).json({ error: error.message })
  //   }

  //   return super.handle(error, ctx)
  // }
}