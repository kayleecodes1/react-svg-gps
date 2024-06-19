import{r as u,R as n}from"./index-CDs2tPxN.js";import{C as b}from"./useBeaconPosition-CxDQBjqZ.js";import{P as p}from"./Point-CxFgBW5L.js";import{D as E}from"./DraggablePoint-CutFL_p1.js";import{C as D}from"./Circle-BHBmvS5U.js";import{u as f}from"./useDraggable-DSB2J76t.js";const e=()=>{const[o,g]=u.useState(null),[c,{x:m,y:d}]=f(o,200,200);return n.createElement(b,null,n.createElement(D,{centerId:"A",targetId:"B"}),n.createElement("g",{transform:`translate(${m},${d})`},n.createElement(p,{id:"A",x:0,y:0,style:{cursor:c?"-webkit-grabbing":"-webkit-grab"},ref:g}),n.createElement(E,{id:"B",initialX:150,initialY:0})))},k={title:"Interactive/Interactive Circle"};e.__docgenInfo={description:"",methods:[],displayName:"InteractiveCircle"};e.__docgenInfo={description:"",methods:[],displayName:"InteractiveCircle"};var t,r,a;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`() => {
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
}`,...(a=(r=e.parameters)==null?void 0:r.docs)==null?void 0:a.source}}};var i,l,s;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
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
}`,...(s=(l=e.parameters)==null?void 0:l.docs)==null?void 0:s.source}}};const v=["InteractiveCircle"];export{e as InteractiveCircle,v as __namedExportsOrder,k as default};
