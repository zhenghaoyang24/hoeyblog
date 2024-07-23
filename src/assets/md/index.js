// md文件批量引入
// import test_md from "/public/md/方法.md";
// import iframe_study from "/public/md/利用iframe标签解决form的action执行网络接口时获取不到返回数据的问题.md";
// import vue_life_study from "/public/md/day03.md";
import grid_layout_study from "@/assets/md/file/Grid布局.md";
import examination_card from "@/assets/md/file/静态页面实现答题功能.md";
import iframe_study from "@/assets/md/file/表单action异步问题.md";
import callback_study from "@/assets/md/file/回调函数.md";
import new_blog from "@/assets/md/file/新博客.md";
import load_keyframes_practice from "@/assets/md/file/CSS实现加载动画.md";
import asynchronous_js_study from "@/assets/md/file/JS中的异步编程.md";
import wei_translate_practice from "@/assets/md/file/微信小程序中实现翻译.md";
import vue_v_model_study from "@/assets/md/file/关于Vue中的v-model.md";
import js_array_function_study from "@/assets/md/file/JS中的数组处理函数.md";
import career_planning_other from "@/assets/md/file/提前了解，少走弯路.md";
// 创建md组件同时设置文章其他信息，单独导出使用
export const MarkdownType = [
    {type_id: 1, type_msg: '技文', type: 'skill', count: 4},
    {type_id: 2, type_msg: '学文', type: 'knowledge', count: 5},
    {type_id: 3, type_msg: '杂文', type: 'other', count: 2},
]
export const MarkdownLabel = [
    {label_id: 1, label: 'Vue', color: '#42b782'},
    {label_id: 2, label: 'JavaScript', color: '#ec675c'},
    {label_id: 3, label: 'KLG', color: '#00b2ff'},
    {label_id: 4, label: 'CSS', color: '#ff5000'},
    {label_id: 5, label: '废话', color: '#ec28ff'},
    {label_id: 6, label: 'HTML', color: '#ff8928'},
    {label_id: 7, label: '微信小程序', color: '#00bf5d'},
]
export const MarkdownList = [
    {
        md_id: 11,
        md_name: new_blog,
        md_title: '新博客，启动！',
        md_describe: "做一个新博客的想法已经很久了。花了两三天时间终于完成了。",
        md_user: 'Hoey',
        md_data: '2024-7-15',
        md_label: [MarkdownLabel[4].label],  /*废话*/
        md_type: MarkdownType[2].type,  /*杂文*/
    },
    {
        md_id: 10,
        md_name: js_array_function_study,
        md_title: 'JS中的数组处理函数',
        md_describe: "JS对数组处理提供了许多方法，对目前在开发中经常用到且强大的方法做一个学习总结。",
        md_user: 'Hoey',
        md_data: '2023-5-30',
        md_label: [MarkdownLabel[1].label],
        md_type: MarkdownType[1].type,  /*学*/
    },
    {
        md_id: 9,
        md_name: vue_v_model_study,
        md_title: '关于Vue中的v-model',
        md_describe: "用v-model指令在表单上创建双向数据绑定。用.sync实现非表单的双向绑定。",
        md_user: 'Hoey',
        md_data: '2023-5-7',
        md_label: [MarkdownLabel[0].label],
        md_type: MarkdownType[1].type,  /*学*/
    },
    {
        /*技文*/
        md_id: 8,
        md_name: wei_translate_practice,
        md_title: '微信小程序中实现翻译功能',
        md_describe: "最近在做一个学习单词的微信小程序，需要开发一个句子翻译功能，于是想到了试试经常都在使用的百度翻译的API。",
        md_user: 'Hoey',
        md_data: '2023-4-26',
        md_label: [MarkdownLabel[6].label],
        md_type: MarkdownType[0].type,  /*技文*/
    },
    {
        /*杂文*/
        md_id: 7,
        md_name: asynchronous_js_study,
        md_title: 'JS中的事件循环机制与异步处理',
        md_describe: "JavaScript是单线程的，这意味着它一次只能执行一个任务。为了处理异步操作，JavaScript依赖于事件循环机制。事件循环允许JavaScript在等待异步操作完成时继续执行其他任务，从而实现非阻塞的异步编程。",
        md_user: 'Hoey',
        md_data: '2023-4-20',
        md_label: [MarkdownLabel[1].label],  /*js*/
        md_type: MarkdownType[1].type,  /*技文*/
    },
    {
        /*杂文*/
        md_id: 6,
        md_name: career_planning_other,
        md_title: '提前了解，少走弯路',
        md_describe: "最近有大一学弟学妹问我们高年级学长学姐，该怎么选好自己的发展方向。回想自己大学经历，我好像也走了不少弯路，换过不少方向。",
        md_user: 'Hoey',
        md_data: '2023-3-17',
        md_label: [MarkdownLabel[4].label],  /*废话*/
        md_type: MarkdownType[2].type,  /*杂文*/
    },
    {
        /*杂文*/
        md_id: 5,
        md_name: iframe_study,
        md_title: '表单action的异步问题',
        md_describe: "利用iframe标签解决form的action执行网络接口时获取不到返回数据的问题。",
        md_user: 'Hoey',
        md_data: '2023-1-8',
        md_label: [MarkdownLabel[1].label],  /*js*/
        md_type: MarkdownType[0].type,  /*技文*/
    },
    {
        md_id: 4,
        md_name: callback_study,
        md_title: '回调函数理解',
        md_describe: "回调函数是什么?为什么要用?如何使用?",
        md_user: 'Hoey',
        md_data: '2022-11-8',
        md_label: [MarkdownLabel[2].label],   /*KLG*/
        md_type: MarkdownType[1].type,   /*知文*/
    },
    {
        md_id: 3,
        md_name: examination_card,
        md_title: '静态页面实现答题功能',
        md_describe: "利用v-if、v-for实现在html中进行答题，并反馈答题情况到答题卡。",
        md_user: 'Hoey',
        md_data: '2022-9-27',
        md_label: [MarkdownLabel[0].label, MarkdownLabel[5].label],  /**/
        md_type: MarkdownType[0].type,   /*技文*/
    },
    {
        /*杂文*/
        md_id: 2,
        md_name: load_keyframes_practice,
        md_title: '利用keyframes实现加载动画',
        md_describe: "CSS动画是CSS3的新特性，今天想用动画做一个简单的页面加载动画。",
        md_user: 'Hoey',
        md_data: '2022-4-19',
        md_label: [MarkdownLabel[3].label, MarkdownLabel[5].label],
        md_type: MarkdownType[0].type,  /*技文*/
    },
    {
        md_id: 1,
        md_name: grid_layout_study,
        md_title: 'Grid布局',
        md_describe: "Grid布局是网格布局，它可以将页面划分为指定的行数与列数进行布局。",
        md_user: 'Hoey',
        md_data: '2022-3-23',
        md_label: [MarkdownLabel[3].label, MarkdownLabel[5].label],   /*CSS*/
        md_type: MarkdownType[1].type,     /*知文*/
    },
];
// 注册全部md组件
export const mdArticle = function (Vue) {
    Object.keys(MarkdownList).forEach((key) => {
        Vue.component(key, MarkdownList[key].name);
    });
};
