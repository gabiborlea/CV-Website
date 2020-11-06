import './PersonalDetailsBlock.css'

const name = process.env.PUBLIC_URL + '/PersonalPhoto.jpg'



export let PresentationItems = [
    { id: '1', data: { label:''}, position: { x: window.innerWidth/2-100, y: window.innerHeight/2-200 }, style: {
            width: "200px",
            height: "200px",
            borderRadius: "50%",
            backgroundImage: `url(${name})`,},
        connectable: false,
        type: 'sourceLRTB',
    },
    { id: '2', data: { label: 'Work Experience' }, position: { x: 950, y: 600 }, type: 'inputT'
    },
    { id: '3', data: { label: 'Education' }, position: { x: 100, y: 100 }, type: 'inputR'
    },
    { id: '4', data: { label: 'Skills' }, position: { x: 1400, y: 187 }, type: 'inputL',
    },
    { id: 'e1-2', source: '1', target: '2', sourceHandle:'b', targetHandle:'t', animated: true, arrowHeadType:'arrowclosed' },
    { id: 'e1-3', source: '1', target: '3', sourceHandle:'l', targetHandle:'r', animated: true, arrowHeadType:'arrowclosed'},
    { id: 'e1-4', source: '1', target: '4', sourceHandle:'r', targetHandle:'l', animated: true, arrowHeadType:'arrowclosed' },
];
