import React from "react";

class Header extends React.Component {
    headerStyle = {
        padding:"20px 0",
        lineHeight:"1.5em"
    }
    render (){
        return (
            <header style={this.headerStyle}>
                <h1 style={{
                    fontSize:"6rem",
                    fontWeight:"600",
                    marginBottom:"2rem",
                    lineHeight: "1em",
                    color: "#ececec",
                    textTransform: "lowercase",
                    textAlign: "center"
                }}>Todos</h1>
            </header>
        )
    }
}

export default Header