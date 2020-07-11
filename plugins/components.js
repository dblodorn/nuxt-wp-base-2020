import Vue from 'vue'

import RawDisplayer from '~/components/util/RawDisplayer'
import Loading from '~/components/Loading'
import LazyImage from '~/components/LazyImage'
import VideoPlayer from '~/components/video-player'
import Copyright from '~/components/Copyright'
import PrevNext from '~/components/PrevNext'
import BreadCrumbs from '~/components/BreadCrumbs'
import ThumbnailLinkGrid from '~/components/layout/ThumbnailLinkGrid'

Vue.component('raw-displayer', RawDisplayer)
Vue.component('loading', Loading)
Vue.component('lazy-image', LazyImage)
Vue.component('video-player', VideoPlayer)
Vue.component('copyright', Copyright)
Vue.component('prev-next', PrevNext)
Vue.component('breadcrumbs', BreadCrumbs)
Vue.component('thumbnail-link-grid', ThumbnailLinkGrid)
