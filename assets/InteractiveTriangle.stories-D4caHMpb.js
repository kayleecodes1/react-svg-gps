import{R as i}from"./index-CDs2tPxN.js";import{C as c}from"./useBeaconPosition-CxDQBjqZ.js";import{D as e}from"./DraggablePoint-CutFL_p1.js";import{L as t}from"./Line-C8upRFJV.js";import{u as a}from"./useAnimatedPosition-D8xh99Ld.js";import"./Point-CxFgBW5L.js";import"./useDraggable-DSB2J76t.js";const n=()=>(a(200,50,200,350,5e3),a(50,350,350,350,5e3),a(350,350,350,50,5e3),i.createElement(c,null,i.createElement(t,{fromId:"A",toId:"B"}),i.createElement(t,{fromId:"B",toId:"C"}),i.createElement(t,{fromId:"C",toId:"A"}),i.createElement(e,{id:"A",initialX:200,initialY:50}),i.createElement(e,{id:"B",initialX:350,initialY:350}),i.createElement(e,{id:"C",initialX:50,initialY:350}))),x={title:"Interactive/Interactive Triangle"};n.__docgenInfo={description:"",methods:[],displayName:"InteractiveTriangle"};n.__docgenInfo={description:"",methods:[],displayName:"InteractiveTriangle"};var o,r,s;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`() => {
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
}`,...(s=(r=n.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};var d,m,l;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`() => {
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
}`,...(l=(m=n.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};const y=["InteractiveTriangle"];export{n as InteractiveTriangle,y as __namedExportsOrder,x as default};
