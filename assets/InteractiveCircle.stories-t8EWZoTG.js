import{r as g,R as e}from"./index-CDs2tPxN.js";import{C as m}from"./Container-DVKdD_iu.js";import{P as d}from"./Point-BmADXczb.js";import{D as u}from"./DraggablePoint-D6XX_ixX.js";import{C as p}from"./Circle-D99ypa57.js";import{u as b}from"./useDraggable-DSB2J76t.js";const t=()=>{const[i,l]=g.useState(null),[s,{x:o,y:c}]=b(i,200,200);return e.createElement(m,null,e.createElement(p,{centerId:"A",targetId:"B"}),e.createElement("g",{transform:`translate(${o},${c})`},e.createElement(d,{id:"A",x:0,y:0,style:{cursor:s?"-webkit-grabbing":"-webkit-grab"},ref:l}),e.createElement(u,{id:"B",initialX:150,initialY:0})))},y={title:"Interactive/Interactive Circle"};t.__docgenInfo={description:"",methods:[],displayName:"InteractiveCircle"};var r,n,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`() => {
  const [dragHandleElement, setDragHandleElement] = useState<HTMLElement | null>(null);
  const [isDragging, {
    x,
    y
  }] = useDraggable(dragHandleElement, 200, 200);
  return <Container>
            <Circle centerId="A" targetId="B" />
        <g transform={\`translate(\${x},\${y})\`}>
            <Point id="A" x={0} y={0} style={{
        cursor: isDragging ? '-webkit-grabbing' : '-webkit-grab'
      }} ref={setDragHandleElement} />
            <DraggablePoint id="B" initialX={150} initialY={0} />
        </g>
        </Container>;
}`,...(a=(n=t.parameters)==null?void 0:n.docs)==null?void 0:a.source}}};const H=["InteractiveCircle"];export{t as InteractiveCircle,H as __namedExportsOrder,y as default};
