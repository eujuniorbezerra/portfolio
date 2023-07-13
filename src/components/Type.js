import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

const MyComponent = () => {

    const [text1] = useTypewriter({
        words: ["printf(\"Hello World👋\");"],
        loop: false,
        onLoopDone: () => console.log(`loop completed after 3 runs.`)
      })

    const [text2] = useTypewriter({
        words: ["Front-End Developer."],
        loop: false,
        onLoopDone: () => console.log(`loop completed after 3 runs.`)
     })

  return (

    <>
        <div className="hello">
            <span className="fs-3 fw-bold">{text1}</span>
            <Cursor cursorColor="white" />
        </div>

        <div className="stack">
                <span className="fs-3 fw-bold">{text2}</span>
                <Cursor cursorColor="white" />
        </div>
    </>
  )
}

export default MyComponent