import{R as e}from"./index-CDs2tPxN.js";import{C as p}from"./useBeaconPosition-CxDQBjqZ.js";import{L as o}from"./Line-C8upRFJV.js";import{P as t}from"./Point-CxFgBW5L.js";import{u as i}from"./useAnimatedPosition-D8xh99Ld.js";const n=()=>{const{x:y,y:x}=i(200,50,200,350,5e3),{x:A,y:C}=i(50,350,350,350,5e3),{x:l,y:I}=i(350,350,350,50,5e3);return e.createElement(p,null,e.createElement(o,{fromId:"A",toId:"B"}),e.createElement(o,{fromId:"B",toId:"C"}),e.createElement(o,{fromId:"C",toId:"A"}),e.createElement(t,{id:"A",x:y,y:x}),e.createElement(t,{id:"B",x:A,y:C}),e.createElement(t,{id:"C",x:l,y:I}))},E={title:"Dynamic/Dynamic Triangle"};n.__docgenInfo={description:"",methods:[],displayName:"DynamicTriangle"};n.__docgenInfo={description:"",methods:[],displayName:"DynamicTriangle"};var r,a,s;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:`() => {
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
}`,...(s=(a=n.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};var m,d,c;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
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
}`,...(c=(d=n.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};const L=["DynamicTriangle"];export{n as DynamicTriangle,L as __namedExportsOrder,E as default};
