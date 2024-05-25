import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AutenticationsController {
    public async login ({ auth, request, response }: HttpContextContract) {
        const email = request.input('email')
        const password = request.input('password')
      
        try {
          const token = await auth.use('api').attempt(email, password)
          return token 
        } catch (erro){
          return response.unauthorized('Invalid credentials')
        }
}
}
