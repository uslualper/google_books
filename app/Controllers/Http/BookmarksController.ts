import Bookmark from 'App/Models/Bookmark'

export default class BookmarksController {

  public async index({request,auth}) {
      const user = await auth.user
      const page = request.input('page') || 1

      const bookmarks = await Bookmark.query()
        .where('user_id', user.id)
        .orderBy('created_at', 'desc')
        .paginate(page, 10)

      return bookmarks
  }
  
  public async show({params,auth}) {
    const user = await auth.user
    const bookmarks = await Bookmark.query()
      .where('user_id', user.id)
      .where('id', params.id)
      .first()
    return bookmarks
  }

  public async store({request,response,auth}) {

    const user = await auth.user
    const { googleId } = request.all()

    const bookmark = await Bookmark.query()
      .where('user_id', user.id)
      .where('google_id', googleId)
      .first()

    if (bookmark) {
      return response.status(409).send({
        error: 'Bookmark already exists',
      })
    }

    const newBookmark = await Bookmark.create({
      userId: user.id,
      googleId: googleId
    })

    return newBookmark

  }

  public async destroy({params,response,auth}) {
    const user = await auth.user
    const bookmark = await Bookmark.query()
      .where('user_id', user.id)
      .where('id', params.id)
      .first()
    if (!bookmark) {
      return response.status(404).send({
        error: 'Bookmark not found',
      })
    }
    await bookmark.delete()
  }
}
