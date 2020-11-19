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
            height: window.innerHeight,
            width: window.innerWidth

        }
        this.updateDimensions = this.updateDimensions.bind(this);
    }

    componentDidMount() {
        console.log(this.state.height);
        window.addEventListener("resize", this.updateDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions);
    }

    updateDimensions() {
        this.setState({
            height: window.innerHeight,
            width: window.innerWidth,
            mapWidth: window.mobileCheck()? window.innerWidth: window.innerWidth-200
        });
        console.log(this.state.height, this.state.width)
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
                        menuHeight={this.state.height}
                        barWidth={this.state.width}
                        />
                    <PersonalDetailsBlock marginLeft={this.state.mapMarginLeft} width={this.state.mapWidth}/>
                </ReactFlowProvider>

            </div>
        );
    }
}

export default App;
