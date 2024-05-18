import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class ValidadeUserDatum{
  public async handle ({ request, response }: HttpContextContract, next: () => Promise<void>) {
    // Verifica se os campos obrigatórios estão presentes no corpo da requisição
    const { name, email, phone } = request.only(['name', 'email', 'phone'])
    if (!name || !email || !phone) {
      return response.status(400).json({ error: 'Name, email, and phone are required fields' })
    }

    // Verifica se os campos não estão vazios
    if (name.trim() === '' || email.trim() === '' || phone.trim() === '') {
      return response.status(400).json({ error: 'Name, email, and phone cannot be empty' })
    }

    await next()
  }
}
