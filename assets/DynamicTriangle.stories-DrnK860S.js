import{R as n}from"./index-CDs2tPxN.js";import{C as A}from"./Container-DVKdD_iu.js";import{L as t}from"./Line-ppr9o0tJ.js";import{P as o}from"./Point-BmADXczb.js";import{u as r}from"./useAnimatedPosition-D8xh99Ld.js";const e=()=>{const{x:s,y:d}=r(200,50,200,350,5e3),{x:c,y}=r(50,350,350,350,5e3),{x,y:l}=r(350,350,350,50,5e3);return n.createElement(A,null,n.createElement(t,{fromId:"A",toId:"B"}),n.createElement(t,{fromId:"B",toId:"C"}),n.createElement(t,{fromId:"C",toId:"A"}),n.createElement(o,{id:"A",x:s,y:d}),n.createElement(o,{id:"B",x:c,y}),n.createElement(o,{id:"C",x,y:l}))},B={title:"Dynamic/Dynamic Triangle"};e.__docgenInfo={description:"",methods:[],displayName:"DynamicTriangle"};var i,a,m;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
  const {
    x: xA,
    y: yA
  } = useAnimatedPosition(200, 50, 200, 350, 5000);
  const {
    x: xB,
    y: yB
  } = useAnimatedPosition(50, 350, 350, 350, 5000);
  const {
    x: xC,
    y: yC
  } = useAnimatedPosition(350, 350, 350, 50, 5000);
  return <Container>
            <Line fromId="A" toId="B" />
            <Line fromId="B" toId="C" />
            <Line fromId="C" toId="A" />
            <Point id="A" x={xA} y={yA} />
            <Point id="B" x={xB} y={yB} />
            <Point id="C" x={xC} y={yC} />
        </Container>;
}`,...(m=(a=e.parameters)==null?void 0:a.docs)==null?void 0:m.source}}};const P=["DynamicTriangle"];export{e as DynamicTriangle,P as __namedExportsOrder,B as default};
