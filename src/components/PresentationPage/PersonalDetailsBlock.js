import {PresentationItems} from './PresentationItems'
import React from "react";
import ReactFlow, {Controls, Handle} from 'react-flow-renderer';
import './PersonalDetailsBlock.css';

const SourceLRTB = ({ data }) => {
    return (
        <div>
            <div>{data.text}</div>
            <Handle
                type="source"
                position="bottom"
                id="b"
            />

            <Handle
                type="source"
                position="left"
                id="l"
            />

            <Handle
                type="source"
                position="right"
                id="r"
            />

            <Handle
                type="source"
                position="top"
                id="t"
            />
        </div>
    );
};
const InputR = ({ data }) => {
    return (
        <div className="default-node">
            <div style={{marginTop: 10,}}>{data.label}</div>
            <Handle
                type="target"
                position="right"
                id="r"
            />
        </div>
    );
};

const InputL = ({ data }) => {
    return (
        <div className="default-node">
            <div style={{ marginTop: 10,}}>{data.label}</div>
            <Handle
                type="target"
                position="left"
                id="l"
            />
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
            />
        </div>
    );
};


const nodeTypes = {
    sourceLRTB: SourceLRTB,
    inputR: InputR,
    inputL: InputL,
    inputT: InputT,
};

function PersonalDetailsBlock(){
    return (
        <ReactFlow paneMoveable={false} zoomOnScroll={false} elements={PresentationItems} style={{ width: "100%", height: window.innerHeight-40 }} nodeTypes={nodeTypes}/>
    );
}

export default PersonalDetailsBlock;