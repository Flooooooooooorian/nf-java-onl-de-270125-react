import {useState} from "react";

export default function Counter() {
    console.log("render Counter")

    const [counter, setCounter] = useState<number>(0)
    const [input, setInput] = useState<string>("Text")

    // let counter = 0;

    if (counter >= 10) {
        return (
            <p>Achtung du bist schon über 10</p>
        )
    }

    return (
        <div>
            {counter % 2 === 0 && <p>Counter: {counter}</p>}
            {counter % 2 !== 0 && <p>NICHT: {counter}</p>}

            {counter % 3 === 0
                ? <p>
                    IST TEILBAR DURCH 3
                </p>
                : <p>
                    IST NICHT TEILBAR DURCH 3
                </p>}

            <button onClick={() => setCounter(counter + 1)}>
                Counter
            </button>

            <p>{input}</p>

            <input value={input}
                   onChange={(currywurst) => {
                       setInput(currywurst.target.value)
                   }}/>

            <button>Save</button>
        </div>
    )
}
