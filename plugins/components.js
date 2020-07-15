import Vue from 'vue'

import RawDisplayer from '~/components/util/RawDisplayer'
import Loading from '~/components/Loading'
import LazyImage from '~/components/LazyImage'
import VideoPlayer from '~/components/VideoPlayer'
import Copyright from '~/components/Copyright'
import PrevNext from '~/components/PrevNext'
import BreadCrumbs from '~/components/BreadCrumbs'
import SlideShow from '~/components/SlideShow'
import ThumbnailLinkGrid from '~/components/layout/ThumbnailLinkGrid'
import ImageGrid from '~/components/layout/ImageGrid'
import FlexMediaLayout from '~/components/layout/FlexMediaLayout'

Vue.component('raw-displayer', RawDisplayer)
Vue.component('loading', Loading)
Vue.component('lazy-image', LazyImage)
Vue.component('video-player', VideoPlayer)
Vue.component('copyright', Copyright)
Vue.component('prev-next', PrevNext)
Vue.component('breadcrumbs', BreadCrumbs)
Vue.component('slide-show', SlideShow)
Vue.component('thumbnail-link-grid', ThumbnailLinkGrid)
Vue.component('image-grid', ImageGrid)
Vue.component('flex-media-layout', FlexMediaLayout)
