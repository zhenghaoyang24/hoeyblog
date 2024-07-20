// md文件批量引入
// import test_md from "/public/md/方法.md";
// import iframe_study from "/public/md/利用iframe标签解决form的action执行网络接口时获取不到返回数据的问题.md";
// import vue_life_study from "/public/md/day03.md";
import grid_layout_study from "@/assets/md/file/Grid布局.md";
import examination_card from "@/assets/md/file/examination_card.md";
import iframe_study from "@/assets/md/file/表单action异步问题.md";
import callback_study from "@/assets/md/file/回调函数.md";
import new_blog from "@/assets/md/file/new-blog.md";
// 创建md组件同时设置文章其他信息，单独导出使用
export const MarkdownType = [
    {type_id: 1, type_msg: '技文', type: 'skill',count:2},
    {type_id: 2, type_msg: '学文', type: 'knowledge',count:2},
    {type_id: 3, type_msg: '杂文', type: 'other',count:1},
]
export const MarkdownLabel = [
    {label_id: 1, label: 'Vue',color:'#42b782'},
    {label_id: 2, label: 'JavaScript',color:'#ec675c'},
    {label_id: 3, label: 'KLG',color:'#00b2ff'},
    {label_id: 4, label: 'CSS',color:'#ff5000'},
    {label_id: 5, label: '废话',color:'#ec28ff'},
    {label_id: 6, label: 'HTML',color:'#ff8928'}
]
export const MarkdownList = [
    {
        md_id: 5,
        md_name: new_blog,
        md_title: '新博客，启动！',
        md_describe: "做一个新博客的想法已经很久了。偶然间发现了vuepress-reco这个开源博客，主题样式非常喜欢，但是想到有段时间没有写前端项目了，于是想自己用Vue写一个。最终花了两三天终于完成了。",
        md_user: 'Hoey',
        md_data: '2024-7-15',
        md_label: [MarkdownLabel[4].label],  /*废话*/
        md_type: MarkdownType[2].type,  /*杂文*/
    },
    // markdown对象，最近的在前，便于解析时间线
    {
        md_id: 4,
        md_name: examination_card,
        md_title: '静态页面实现答题功能',
        md_describe: "利用v-if、v-for实现在html中进行答题，并反馈答题情况到答题卡",
        md_user: 'Hoey',
        md_data: '2023-12-23',
        md_label: [MarkdownLabel[0].label,MarkdownLabel[5].label],  /**/
        md_type: MarkdownType[0].type,   /*技文*/
    },
    {
        md_id: 3,
        md_name: callback_study,
        md_title: '回调函数理解',
        md_describe: "回调函数是什么?为什么要用?如何使用?",
        md_user: 'Hoey',
        md_data: '2021-3-4',
        md_label: [MarkdownLabel[2].label],   /*KLG*/
        md_type: MarkdownType[1].type,   /*知文*/
    },
    {
        /*杂文*/
        md_id: 2,
        md_name: iframe_study,
        md_title: '表单action的异步问题',
        md_describe: "利用iframe标签解决form的action执行网络接口时获取不到返回数据的问题",
        md_user: 'Hoey',
        md_data: '2021-1-16',
        md_label: [MarkdownLabel[1].label],  /*js*/
        md_type: MarkdownType[0].type,  /*技文*/
    },
    {
        md_id: 1,
        md_name: grid_layout_study,
        md_title: 'Grid布局',
        md_describe: "Grid布局是网格布局，它可以将页面划分为指定的行数与列数进行布局。",
        md_user: 'Hoey',
        md_data: '2020-11-23',
        md_label: [MarkdownLabel[3].label,MarkdownLabel[5].label],   /*CSS*/
        md_type: MarkdownType[1].type,     /*知文*/
    },
];
// 注册全部md组件
export const mdArticle = function (Vue) {
    Object.keys(MarkdownList).forEach((key) => {
        Vue.component(key, MarkdownList[key].name);
    });
};
