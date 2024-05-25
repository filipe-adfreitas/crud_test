import { schema, rules, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

  export default class UserValidator {
    constructor(protected ctx: HttpContextContract) {}

    public schema = schema.create({
      name: schema.string([rules.regex(/\S/)]),
      email: schema.string([rules.email()]),
      phone: schema.string([rules.regex(/^\(\d{2}\) \d{5}-\d{4}$/)]),
      password: schema.string([])
    })

    public messages: CustomMessages = {
      required: "Dado obrigatorio",
      '*': (field) => {
        return `Formato invalido do campo ${field}`
      },
    }
  }