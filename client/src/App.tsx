import React from "react";

function App() {
    return (
        <div
            style={{
                padding: "2em",
            }}
        >
            {renderInput()}
            <br />
            {renderOutput()}
        </div>
    );

    function renderInput() {
        const id = "input";
        return (
            <div>
                <label style={{ paddingRight: "1em" }} htmlFor={id}>
                    Input
                </label>
                <input type="text" id={id} />
            </div>
        );
    }

    function renderOutput() {
        const id = "output";
        return (
            <div>
                <label style={{ paddingRight: "1em" }} htmlFor={id}>
                    Output
                </label>
                <input type="text" id={id} />
            </div>
        );
    }
}

export default App;
