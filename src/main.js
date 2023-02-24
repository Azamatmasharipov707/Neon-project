import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret} from '@fortawesome/free-solid-svg-icons'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faSun } from '@fortawesome/free-solid-svg-icons'
import { faCalendar } from '@fortawesome/free-solid-svg-icons' 
import { faClock } from '@fortawesome/free-solid-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faArrowsUpToLine } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faUserSecret,faChevronDown,faSearch,faSun,faCalendar,faClock,faTwitter,faFacebookF,faLinkedinIn,faInstagram,faGithub,faArrowsUpToLine)

/* add font awesome icon component */
// Vue.component('font-awesome-icon', FontAwesomeIcon)



createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
