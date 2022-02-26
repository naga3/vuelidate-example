import { createApp } from "vue"
import Minimum from "./Minimum.vue"
import Dirty from "./Dirty.vue"
import Email from "./Email.vue"
import Submit from "./Submit.vue"
import CustomMessage from "./CustomMessage.vue"
import CustomValidator from "./CustomValidator.vue"

let app
switch (window.location.search.substr(1)) {
  case "Minimum":
    app = Minimum
    break
  case "Dirty":
    app = Dirty
    break
  case "Submit":
    app = Submit
    break
  case "Email":
    app = Email
    break
  case "CustomMessage":
    app = CustomMessage
    break
  case "CustomValidator":
    app = CustomValidator
    break
  default:
    app = Minimum
}
createApp(app).mount('#app')
