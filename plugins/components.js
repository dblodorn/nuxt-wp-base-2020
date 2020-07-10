import Vue from 'vue'

import RawDisplayer from '~/components/util/RawDisplayer'
import Loading from '~/components/Loading'
import LazyImage from '~/components/LazyImage'
import VideoPlayer from '~/components/video-player'
import Copyright from '~/components/Copyright'
import PrevNext from '~/components/PrevNext'

Vue.component('raw-displayer', RawDisplayer)
Vue.component('loading', Loading)
Vue.component('lazy-image', LazyImage)
Vue.component('video-player', VideoPlayer)
Vue.component('copyright', Copyright)
Vue.component('prev-next', PrevNext)
