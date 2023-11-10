import{d as e,t as a,c as o,a as l,F as s,b as n,w as c,e as t,f as i,r,o as h,g as m,h as u,i as d,_ as p,j as w,k as g,l as f,m as b,n as v,p as k,q as I,s as y,u as D,v as S,E as _}from"./vendor.91c64bf4.js";var C=e({name:"App",components:{},data:()=>({searchStr:"",placeholder:"",searchDomainItem:{},searchDomainList:[{label:".Bing",value:"1",placeholder:"微软 Bing 搜索"},{label:".Google",value:"2",placeholder:"Google 搜索"},{label:".Baidu",value:"3",placeholder:"百度一下，你就知道"},{label:".Zhihu",value:"4",placeholder:"发现 - 知乎"}],urls:[],urlsIconPrefix:"/sunrise-browser-home/icon/"}),watch:{searchDomainItem(e){window.localStorage.setItem("JY_SEARCHDOMAIN",JSON.stringify(a(e))),this.placeholder=e.placeholder}},mounted(){this.init(),this.loadUrls()},methods:{init(){let e=window.localStorage.getItem("JY_SEARCHDOMAIN");this.searchDomainItem=e?JSON.parse(e):this.searchDomainList[0],this.placeholder=this.searchDomainItem.placeholder},loadUrls(){this.$http.get("/urls.json").then((e=>{200==e.status&&Array.isArray(e.data)&&(this.urls=e.data)}))},goUrl(e){window.location.href=e},async querySearch(e,a){a([])},doSearch(){let e=encodeURIComponent(this.searchStr);switch(this.searchDomainItem.value){case"1":window.location.href=`https://cn.bing.com/search?q=${e}`;break;case"2":window.location.href=`https://www.google.com.hk/search?q=${e}`;break;case"3":window.location.href=`https://www.baidu.com/s?wd=${e}`;break;case"4":window.location.href=`https://www.zhihu.com/search?q=${e}`}}}});const A=l("div",{class:"head"},[l("div",{class:"logo"},"J."),l("i",{class:"setting el-icon-more"})],-1),U={class:"search_block"},q={class:"search_logo"},$=l("i",{class:"iconfont ali-bing"},null,-1),B=i(" Bing "),J=l("i",{class:"iconfont ali-Google1"},null,-1),x=i(" Google "),G=l("i",{class:"iconfont ali-baidu"},null,-1),L=i(" Baidu "),N=l("i",{class:"iconfont ali-zhihu"},null,-1),O=i(" Zhihu "),R={class:"input_block"},j={class:"domain_label"},E=l("i",{class:"el-icon-arrow-down el-icon--right"},null,-1),P={class:"urls_block"},V=l("div",{class:"foot"},[l("p",null,"© 2021 简语"),l("p",null,"清夜无尘，月色如银。酒斟时，须满十分。-- 苏轼《行香子.述杯》"),l("div",{class:"icons"},[l("i",{class:"iconfont ali-github"})])],-1);C.render=function(e,a,d,p,w,g){const f=r("el-dropdown-item"),b=r("el-dropdown-menu"),v=r("el-dropdown"),k=r("el-autocomplete"),I=r("el-button"),y=r("el-col"),D=r("el-row");return h(),o(s,null,[A,l("div",U,[l("div",q,["1"==e.searchDomainItem.value?(h(),o(s,{key:0},[$,B],64)):n("",!0),"2"==e.searchDomainItem.value?(h(),o(s,{key:1},[J,x],64)):n("",!0),"3"==e.searchDomainItem.value?(h(),o(s,{key:2},[G,L],64)):n("",!0),"4"==e.searchDomainItem.value?(h(),o(s,{key:3},[N,O],64)):n("",!0)]),l("div",R,[l(k,{autofocus:"",modelValue:e.searchStr,"onUpdate:modelValue":a[2]||(a[2]=a=>e.searchStr=a),onKeyup:c(e.doSearch,["enter"]),"fetch-suggestions":e.querySearch,placeholder:e.placeholder},{append:t((()=>[l(v,{onCommand:a[1]||(a[1]=a=>e.searchDomainItem=a),trigger:"click"},{dropdown:t((()=>[l(b,null,{default:t((()=>[(h(!0),o(s,null,m(e.searchDomainList,(e=>(h(),o(f,{key:e.value,command:e},{default:t((()=>[i(u(e.label),1)])),_:2},1032,["command"])))),128))])),_:1})])),default:t((()=>[l("span",null,[l("span",j,u(e.searchDomainItem.label),1),E])])),_:1})])),_:1},8,["modelValue","onKeyup","fetch-suggestions","placeholder"]),l(I,{onClick:e.doSearch,icon:"el-icon-search",type:"primary"},null,8,["onClick"])])]),l("div",P,[l(D,{gutter:10},{default:t((()=>[(h(!0),o(s,null,m(e.urls,(a=>(h(),o(y,{key:a.url,xs:8,sm:6,md:4,lg:3,xl:3},{default:t((()=>[l("div",{class:"url_item",onClick:o=>e.goUrl(a.url)},[l("img",{src:e.urlsIconPrefix+a.icon},null,8,["src"]),l("p",null,u(a.title),1)],8,["onClick"])])),_:2},1024)))),128))])),_:1})]),V],64)};const z=d(C);z.component(p.name,p),z.component(w.name,w),z.component(g.name,g),z.component(f.name,f),z.component(b.name,b),z.component(v.name,v),z.component(k.name,k),z.component(I.name,I),z.component(y.name,y),z.component(D.name,D),z.component(S.name,S),z.use((function(e){e.config.globalProperties.$http=_.create({baseURL:"/sunrise-browser-home/"})})),z.mount("#app");