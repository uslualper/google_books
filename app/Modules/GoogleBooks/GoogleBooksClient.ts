import axios, { AxiosInstance } from 'axios'
import GoogleBook from './Models/GoogleBook'

export default class GoogleBooksClient {
  public api: AxiosInstance
  public baseUrl: string = "https://www.googleapis.com/books/v1/"
  public apiKey = process.env.GOOGLE_BOOKS_API_KEY
  constructor() {
    this.api = axios.create({
      baseURL: this.baseUrl
    })
  }

  public getBooks = async (search: string, searchType: "intitle" | "inauthor" | "" = ""): Promise<GoogleBook[]> => {
    const { data } = await this.api.get(`volumes`,{
        params: {
            q: `${search}+${searchType}`,
            key: this.apiKey
        }
    })
    return data.items.map(item => new GoogleBook(item))
  }

  public getBook = async (id: string): Promise<GoogleBook> => {
    const { data } = await this.api.get(`volumes/${id}`,{
        params: {
            key: this.apiKey
        }
    })
    return new GoogleBook(data)
  }

}
