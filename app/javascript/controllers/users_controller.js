import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "id" ]

  reset() {
    this.element.reset()
  }

  destroy() {
    const token = document.querySelector('[name=csrf-token]').content

    fetch('/users/' + this.idTarget.value, {
      method: 'DELETE',
      headers: {
        'X-Csrf-Token': token,
        "Accept": "text/html; turbo-stream, text/html, application/xhtml+xml",
        "Turbo-Frame": "users"
      }
    })
  }
}
