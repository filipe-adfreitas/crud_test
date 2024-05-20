import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class UsersController {
  public async index({}: HttpContextContract) {
    return await User.all() 
  } 

  public async show({ params, response }: HttpContextContract) {
    const userId = params.id
    try {
      const user = await User.findOrFail(userId)  
      return user.serialize() 
    } catch (error) {
      return response.status(404).json({ error: 'User not found' })
    }
  }

  public async store({ request, response }: HttpContextContract) {
    const data = request.only(['name', 'email', 'phone'])

    try {
      const user = await User.create(data)
      return response.status(201).json(user.serialize())  
    } catch (error) {
      return response.status(400).json({ error: error.message })
    }
  }

  public async update({ params, request, response }: HttpContextContract) {
    const userId = params.id
    const data = request.only(['name', 'email', 'phone'])

    try {
      const user = await User.findOrFail(userId)
      user.merge(data) 
      await user.save()
      return response.status(200).json(user.serialize()) 
    } catch (error) {
      return response.status(400).json({ error: error.message })
    }
  }

  public async destroy({ params, response }: HttpContextContract) {
    const userId = params.id
    try {
      const user = await User.findOrFail(userId)
      await user.delete()
      return response.status(200).json({ message: 'Usuario deletado com sucesso' })
    } catch (error) {
      return response.status(400).json({ error: error.message })
    }
  }
}
