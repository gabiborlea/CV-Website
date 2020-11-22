import './PersonalDetailsBlock.css'
import React from "react";

const name = process.env.PUBLIC_URL + '/PersonalPhoto.jpg'

const centerPosition = {
    x: window.innerWidth / 2 - 100,
    y: window.innerHeight / 2 - 200
}


export let PresentationItems = [
    {
        id: '1', data: {style: {backgroundImage: `url(${name})`}, className: "center-node"},
        position: {x: centerPosition.x, y: centerPosition.y}, connectable: false,
        type: 'Center',
    },
    {
        id: '2',
        data: {label: 'Work Experience', className: "category-node", style: {width:100, height:100}},
        position: {x: centerPosition.x, y: centerPosition.y - 200},
        type: 'WorkExp'
    },
    {
        id: '3',
        data: {label: 'Education', className: "category-node", style: {width:100, height:100}},
        position: {x: centerPosition.x - 200, y: centerPosition.y + 100},
        type: 'Education',
    },
    {
        id: '4',
        data: {label: 'Skills', className: "category-node", style: {width: 100, height: 100}},
        position: {x: centerPosition.x + 300, y: centerPosition.y - 50},
        type: 'Skills',
    },

    {
        id: '5',
        data: {
            label: <div><p>Computer Science Student</p><p>Cluj-Napoca Romania</p></div>,
            className: "category-node",
            style: {width: 150, height: 150}
        },
        position: {x: centerPosition.x + 25, y: centerPosition.y + 250},
        type: 'Description',

    },

    {
        id: '6',
        data: {
            label: <div style={{marginTop: 10,}}>
                <p>Babes-Bolyai University</p>
                <p>Bachelor's degree, Computer Science</p>
                <p>2019-2022</p>
            </div>,
            className: "category-node description-node",
            style: {width:150, height:150}
        },
        position: {x: centerPosition.x - 600, y: centerPosition.y - 100},
        type: 'EducationChild',
    },

    {
        id: '7',
        data: {
            label: <div style={{marginTop: 15,}}>
                <p>Silvania National College, Zalau</p>
                <p>High School Diploma</p>
                <p>Math-CS</p>
                <p>2015-2019</p>
            </div>,
            className: "category-node description-node",
            style: {width:160, height:160}
        },
        position: {x: centerPosition.x - 600, y: centerPosition.y +200},
        type: 'EducationChild',
    },


    {
        id: 'e1-2',
        source: '1',
        target: '2',
        sourceHandle: 't',
        targetHandle: 'b',
        animated: true,
        arrowHeadType: 'arrowclosed'
    },
    {
        id: 'e1-3',
        source: '1',
        target: '3',
        sourceHandle: 'l',
        targetHandle: 'r',
        animated: true,
        arrowHeadType: 'arrowclosed'
    },
    {
        id: 'e1-4',
        source: '1',
        target: '4',
        sourceHandle: 'r',
        targetHandle: 'l',
        animated: true,
        arrowHeadType: 'arrowclosed'
    },

    {
        id: 'e1-5',
        source: '1',
        target: '5',
        sourceHandle: 'b',
        targetHandle: 't',
        animated: true,
        arrowHeadType: 'arrowclosed'
    },

    {
        id: 'e3-6',
        source: '3',
        target: '6',
        sourceHandle: 'l',
        targetHandle: 'l',
        animated: true,
        arrowHeadType: 'arrowclosed'
    },

    {
        id: 'e3-7',
        source: '3',
        target: '7',
        sourceHandle: 'l',
        targetHandle: 'l',
        animated: true,
        arrowHeadType: 'arrowclosed'
    },
];
