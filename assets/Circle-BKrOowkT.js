import{R as c}from"./index-CDs2tPxN.js";import{T as t}from"./Container-dTSXx2xM.js";const s=({centerId:i,targetId:n})=>{const e=t({id:i}),r=t({id:n});if(!e||!r)return null;const o=Math.sqrt((r.x-e.x)**2+(r.y-e.y)**2);return c.createElement("circle",{cx:e.x,cy:e.y,r:o,fill:"none",stroke:"#3B6DF0",strokeWidth:4})};s.__docgenInfo={description:"",methods:[],displayName:"Circle",props:{centerId:{required:!0,tsType:{name:"String"},description:""},targetId:{required:!0,tsType:{name:"String"},description:""}}};export{s as C};