import React from "react";

const styles = {
    jumbotron:{
        textAlign: "center"
    }
}

function Jumbotron() {
    return (
        <div class="jumbotron jumbotron-fluid">
            <div class="container" style={styles.jumbotron}>
                <h1 class="display-4">Clicky Game</h1>
                <h2 class="lead">Click on an image to earn points, but don't click on any more than once!</h2>
            </div>
        </div>
    );
}

export default Jumbotron;