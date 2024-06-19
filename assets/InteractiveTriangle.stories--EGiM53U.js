import{R as e}from"./index-CDs2tPxN.js";import{C as l}from"./Container-DVKdD_iu.js";import{D as n}from"./DraggablePoint-D6XX_ixX.js";import{L as t}from"./Line-ppr9o0tJ.js";import{u as a}from"./useAnimatedPosition-D8xh99Ld.js";import"./Point-BmADXczb.js";import"./useDraggable-DSB2J76t.js";const i=()=>(a(200,50,200,350,5e3),a(50,350,350,350,5e3),a(350,350,350,50,5e3),e.createElement(l,null,e.createElement(t,{fromId:"A",toId:"B"}),e.createElement(t,{fromId:"B",toId:"C"}),e.createElement(t,{fromId:"C",toId:"A"}),e.createElement(n,{id:"A",initialX:200,initialY:50}),e.createElement(n,{id:"B",initialX:350,initialY:350}),e.createElement(n,{id:"C",initialX:50,initialY:350}))),u={title:"Interactive/Interactive Triangle"};i.__docgenInfo={description:"",methods:[],displayName:"InteractiveTriangle"};var r,o,m;i.parameters={...i.parameters,docs:{...(r=i.parameters)==null?void 0:r.docs,source:{originalSource:`() => {
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
            <DraggablePoint id="A" initialX={200} initialY={50} />
            <DraggablePoint id="B" initialX={350} initialY={350} />
            <DraggablePoint id="C" initialX={50} initialY={350} />
        </Container>;
}`,...(m=(o=i.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};const A=["InteractiveTriangle"];export{i as InteractiveTriangle,A as __namedExportsOrder,u as default};
