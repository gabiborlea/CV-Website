import React from 'react';
import {MenuItems} from './MenuItems'
import {FaBars} from 'react-icons/fa';
import {AiOutlineClose} from 'react-icons/ai';
import './NavBar.css'
import {useStoreState, useZoomPanHelper} from "react-flow-renderer";
import {isMobile} from "react-device-detect";

function NavBar(props) {
        const {transform} = useZoomPanHelper();
        const nodes = useStoreState((store) => store.nodes);

        const GetNodeById = (id) => {
            for (const node of nodes){
                if (node.id === id)
                    return node;
            }
        }

        const ToNode = (id, props) => {
            const node = GetNodeById(id);
            let zoom = 1;
            let plus= 0;
            if (isMobile) {
                props.onClose()
                zoom = 1;
                plus = node.__rf.width/2;
            }
            const x = - node.__rf.position.x + window.innerWidth/2 - node.__rf.width;
            const y = -node.__rf.position.y + window.innerHeight/2 - node.__rf.height+5;
            transform({x:x+plus, y:y , zoom:zoom})
        }
        return (
            <>
                <div className='navbar' >
                    <div onClick={props.onOpen} className='open-button'>

                        <FaBars />
                    </div>
                    <h1>Gabriel Borlea</h1>
                </div>
                <nav className={props.sidebar ? 'nav-menu active' : 'nav-menu'} >
                    <ul className='nav-menu-items'>
                        <li className='navbar-toggle'>
                            <span className="close-button" onClick={props.onClose}>
                                <AiOutlineClose color='white' />
                            </span>
                        </li>
                        {MenuItems.map((item, index) =>{
                            return (
                                <button
                                    key={index}
                                    className={item.classN}
                                    onClick={()=>ToNode(item.id, props)}>
                                    <span>{item.title}</span>
                                </button>
                            )
                        })}
                    </ul>
                </nav>
            </>
        )
}
export default NavBar;