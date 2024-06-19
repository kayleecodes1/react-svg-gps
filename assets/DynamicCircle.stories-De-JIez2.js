import{R as n}from"./index-CDs2tPxN.js";import{C as y}from"./Container-DVKdD_iu.js";import{P as t}from"./Point-BmADXczb.js";import{C as l}from"./Circle-D99ypa57.js";import{u as r}from"./useAnimatedPosition-D8xh99Ld.js";const e=()=>{const{x:c,y:s}=r(150,150,250,250,5e3),{x:m,y:d}=r(50,200,350,200,5e3);return n.createElement(y,null,n.createElement(l,{centerId:"A",targetId:"B"}),n.createElement(t,{id:"A",x:c,y:s}),n.createElement(t,{id:"B",x:m,y:d}))},B={title:"Dynamic/Dynamic Circle"};e.__docgenInfo={description:"",methods:[],displayName:"DynamicCircle"};var o,i,a;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`() => {
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
}`,...(a=(i=e.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};const f=["DynamicCircle"];export{e as DynamicCircle,f as __namedExportsOrder,B as default};
