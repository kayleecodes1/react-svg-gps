import{R as n}from"./index-CDs2tPxN.js";import{C as l}from"./useBeaconPosition-CxDQBjqZ.js";import{P as t}from"./Point-CxFgBW5L.js";import{C as p}from"./Circle-BHBmvS5U.js";import{u as r}from"./useAnimatedPosition-D8xh99Ld.js";const e=()=>{const{x:d,y}=r(150,150,250,250,5e3),{x,y:A}=r(50,200,350,200,5e3);return n.createElement(l,null,n.createElement(p,{centerId:"A",targetId:"B"}),n.createElement(t,{id:"A",x:d,y}),n.createElement(t,{id:"B",x,y:A}))},I={title:"Dynamic/Dynamic Circle"};e.__docgenInfo={description:"",methods:[],displayName:"DynamicCircle"};e.__docgenInfo={description:"",methods:[],displayName:"DynamicCircle"};var o,i,a;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`() => {
  const {
    x: xA,
    y: yA
  } = useAnimatedPosition(150, 150, 250, 250, 5000);
  const {
    x: xB,
    y: yB
  } = useAnimatedPosition(50, 200, 350, 200, 5000);
  return <Container>
            <Circle centerId="A" targetId="B" />
            <Point id="A" x={xA} y={yA} />
            <Point id="B" x={xB} y={yB} />
        </Container>;
}`,...(a=(i=e.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};var s,c,m;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`() => {
  const {
    x: xA,
    y: yA
  } = useAnimatedPosition(150, 150, 250, 250, 5000);
  const {
    x: xB,
    y: yB
  } = useAnimatedPosition(50, 200, 350, 200, 5000);
  return <Container>
            <Circle centerId="A" targetId="B" />
            <Point id="A" x={xA} y={yA} />
            <Point id="B" x={xB} y={yB} />
        </Container>;
}`,...(m=(c=e.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const g=["DynamicCircle"];export{e as DynamicCircle,g as __namedExportsOrder,I as default};
