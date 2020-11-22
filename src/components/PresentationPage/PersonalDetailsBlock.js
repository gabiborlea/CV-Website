import {PresentationItems} from './PresentationItems'
import React from "react";
import ReactFlow, {Background, Handle, Controls} from 'react-flow-renderer';
import {isMobile} from "react-device-detect";


import './PersonalDetailsBlock.css';



const HandleStyle = {
    opacity: "0",
}

const Center = ({data}) => {
    return (
        <div style={data.style} className={data.className}>
            <div>{data.text}</div>
            <Handle type="source" position="right" id="r" style={HandleStyle}/>
            <Handle type="source" position="left" id="l" style={HandleStyle}/>
            <Handle type="source" position="top" id="t" style={HandleStyle}/>
            <Handle type="source" position="bottom" id="b" style={HandleStyle}/>
        </div>
    );
};
const Education = ({data}) => {
    return (
        <div style={data.style} className={data.className}>
            <div style={{marginTop: 10,}}>{data.label}</div>
            <Handle type="target" position="right" id="r" style={HandleStyle}/>
            <Handle type="source" position="left" id="l" style={HandleStyle}/>
        </div>
    );
};

const Skills = ({data}) => {
    return (
        <div style={data.style} className={data.className}>
            <div style={{marginTop: 10,}}>{data.label}</div>
            <Handle type="target" position="left" id="l" style={HandleStyle}/>
        </div>
    );
};

const WorkExp = ({data}) => {
    return (
        <div style={data.style} className={data.className}>
            <div style={{marginTop: 10,}}>{data.label}</div>
            <Handle type="target" position="bottom" id="b" style={HandleStyle}/>
        </div>
    );
};

const Description = ({data}) =>{
    return (
        <div style={data.style} className={data.className}>
            <div style={{marginTop: 20,}}>{data.label}</div>
            <Handle type="target" position="top" id="t" style={HandleStyle}/>
        </div>
    );
}

const EducationChild = ({data}) =>{
    return (
        <div style={data.style} className={data.className}>
            <div>{data.label}</div>
            <Handle type="target" position="right" id="r" style={HandleStyle}/>
        </div>
    );
}



const nodeTypes = {
    Center: Center,
    Education: Education,
    Skills: Skills,
    WorkExp: WorkExp,
    Description: Description,
    EducationChild: EducationChild
};


const onLoad = (reactFlowInstance) => {
    reactFlowInstance.fitView();
    if (!isMobile) reactFlowInstance.zoomTo(1);

}


const Flow = (props) => (
    <ReactFlow onLoad={onLoad}
               elements={PresentationItems}
               style={
                   {
                       marginLeft: props.marginLeft,
                       width: props.width,
                       height: window.innerHeight - 40,
                       transition: "0.3s"
                   }
               }
               nodeTypes={nodeTypes}>
        <Background
            variant="dots"
            size={0.2}
        />
        <Controls/>
    </ReactFlow>
);

function PersonalDetailsBlock(props) {
    return (
        <div>
            <Flow marginLeft={props.marginLeft} width={props.width}/>
        </div>

    );
}

export default PersonalDetailsBlock;