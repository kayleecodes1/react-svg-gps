import{R as e}from"./index-CDs2tPxN.js";import{C as p}from"./useBeaconPosition-CxDQBjqZ.js";import{L as u}from"./Line-C8upRFJV.js";import{P as o}from"./Point-CxFgBW5L.js";import{u as t}from"./useAnimatedPosition-D8xh99Ld.js";const n=()=>{const{x:d,y}=t(50,50,350,50,5e3),{x,y:A}=t(350,350,50,350,5e3);return e.createElement(p,null,e.createElement(u,{fromId:"A",toId:"B"}),e.createElement(o,{id:"A",x:d,y}),e.createElement(o,{id:"B",x,y:A}))},I={title:"Dynamic/Dynamic Line"};n.__docgenInfo={description:"",methods:[],displayName:"DynamicLine"};n.__docgenInfo={description:"",methods:[],displayName:"DynamicLine"};var i,r,a;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
  const {
    x: xA,
    y: yA
  } = useAnimatedPosition(50, 50, 350, 50, 5000);
  const {
    x: xB,
    y: yB
  } = useAnimatedPosition(350, 350, 50, 350, 5000);
  return <Container>
            <Line fromId="A" toId="B" />
            <Point id="A" x={xA} y={yA} />
            <Point id="B" x={xB} y={yB} />
        </Container>;
}`,...(a=(r=n.parameters)==null?void 0:r.docs)==null?void 0:a.source}}};var s,m,c;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`() => {
  const {
    x: xA,
    y: yA
  } = useAnimatedPosition(50, 50, 350, 50, 5000);
  const {
    x: xB,
    y: yB
  } = useAnimatedPosition(350, 350, 50, 350, 5000);
  return <Container>
            <Line fromId="A" toId="B" />
            <Point id="A" x={xA} y={yA} />
            <Point id="B" x={xB} y={yB} />
        </Container>;
}`,...(c=(m=n.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};const C=["DynamicLine"];export{n as DynamicLine,C as __namedExportsOrder,I as default};
