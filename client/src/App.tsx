import React, { useCallback, useEffect, useState } from "react";

function App() {
    const [input, setInput] = useState<string>("");
    const [output, setOutput] = useState<string>("");

    const urlPrefix = "steam://openurl/";

    useEffect(() => {
        if (output === "" && input === "") {
            console.log("ok");
            let clipboardText = "";
            navigator.clipboard.readText().then(data => {
                clipboardText = data;
                setInput(clipboardText);
                const newText = `${urlPrefix}${clipboardText}`;
                setOutput(newText);
                const outputElement = document.getElementById(
                    "output"
                ) as HTMLInputElement;
                outputElement.select();
                navigator.clipboard.writeText(newText).then();
            });
        }
    }, [output, input]);

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
                <input
                    onChange={e => setInput(e.target.value)}
                    value={input}
                    type="text"
                    id={id}
                />
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
                <input
                    onChange={e => setOutput(e.target.value)}
                    value={output}
                    type="text"
                    id={id}
                />
            </div>
        );
    }
}

export default App;
