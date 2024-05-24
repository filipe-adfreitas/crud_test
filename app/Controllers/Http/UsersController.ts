import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
import UserValidator from 'App/Validators/UserValidator'

export default class UsersController {
  public async index({request, response }: HttpContextContract) {
    const {page} = request.qs()

    const users = await User.query().paginate(page, 5)

    response.status(200).send({response: users})
  }

  public async show({ params, response }: HttpContextContract) {
    const userId = params.id
    try {
      const user = await User.findOrFail(userId)
      response.status(200).send({response: user})
    } catch (error) {
      return response.status(404).json({ error: 'User not found' })
    }
  }

  public async store({ request, response }: HttpContextContract) {
    await request.validate(UserValidator)

    const data = request.only(['name', 'email', 'phone'])

    await User.create(data)

    response.status(200).json({
      response: "Usuario cadastrado com sucesso"
    })

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
