import {PresentationItems} from './PresentationItems'
import React from "react";
import ReactFlow, {useStoreState, Handle} from 'react-flow-renderer';


import './PersonalDetailsBlock.css';


const ThemedHandle = (props) =>{
    return (
        <Handle
            type={props.type}
            position={props.position}
            id={props.id}
            style={{
                height: 0,
                width: 0,
            }}
        />
    )
}



const SourceLRTB = ({ data }) => {
    return (
        <div>
            <div>{data.text}</div>
            <ThemedHandle type="source" position="right" id="r"/>
            <ThemedHandle type="source" position="left" id="l"/>
            <ThemedHandle type="source" position="bottom" id="b"/>
        </div>
    );
};
const InputR = ({ data }) => {
    return (
        <div className="default-node">
            <div style={{marginTop: 10,}}>{data.label}</div>
            <ThemedHandle type="target" position="right" id="r"/>
        </div>
    );
};

const InputL = ({ data }) => {
    return (
        <div className="default-node">
            <div style={{ marginTop: 10,}}>{data.label}</div>
            <ThemedHandle type="target" position="left" id="l"/>
        </div>
    );
};

const InputT = ({ data }) => {
    return (
        <div className="default-node">
            <div style={{ marginTop: 10,}}>{data.label}</div>
            <Handle
                type="target"
                position="top"
                id="t"
                style={{
                    height: 0,
                    width: 0
                }}
            />
        </div>
    );
};

const animatedEdges = () => {
    return (
        <div className="default-edge">

        </div>
    )
}

const nodeTypes = {
    sourceLRTB: SourceLRTB,
    inputR: InputR,
    inputL: InputL,
    inputT: InputT,
};
const Flow = () => (
    <ReactFlow paneMoveable={false} zoomOnScroll={false} elements={PresentationItems} style={{ width: window.innerWidth, height: window.innerHeight-40 }} nodeTypes={nodeTypes}>
    </ReactFlow>
);

function PersonalDetailsBlock(){
    return (
        <div>
            <Flow/>
        </div>

    );
}

export default PersonalDetailsBlock;