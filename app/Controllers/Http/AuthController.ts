import User from 'App/Models/User'

export default class AuthController {

  public async login({ request, auth }) {
    const email = request.input('email')
    const password = request.input('password')

    const token = await auth.use('api').attempt(email, password, {
      expiresIn: '1 days',
    })

    return token.toJSON()
  }

  public async register({ request, response, auth }) {

    const findUserByEmail = await User.findBy('email', request.input('email'))

    if (findUserByEmail) {
      return response.status(409).send({
        error: 'Email is already registered',
      })
    }

    const newUser = new User()
    newUser.fill(request.only(['email', 'password', 'first_name', 'last_name']))

    await newUser.save()

    const token = await auth.use('api').login(newUser, {
      expiresIn: '1 days',
    })

    return token.toJSON()
  }
  
}
