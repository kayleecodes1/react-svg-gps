import{R as e,r as h}from"./index-CDs2tPxN.js";import{C as g,a as F,u as C}from"./useBeaconPosition-CxDQBjqZ.js";import{u as X}from"./useDraggable-DSB2J76t.js";const c=({children:r,initialX:a,initialY:n})=>{const[t,d]=h.useState(null),[s,{x:u,y:N}]=X(t,a,n);return e.createElement("g",{transform:`translate(${u},${N})`,style:{cursor:s?"-webkit-grabbing":"-webkit-grab"},ref:d},e.createElement("rect",{x:"-60",y:"0",width:"120",height:"60",fill:"#FFF",stroke:"#3E4751",strokeWidth:"4",rx:"5",ry:"5"}),e.Children.map(r,m=>e.isValidElement(m)?e.cloneElement(m):null))},i=({id:r,x:a,y:n})=>{const t=F({id:r});return e.createElement("circle",{cx:a,cy:n,r:7,fill:"#3E4751",stroke:"#FFF",strokeWidth:3,ref:t})},l=({fromId:r,toId:a})=>{const n=C({id:r}),t=C({id:a});if(!n||!t)return null;const d=Math.max(Math.abs(t.y-n.y)*.4,30),s=`M${n.x} ${n.y} C ${n.x} ${n.y+d},${t.x} ${t.y-d},${t.x} ${t.y}`;return e.createElement("path",{d:s,fill:"none",stroke:"#3B6DF0",strokeWidth:4})},o=()=>e.createElement(g,null,e.createElement(l,{fromId:"A",toId:"B"}),e.createElement(l,{fromId:"A",toId:"D"}),e.createElement(l,{fromId:"C",toId:"F"}),e.createElement(l,{fromId:"E",toId:"G"}),e.createElement(c,{initialX:200,initialY:30},e.createElement(i,{id:"A",x:0,y:60})),e.createElement(c,{initialX:90,initialY:170},e.createElement(i,{id:"B",x:0,y:0}),e.createElement(i,{id:"C",x:0,y:60})),e.createElement(c,{initialX:310,initialY:170},e.createElement(i,{id:"D",x:0,y:0}),e.createElement(i,{id:"E",x:0,y:60})),e.createElement(c,{initialX:200,initialY:310},e.createElement(i,{id:"F",x:-24,y:0}),e.createElement(i,{id:"G",x:24,y:0}))),$={title:"Interactive/Interactive Node Graph"};o.__docgenInfo={description:"",methods:[],displayName:"InteractiveNodeGraph"};o.__docgenInfo={description:"",methods:[],displayName:"InteractiveNodeGraph"};var y,E,x;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`() => <Container>
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
    </Container>`,...(x=(E=o.parameters)==null?void 0:E.docs)==null?void 0:x.source}}};var I,f,p;o.parameters={...o.parameters,docs:{...(I=o.parameters)==null?void 0:I.docs,source:{originalSource:`() => <Container>
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
    </Container>`,...(p=(f=o.parameters)==null?void 0:f.docs)==null?void 0:p.source}}};const A=["InteractiveNodeGraph"];export{o as InteractiveNodeGraph,A as __namedExportsOrder,$ as default};
