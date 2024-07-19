import {MarkdownList} from "@/assets/md/index.js";

const state = {
    markdownList: MarkdownList
}
const mutations = {
}
const actions = {}
const getters = {
    //根据类型过滤
    allMarkdownList(state) {
        return state.markdownList
    },
    markdownListByType: (state) => (type) => {
        if (type==='all')
            return state.markdownList
        else
            return state.markdownList.filter(item => item.md_type === type)
    },
    markdownByName: (state) => (name) => {
        return state.markdownList.filter(item => item.md_name === name)
    },
    markdownById: (state) => (id) => {
        return state.markdownList.filter(item => item.md_id === id)
    }



}

export default {
    namespaced: true,   //映射必须开启命名空间
    state,
    mutations,
    actions,
    getters
}
