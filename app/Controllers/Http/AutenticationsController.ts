import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import scrypt from 'scrypt-js' 

export default class AutenticationsController {
    public async login ({ auth, request, response }: HttpContextContract) {
        const email = request.input('email')
        const password = request.input('password')
        console.log(email)
        console.log(password)
        try {
          // Realize o hashing da senha usando a biblioteca adequada
          const hashedPassword = await hashPassword(password)
          console.log(hashedPassword)
            // Autentique o usuário usando a senha já hashada
            const token = await auth.use('api').attempt(email, password)
            return token 
        } catch (error) {
          return response.unauthorized('Invalid credentials')
        }
      }
    }
    // Função para criar a hash da senha
    async function hashPassword(password: string): Promise<string> {
        // Implemente a lógica para criar a hash da senha com a biblioteca adequada
        // Por exemplo, para o scrypt:
        const scryptParameters = {
            N: 16384,
            r: 8,
            p: 1,
            dkLen: 64,
            encoding: 'base64'
        }
        const salt = new Uint8Array(16) // Gere um salt aleatório
        const hashedPasswordBuffer = await scrypt.scrypt(Buffer.from(password), salt, scryptParameters.N, scryptParameters.r, scryptParameters.p, scryptParameters.dkLen)
        return Buffer.from(hashedPasswordBuffer).toString('base64')
    
  }
  