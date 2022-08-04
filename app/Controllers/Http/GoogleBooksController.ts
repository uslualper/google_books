import GoogleBooksClient from "App/Modules/GoogleBooks/GoogleBooksClient"

export default class GoogleBooksController {
    public async index({ request, response }) {
        const { search, searchType } = request.all();

        if (!search) {
            return response.status(400).json({
                error: "Search is required"
            })
        }

        const books = await new GoogleBooksClient().getBooks(search, searchType);
        return books;
    }

    public async show({ params, response }) {
        const { id } = params;
        const book = await new GoogleBooksClient().getBook(id);
        return book;
    }
}
