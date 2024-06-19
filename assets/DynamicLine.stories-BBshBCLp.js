import{R as e}from"./index-CDs2tPxN.js";import{C as y}from"./Container-DVKdD_iu.js";import{L as x}from"./Line-ppr9o0tJ.js";import{P as t}from"./Point-BmADXczb.js";import{u as o}from"./useAnimatedPosition-D8xh99Ld.js";const n=()=>{const{x:m,y:s}=o(50,50,350,50,5e3),{x:c,y:d}=o(350,350,50,350,5e3);return e.createElement(y,null,e.createElement(x,{fromId:"A",toId:"B"}),e.createElement(t,{id:"A",x:m,y:s}),e.createElement(t,{id:"B",x:c,y:d}))},f={title:"Dynamic/Dynamic Line"};n.__docgenInfo={description:"",methods:[],displayName:"DynamicLine"};var i,r,a;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
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
}`,...(a=(r=n.parameters)==null?void 0:r.docs)==null?void 0:a.source}}};const L=["DynamicLine"];export{n as DynamicLine,L as __namedExportsOrder,f as default};
