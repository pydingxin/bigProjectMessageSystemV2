import {reactive} from 'vue'    

//后端传来的总的项目数据
let allProjectMsg=[{
    "key":"row0",
    "idx":'1',
    "col0":"3",
    "col1":"洪宽生态板、高档家具制造项目",
    "col2":"占地188亩，总建筑面积103473平方米，主要建设7栋生产车间、办公区等，新上10条板材生产线，10条家具生产线，购置设备20套。",
    "col3":"完成建筑面积45816平方米；新上生产线10条；生产车间5栋；办公用房6600平方米；设备10套。",
    "col4":"54000",
    "col5":"20000",
    "col6":"产值25000万元；税收800万元；亩均投资280万元；亩均税收10万元；新增就业200人。",
    "col7":`<ul><li>3月土地、土地平整，完成投资4000万元；</li><li>4月开工建设，完成投资1000万元；</li></ul><p style="text-indent: 2em;">5月基础建设，完成投资3000万元；</p><p><span style="color: rgb(114, 192, 64);"><strong>6月钢构安装，完成投资2000万元；</strong></span></p><ol><li>7月钢构安装，完成投资2000万元；</li><li>8月设备安装，完成投资3000万元；</li></ol><h3><span style="background-color: rgb(255, 251, 143);"><u><em><strong>9月设备安装，完成投资3000万元；</strong></em></u></span></h3><p>10月投产，完成投资2000万元。"</p><p><span style="color: rgb(212, 212, 212);"> &nbsp; &nbsp;</span></p>`,
    "col8":"是",
    "col9":"25800",
    "col10":"129%",
    "col11":"项目已全面开工建设，1号、2号车间开始外墙瓦安装，3号、4号、5号钢构主体已完成，办公楼已封顶，宿舍楼主体完成。",
    "col12":"土地出让金2500万元；清表费用1000万元；土建工程3500万元；1号车间钢结构4500万元;设备基础3500万元;设备安装3000万元。",
    "col13":"已纳统，MA3MAC819371326001",
    "col14":"√",
    "col15":"√",
    "col16":"√",
    "col17":"√",
    "col18":"√",
    "col19":"√",
    "col20":"√",
    "col21":"--",
    "col22":"--",
    "col23":"√",
    "col24":"前期因供地错位，需要增补的20亩用地手续尚未办结。",
    "col25":"21.24亩集体土地联营县政府已批复。剩余面积将项目纳入2022年成片开发方案，待方案批复后实施土地征收。",
    "col26":"自然资源和规划局",
    "col27":"待定",
    "col28":"卞桥镇",
    "col29":"程学文"
},{
    "key":"rgvs",
    "idx":'2',
    "col0":"3",
    "col1":"洪宽生态板、高档家具制造项目",
    "col2":"占地188亩，总建筑面积103473平方米，主要建设7栋生产车间、办公区等，新上10条板材生产线，10条家具生产线，购置设备20套。",
    "col3":"完成建筑面积45816平方米；新上生产线10条；生产车间5栋；办公用房6600平方米；设备10套。",
    "col4":"54000",
    "col5":"20000",
    "col6":"产值25000万元；税收800万元；亩均投资280万元；亩均税收10万元；新增就业200人。",
    "col7":`<ul><li>3月土地、土地平整，完成投资4000万元；</li><li>4月开工建设，完成投资1000万元；</li></ul><p style="text-indent: 2em;">5月基础建设，完成投资3000万元；</p><p><span style="color: rgb(114, 192, 64);"><strong>6月钢构安装，完成投资2000万元；</strong></span></p><ol><li>7月钢构安装，完成投资2000万元；</li><li>8月设备安装，完成投资3000万元；</li></ol><h3><span style="background-color: rgb(255, 251, 143);"><u><em><strong>9月设备安装，完成投资3000万元；</strong></em></u></span></h3><p>10月投产，完成投资2000万元。"</p><p><span style="color: rgb(212, 212, 212);"> &nbsp; &nbsp;</span></p>`,
    "col8":"是",
    "col9":"25800",
    "col10":"129%",
    "col11":"项目已全面开工建设，1号、2号车间开始外墙瓦安装，3号、4号、5号钢构主体已完成，办公楼已封顶，宿舍楼主体完成。",
    "col12":"土地出让金2500万元；清表费用1000万元；土建工程3500万元；1号车间钢结构4500万元;设备基础3500万元;设备安装3000万元。",
    "col13":"已纳统，MA3MAC819371326001",
    "col14":"√",
    "col15":"√",
    "col16":"√",
    "col17":"√",
    "col18":"√",
    "col19":"√",
    "col20":"√",
    "col21":"--",
    "col22":"--",
    "col23":"√",
    "col24":"前期因供地错位，需要增补的20亩用地手续尚未办结。",
    "col25":"21.24亩集体土地联营县政府已批复。剩余面积将项目纳入2022年成片开发方案，待方案批复后实施土地征收。",
    "col26":"自然资源和规划局",
    "col27":"待定",
    "col28":"卞桥镇",
    "col29":"程学文"
},
{"key":"row3","idx":'1',"col0":"3","col1":"第二个 项目","col2":"--","col3":"--","col4":"54000","col5":"20000","col6":"--","col7":"--","col8":"是","col9":"25800","col10":"129%","col11":"--","col12":"--","col13":"--","col14":"√","col15":"√","col16":"√","col17":"√","col18":"√","col19":"√","col20":"√","col21":"--","col22":"--","col23":"√","col24":"--","col25":"21.","col26":"--","col27":"--","col28":"--","col29":""},
{"key":"row4","idx":'1',"col0":"3","col1":"第二个 项目","col2":"--","col3":"--","col4":"54000","col5":"20000","col6":"--","col7":"--","col8":"是","col9":"25800","col10":"129%","col11":"--","col12":"--","col13":"--","col14":"√","col15":"√","col16":"√","col17":"√","col18":"√","col19":"√","col20":"√","col21":"--","col22":"--","col23":"√","col24":"--","col25":"21.","col26":"--","col27":"--","col28":"--","col29":""},
{"key":"row5","idx":'1',"col0":"3","col1":"第二个 项目","col2":"--","col3":"--","col4":"54000","col5":"20000","col6":"--","col7":"--","col8":"是","col9":"25800","col10":"129%","col11":"--","col12":"--","col13":"--","col14":"√","col15":"√","col16":"√","col17":"√","col18":"√","col19":"√","col20":"√","col21":"--","col22":"--","col23":"√","col24":"--","col25":"21.","col26":"--","col27":"--","col28":"--","col29":""},
{"key":"row6","idx":'1',"col0":"3","col1":"第二个 项目","col2":"--","col3":"--","col4":"54000","col5":"20000","col6":"--","col7":"--","col8":"是","col9":"25800","col10":"129%","col11":"--","col12":"--","col13":"--","col14":"√","col15":"√","col16":"√","col17":"√","col18":"√","col19":"√","col20":"√","col21":"--","col22":"--","col23":"√","col24":"--","col25":"21.","col26":"--","col27":"--","col28":"--","col29":""},
{"key":"row7","idx":'1',"col0":"3","col1":"第二个 项目","col2":"--","col3":"--","col4":"54000","col5":"20000","col6":"--","col7":"--","col8":"是","col9":"25800","col10":"129%","col11":"--","col12":"--","col13":"--","col14":"√","col15":"√","col16":"√","col17":"√","col18":"√","col19":"√","col20":"√","col21":"--","col22":"--","col23":"√","col24":"--","col25":"21.","col26":"--","col27":"--","col28":"--","col29":""},
{"key":"row8","idx":'1',"col0":"3","col1":"第二个 项目","col2":"--","col3":"--","col4":"54000","col5":"20000","col6":"--","col7":"--","col8":"是","col9":"25800","col10":"129%","col11":"--","col12":"--","col13":"--","col14":"√","col15":"√","col16":"√","col17":"√","col18":"√","col19":"√","col20":"√","col21":"--","col22":"--","col23":"√","col24":"--","col25":"21.","col26":"--","col27":"--","col28":"--","col29":""},
{"key":"row9","idx":'1',"col0":"3","col1":"第二个 项目","col2":"--","col3":"--","col4":"54000","col5":"20000","col6":"--","col7":"--","col8":"是","col9":"25800","col10":"129%","col11":"--","col12":"--","col13":"--","col14":"√","col15":"√","col16":"√","col17":"√","col18":"√","col19":"√","col20":"√","col21":"--","col22":"--","col23":"√","col24":"--","col25":"21.","col26":"--","col27":"--","col28":"--","col29":""},
{"key":"row10","idx":'1',"col0":"3","col1":"第二个 项目","col2":"--","col3":"--","col4":"54000","col5":"20000","col6":"--","col7":"--","col8":"是","col9":"25800","col10":"129%","col11":"--","col12":"--","col13":"--","col14":"√","col15":"√","col16":"√","col17":"√","col18":"√","col19":"√","col20":"√","col21":"--","col22":"--","col23":"√","col24":"--","col25":"21.","col26":"--","col27":"--","col28":"--","col29":""},
{"key":"row11","idx":'1',"col0":"3","col1":"第二个 项目","col2":"--","col3":"--","col4":"54000","col5":"20000","col6":"--","col7":"--","col8":"是","col9":"25800","col10":"129%","col11":"--","col12":"--","col13":"--","col14":"√","col15":"√","col16":"√","col17":"√","col18":"√","col19":"√","col20":"√","col21":"--","col22":"--","col23":"√","col24":"--","col25":"21.","col26":"--","col27":"--","col28":"--","col29":""},
{"key":"row12","idx":'1',"col0":"3","col1":"第二个 项目","col2":"--","col3":"--","col4":"54000","col5":"20000","col6":"--","col7":"--","col8":"是","col9":"25800","col10":"129%","col11":"--","col12":"--","col13":"--","col14":"√","col15":"√","col16":"√","col17":"√","col18":"√","col19":"√","col20":"√","col21":"--","col22":"--","col23":"√","col24":"--","col25":"21.","col26":"--","col27":"--","col28":"--","col29":""},
{"key":"row13","idx":'1',"col0":"3","col1":"第二个 项目","col2":"--","col3":"--","col4":"54000","col5":"20000","col6":"--","col7":"--","col8":"是","col9":"25800","col10":"129%","col11":"--","col12":"--","col13":"--","col14":"√","col15":"√","col16":"√","col17":"√","col18":"√","col19":"√","col20":"√","col21":"--","col22":"--","col23":"√","col24":"--","col25":"21.","col26":"--","col27":"--","col28":"--","col29":""},
{"key":"row14","idx":'1',"col0":"3","col1":"第二个 项目","col2":"--","col3":"--","col4":"54000","col5":"20000","col6":"--","col7":"--","col8":"是","col9":"25800","col10":"129%","col11":"--","col12":"--","col13":"--","col14":"√","col15":"√","col16":"√","col17":"√","col18":"√","col19":"√","col20":"√","col21":"--","col22":"--","col23":"√","col24":"--","col25":"21.","col26":"--","col27":"--","col28":"--","col29":""},
{"key":"row23","idx":'1',"col0":"3","col1":"第二个 项目","col2":"--","col3":"--","col4":"54000","col5":"20000","col6":"--","col7":"--","col8":"是","col9":"25800","col10":"129%","col11":"--","col12":"--","col13":"--","col14":"√","col15":"√","col16":"√","col17":"√","col18":"√","col19":"√","col20":"√","col21":"--","col22":"--","col23":"√","col24":"--","col25":"21.","col26":"--","col27":"--","col28":"--","col29":""},
{"key":"row24","idx":'1',"col0":"3","col1":"第二个 项目","col2":"--","col3":"--","col4":"54000","col5":"20000","col6":"--","col7":"--","col8":"是","col9":"25800","col10":"129%","col11":"--","col12":"--","col13":"--","col14":"√","col15":"√","col16":"√","col17":"√","col18":"√","col19":"√","col20":"√","col21":"--","col22":"--","col23":"√","col24":"--","col25":"21.","col26":"--","col27":"--","col28":"--","col29":""},
{"key":"row25","idx":'1',"col0":"3","col1":"第二个 项目","col2":"--","col3":"--","col4":"54000","col5":"20000","col6":"--","col7":"--","col8":"是","col9":"25800","col10":"129%","col11":"--","col12":"--","col13":"--","col14":"√","col15":"√","col16":"√","col17":"√","col18":"√","col19":"√","col20":"√","col21":"--","col22":"--","col23":"√","col24":"--","col25":"21.","col26":"--","col27":"--","col28":"--","col29":""},
{"key":"row26","idx":'1',"col0":"3","col1":"第二个 项目","col2":"--","col3":"--","col4":"54000","col5":"20000","col6":"--","col7":"--","col8":"是","col9":"25800","col10":"129%","col11":"--","col12":"--","col13":"--","col14":"√","col15":"√","col16":"√","col17":"√","col18":"√","col19":"√","col20":"√","col21":"--","col22":"--","col23":"√","col24":"--","col25":"21.","col26":"--","col27":"--","col28":"--","col29":""},
{"key":"row27","idx":'1',"col0":"3","col1":"第二个 项目","col2":"--","col3":"--","col4":"54000","col5":"20000","col6":"--","col7":"--","col8":"是","col9":"25800","col10":"129%","col11":"--","col12":"--","col13":"--","col14":"√","col15":"√","col16":"√","col17":"√","col18":"√","col19":"√","col20":"√","col21":"--","col22":"--","col23":"√","col24":"--","col25":"21.","col26":"--","col27":"--","col28":"--","col29":""},
{"key":"row28","idx":'1',"col0":"3","col1":"第二个 项目","col2":"--","col3":"--","col4":"54000","col5":"20000","col6":"--","col7":"--","col8":"是","col9":"25800","col10":"129%","col11":"--","col12":"--","col13":"--","col14":"√","col15":"√","col16":"√","col17":"√","col18":"√","col19":"√","col20":"√","col21":"--","col22":"--","col23":"√","col24":"--","col25":"21.","col26":"--","col27":"--","col28":"--","col29":""},
{"key":"row29","idx":'1',"col0":"3","col1":"第二个 项目","col2":"--","col3":"--","col4":"54000","col5":"20000","col6":"--","col7":"--","col8":"是","col9":"25800","col10":"129%","col11":"--","col12":"--","col13":"--","col14":"√","col15":"√","col16":"√","col17":"√","col18":"√","col19":"√","col20":"√","col21":"--","col22":"--","col23":"√","col24":"--","col25":"21.","col26":"--","col27":"--","col28":"--","col29":""},
{"key":"row210","idx":'1',"col0":"3","col1":"第二个 项目","col2":"--","col3":"--","col4":"54000","col5":"20000","col6":"--","col7":"--","col8":"是","col9":"25800","col10":"129%","col11":"--","col12":"--","col13":"--","col14":"√","col15":"√","col16":"√","col17":"√","col18":"√","col19":"√","col20":"√","col21":"--","col22":"--","col23":"√","col24":"--","col25":"21.","col26":"--","col27":"--","col28":"--","col29":""},
{"key":"row211","idx":'1',"col0":"3","col1":"第二个 项目","col2":"--","col3":"--","col4":"54000","col5":"20000","col6":"--","col7":"--","col8":"是","col9":"25800","col10":"129%","col11":"--","col12":"--","col13":"--","col14":"√","col15":"√","col16":"√","col17":"√","col18":"√","col19":"√","col20":"√","col21":"--","col22":"--","col23":"√","col24":"--","col25":"21.","col26":"--","col27":"--","col28":"--","col29":""},
{"key":"row212","idx":'1',"col0":"3","col1":"第二个 项目","col2":"--","col3":"--","col4":"54000","col5":"20000","col6":"--","col7":"--","col8":"是","col9":"25800","col10":"129%","col11":"--","col12":"--","col13":"--","col14":"√","col15":"√","col16":"√","col17":"√","col18":"√","col19":"√","col20":"√","col21":"--","col22":"--","col23":"√","col24":"--","col25":"21.","col26":"--","col27":"--","col28":"--","col29":""},
{"key":"row213","idx":'1',"col0":"3","col1":"第二个 项目","col2":"--","col3":"--","col4":"54000","col5":"20000","col6":"--","col7":"--","col8":"是","col9":"25800","col10":"129%","col11":"--","col12":"--","col13":"--","col14":"√","col15":"√","col16":"√","col17":"√","col18":"√","col19":"√","col20":"√","col21":"--","col22":"--","col23":"√","col24":"--","col25":"21.","col26":"--","col27":"--","col28":"--","col29":""},
{"key":"231","idx":'231',"col0":"3","col1":"第231 项目","col2":"--","col3":"--","col4":"54000","col5":"20000","col6":"--","col7":"--","col8":"是","col9":"25800","col10":"129%","col11":"--","col12":"--","col13":"--","col14":"√","col15":"√","col16":"√","col17":"√","col18":"√","col19":"√","col20":"√","col21":"--","col22":"--","col23":"√","col24":"--","col25":"21.","col26":"--","col27":"--","col28":"--","col29":""},
];

function projectManage_allProjectMsg(){
    return allProjectMsg.map(one=>({idx:one.idx, key:one.key, name:one.col1}));
}
function getProjectMsgByKey(key){
    return allProjectMsg.find(one=>one.key===key)
}
export const storeProject = reactive({
    projectManage_allProjectMsg,
    getProjectMsgByKey,
})
  