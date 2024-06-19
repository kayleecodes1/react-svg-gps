import{R as e,r as u}from"./index-CDs2tPxN.js";import{C as p,a as h,u as E}from"./Container-DVKdD_iu.js";import{u as g}from"./useDraggable-DSB2J76t.js";const l=({children:o,initialX:i,initialY:t})=>{const[n,c]=u.useState(null),[s,{x:f,y:I}]=g(n,i,t);return e.createElement("g",{transform:`translate(${f},${I})`,style:{cursor:s?"-webkit-grabbing":"-webkit-grab"},ref:c},e.createElement("rect",{x:"-60",y:"0",width:"120",height:"60",fill:"#FFF",stroke:"#3E4751",strokeWidth:"4",rx:"5",ry:"5"}),e.Children.map(o,m=>e.isValidElement(m)?e.cloneElement(m):null))},r=({id:o,x:i,y:t})=>{const n=h({id:o});return e.createElement("circle",{cx:i,cy:t,r:7,fill:"#3E4751",stroke:"#FFF",strokeWidth:3,ref:n})},d=({fromId:o,toId:i})=>{const t=E({id:o}),n=E({id:i});if(!t||!n)return null;const c=Math.max(Math.abs(n.y-t.y)*.4,30),s=`M${t.x} ${t.y} C ${t.x} ${t.y+c},${n.x} ${n.y-c},${n.x} ${n.y}`;return e.createElement("path",{d:s,fill:"none",stroke:"#3B6DF0",strokeWidth:4})},a=()=>e.createElement(p,null,e.createElement(d,{fromId:"A",toId:"B"}),e.createElement(d,{fromId:"A",toId:"D"}),e.createElement(d,{fromId:"C",toId:"F"}),e.createElement(d,{fromId:"E",toId:"G"}),e.createElement(l,{initialX:200,initialY:30},e.createElement(r,{id:"A",x:0,y:60})),e.createElement(l,{initialX:90,initialY:170},e.createElement(r,{id:"B",x:0,y:0}),e.createElement(r,{id:"C",x:0,y:60})),e.createElement(l,{initialX:310,initialY:170},e.createElement(r,{id:"D",x:0,y:0}),e.createElement(r,{id:"E",x:0,y:60})),e.createElement(l,{initialX:200,initialY:310},e.createElement(r,{id:"F",x:-24,y:0}),e.createElement(r,{id:"G",x:24,y:0}))),b={title:"Interactive/Interactive Node Graph"};a.__docgenInfo={description:"",methods:[],displayName:"InteractiveNodeGraph"};var x,y,C;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`() => <Container>
        <Connection fromId="A" toId="B" />
        <Connection fromId="A" toId="D" />
        <Connection fromId="C" toId="F" />
        <Connection fromId="E" toId="G" />
        <Node initialX={200} initialY={30}>
            <Connector id="A" x={0} y={60} />
        </Node>
        <Node initialX={90} initialY={170}>
            <Connector id="B" x={0} y={0} />
            <Connector id="C" x={0} y={60} />
        </Node>
        <Node initialX={310} initialY={170}>
            <Connector id="D" x={0} y={0} />
            <Connector id="E" x={0} y={60} />
        </Node>
        <Node initialX={200} initialY={310}>
            <Connector id="F" x={-24} y={0} />
            <Connector id="G" x={24} y={0} />
        </Node>
    </Container>`,...(C=(y=a.parameters)==null?void 0:y.docs)==null?void 0:C.source}}};const k=["InteractiveNodeGraph"];export{a as InteractiveNodeGraph,k as __namedExportsOrder,b as default};
