import './App.css';
import React from "react";
import NavBar from './components/NavBar/NavBar'
import PersonalDetailsBlock from './components/PresentationPage/PersonalDetailsBlock'
import {ReactFlowProvider} from "react-flow-renderer";

class App extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            menuOpened: !window.mobileCheck(),
            mapMarginLeft: window.mobileCheck()? "0px": "200px",
            mapWidth: window.mobileCheck()? window.innerWidth: window.innerWidth-200,

        }
    }

    handleOpenMenu() {
        this.setState({
            menuOpened: true,
            mapMarginLeft: "200px",
            mapWidth: window.innerWidth - 200,
        })
    }

    handleCloseMenu() {
        this.setState({
            menuOpened: false,
            mapMarginLeft: "0px",
            mapWidth: window.innerWidth,
        })

    }



    render() {
        return (
            <div className="App">
                <ReactFlowProvider>
                    <NavBar
                        onOpen={() => this.handleOpenMenu()}
                        onClose={() => this.handleCloseMenu()}
                        sidebar ={this.state.menuOpened}
                        />
                    <PersonalDetailsBlock marginLeft={this.state.mapMarginLeft} width={this.state.mapWidth}/>
                </ReactFlowProvider>

            </div>
        );
    }
}

export default App;
