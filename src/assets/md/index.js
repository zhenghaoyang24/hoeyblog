// md文件批量引入
// import test_md from "/public/md/方法.md";
// import iframe_study from "/public/md/利用iframe标签解决form的action执行网络接口时获取不到返回数据的问题.md";
// import vue_life_study from "/public/md/day03.md";
import test_md from "@/assets/md/file/方法.md";
import test_md2 from "@/assets/md/file/方法2.md";
import iframe_study from "@/assets/md/file/利用iframe标签解决form的action执行网络接口时获取不到返回数据的问题.md";
import vue_life_study from "@/assets/md/file/day03.md";
// 创建md组件同时设置文章其他信息，单独导出使用
export const MarkdownType = [
    {type_id: 1, type_msg: '技文', type: 'skill',count:3},
    {type_id: 2, type_msg: '杂文', type: 'other',count:1},
]
export const MarkdownLabel = [
    {label_id: 1, label: 'Vue',color:'#42b782'},
    {label_id: 2, label: 'JavaScript',color:'#ec675c'},
]
export const MarkdownList = [
    // markdown对象，最近的在前，便于解析时间线
    {
        md_id: 4,
        md_name: test_md2,
        md_title: '方法测试2',
        md_describe: "ahahhahah哈哈手机阿凡达。",
        md_user: 'Hoey',
        md_data: '2023-12-23',
        md_label: [MarkdownLabel[0].label],
        md_type: MarkdownType[0].type,
    },
    {
        md_id: 3,
        md_name: vue_life_study,
        md_title: '生命周期',
        md_describe: "Vue生命周期：就是一个Vue实例从创建 到 销毁 的整个过程。",
        md_user: 'Hoey',
        md_data: '2023-11-23',
        md_label: [MarkdownLabel[0].label],
        md_type: MarkdownType[0].type,
    },
    {
        /*杂文*/
        md_id: 2,
        md_name: iframe_study,
        md_title: '表单action的异步问题',
        md_describe: "利用iframe标签解决form的action执行网络接口时获取不到返回数据的问题",
        md_user: 'Hoey',
        md_data: '2021-11-23',
        md_label: [MarkdownLabel[0].label,MarkdownLabel[1].label],
        md_type: MarkdownType[0].type,
    },
    {
        md_id: 1,
        md_name: test_md,
        md_title: '方法',
        md_describe: "测试markdown",
        md_user: 'Hoey',
        md_data: '2020-11-23',
        md_label: [MarkdownLabel[1].label],
        md_type: MarkdownType[1].type,
    },
];
// 注册全部md组件
export const mdArticle = function (Vue) {
    Object.keys(MarkdownList).forEach((key) => {
        Vue.component(key, MarkdownList[key].name);
    });
};
