import React from 'react';
import { useState, useCallback, useEffect, useRef } from "react"

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  //useRef Hook
  const passwordRef = useRef(null);


  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*()_+<>?"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);

    }
    setPassword(pass)

  }, [length, numberAllowed, charAllowed, setPassword])

  const toClipboard = useCallback(() => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0, length)
    window.navigator.clipboard.writeText(password);

  }, [password])
  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, setPassword])


  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700 text-center'>Password generator
        <div className="flex shadow rounded-lg overflow-hidden mb-4 "><input
          type="text"
          className="outline-none w-full py-1 px-3"
          placeholder='password'
          value={password}
          readOnly
          ref={passwordRef}
        />
          <button
            onClick={toClipboard}
            className="outline-none bg-blue-700 text-white px-3 py-0.3 shrink-0">
            copy</button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => { setLength(Number(e.target.value)) }}
            />
            <label>length:{length}</label>

          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev)
              }}
            />
            <label htmlFor="">Numbers</label>

          </div>
          <div>
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                setCharAllowed((prev) => !prev)
              }}
            />
            <label htmlFor="">Characters</label>

          </div>

        </div>
      </div>

    </>
  )

}

export default App

