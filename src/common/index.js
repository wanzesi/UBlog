import Tabs from './components/tab-bar/Tabs'
import Tab from './components/tab-bar/Tab'
import Scroller from './components/scroller/scroller'
import {FetchGet, FetchPost} from './fetch'
import { Icon } from 'vant';


export default {
    install(Vue){
        Vue.component(Tabs.name, Tabs);
        Vue.component(Tab.name, Tab);
        Vue.component(Scroller.name, Scroller);
        Vue.use(Icon);

        Vue.prototype.FetchGet = FetchGet;
        Vue.prototype.FetchPost = FetchPost;
    }
}