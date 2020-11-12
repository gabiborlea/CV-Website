import './PersonalDetailsBlock.css'

const name = process.env.PUBLIC_URL + '/PersonalPhoto.jpg'

const centerPosition = {
    x: window.innerWidth/2-100,
    y: window.innerHeight/2-200
}

export let PresentationItems = [
    { id: '1', data: { style:{backgroundImage: `url(${name})`}, className: "center-node"},
        position: { x: centerPosition.x, y: centerPosition.y }, connectable: false,
        type: 'sourceLRTB',
    },
    { id: '2', data: { label: 'Work Experience', className: "default-node" }, position: { x: centerPosition.x+100, y: centerPosition.y+300 }, type: 'inputT'
    },
    { id: '3', data: { label: 'Education', className: "default-node" }, position: {  x: centerPosition.x-200, y: centerPosition.y+100 }, type: 'inputR',
    },
    { id: '4', data: { label: 'Skills', className: "default-node" }, position: { x: centerPosition.x+300, y: centerPosition.y-50 }, type: 'inputL',
    },
    { id: 'e1-2', source: '1', target: '2', sourceHandle:'b', targetHandle:'t', animated: true, arrowHeadType:'arrowclosed' },
    { id: 'e1-3', source: '1', target: '3', sourceHandle:'l', targetHandle:'r', animated: true, arrowHeadType:'arrowclosed'},
    { id: 'e1-4', source: '1', target: '4', sourceHandle:'r', targetHandle:'l', animated: true, arrowHeadType:'arrowclosed' },
];
