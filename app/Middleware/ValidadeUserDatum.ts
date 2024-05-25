import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class ValidadeUserDatum {
  public async handle ({ request, response }: HttpContextContract, next: () => Promise<void>) {
    
    const { name, email, phone, password } = request.only(['name', 'email', 'phone','password'])
    if (!name || !email || !phone) {
      return response.status(400).json({ error: 'Name, email, and são campos obrigatórios' })
    }

    if (name.trim() === '' || email.trim() === '' || phone.toString().trim() === '' || password.trim() === ' ') {
      return response.status(400).json({ error: 'Name, email, and phone não podem estar vazios' })
    }

    await next()
  }
}
