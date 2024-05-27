import { schema, rules, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UserValidator {
  constructor(protected ctx: HttpContextContract) { }

  public schema = schema.create({
    name: schema.string([rules.regex(/\S/)]),
    email: schema.string([rules.email()]),
    phone: schema.string([rules.regex(/^\(\d{2}\) \d{5}-\d{4}$/)]),
    password: schema.string({}, [
      rules.regex(/\S/),
      rules.minLength(6),
      rules.maxLength(25),
    ]),
  })

  public messages: CustomMessages = {
    required: "Dado obrigatorio",
    minLength: "A senha deve possuir no mínimo 6 caracteres ",
    maxLength: "A senha deve possuir no maximo 25 caracteres ",
    '*': (field) => {
      return `Formato invalido do campo ${field}`
    },
  }
}