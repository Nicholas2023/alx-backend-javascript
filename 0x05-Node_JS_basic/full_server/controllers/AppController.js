/**
 * Contains the miscellaneous route handlers.
 * @author Nicholas Otieno <https://github.com/Nicholas2023>
 */
class AppController {
  static getHomepage(request, response) {
    response.status(200).send('Hello Holberton School!');
  }
}

export default AppController;
module.exports = AppController;