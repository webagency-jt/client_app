import { HttpContext } from "@adonisjs/core/http";

export default class UsersController {
  /**
   * Return list of all posts or paginate through
   * them
   */
  async index({ }: HttpContext) {
    return {
      salut: 'salut mathys'
    };
  }

  /**
   * Render the form to create a new post.
   *
   * Not needed if you are creating an API server.
   */
  async create({ }: HttpContext) { }

  /**
   * Handle form submission to create a new post
   */
  async store({ request }: HttpContext) { }

  /**
   * Display a single post by id.
   */
  async show({ params }: HttpContext) { }

  /**
   * Render the form to edit an existing post by its id.
   *
   * Not needed if you are creating an API server.
   */
  async edit({ params }: HttpContext) { }

  /**
   * Handle the form submission to update a specific post by id
   */
  async update({ params, request }: HttpContext) { }

  /**
   * Handle the form submission to delete a specific post by id.
   */
  async destroy({ params }: HttpContext) { }
}