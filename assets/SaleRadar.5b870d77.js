import{B as i,r,T as s,D as l,a2 as d,a6 as n,J as m,Y as u,u as c,c0 as f}from"./vendor.bf608252.js";/* empty css                *//* empty css               *//* empty css               */import{u as h}from"./useECharts.8e99a453.js";import"./index.9c6ac897.js";const C=i({props:{loading:Boolean,width:{type:String,default:"100%"},height:{type:String,default:"400px"}},setup(t){const e=t,a=r(null),{setOptions:o}=h(a);return s(()=>e.loading,()=>{e.loading||o({legend:{bottom:0,data:["Visits","Sales"]},tooltip:{},radar:{radius:"60%",splitNumber:8,indicator:[{text:"2017",max:100},{text:"2017",max:100},{text:"2018",max:100},{text:"2019",max:100},{text:"2020",max:100},{text:"2021",max:100}]},series:[{type:"radar",symbolSize:0,areaStyle:{shadowBlur:0,shadowColor:"rgba(0,0,0,.2)",shadowOffsetX:0,shadowOffsetY:10,opacity:1},data:[{value:[90,50,86,40,50,20],name:"Visits",itemStyle:{color:"#b6a2de"}},{value:[70,75,70,76,20,85],name:"Sales",itemStyle:{color:"#67e0e3"}}]}]})},{immediate:!0}),(p,x)=>(l(),d(c(f),{title:"\u9500\u552E\u7EDF\u8BA1",loading:t.loading},{default:n(()=>[m("div",{ref_key:"chartRef",ref:a,style:u({width:t.width,height:t.height})},null,4)]),_:1},8,["loading"]))}});export{C as default};
