import Vue from 'vue'
import Vuex from 'vuex'
import MarkdownStore from "@/store/modules/markdown";


Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        them: 'dark',   //主题

    },
    getters: {
        getTheme: state => {
            return state.them
        }
    },
    mutations: {
        async changeThemeMutations(state) {
            // let link =await document.getElementById("theme");
            document.getElementById('body').style.transition ='all 0.3s'
            if (state.them === 'dark') {
                // link.href = './css/light-theme.css';
                window.document.documentElement.setAttribute('theme', 'light');
                state.them = 'light'
            } else {
                // link.href = './css/dark-theme.css';
                window.document.documentElement.setAttribute('theme', 'dark');
                state.them = 'dark'
            }
            // document.getElementsByTagName("head")[0].appendChild(link);
        },
    },
    actions: {},
    modules: {
        MarkdownStore

    }
})
