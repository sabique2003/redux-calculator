import React, { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { setCalculator,evaluateCalculator,clearCalculator } from './Redux/calcSlice'

function Calc(){
  // const calculator= useSelector((state)=>state.calculator.calculator)
  const result=useSelector((state)=>state.calculator.result)
  const dispatch=useDispatch();
  const [input,setInput]=useState('')

  const handleCalculator=()=>{
    dispatch(setCalculator(input))
    dispatch(evaluateCalculator())
  }
  const handleClear=()=>{
    dispatch(clearCalculator())
  }
  return (
    <>
    <div className="d-flex align-items-center justify-content-center" style={{height:"80vh"}}>
        <div className="w-75 border border-2 border-light p-4">
            <h2 className='text-center text-warning'>CALCULATOR</h2>
            <div className='d-flex align-items-center justify-content-center'>
            <input type="text" value={input} onChange={(e)=>setInput(e.target.value)}className='form-control w-75 mt-3' placeholder='Enter an Expression'/>
            </div>
            <div className="d-flex justify-content-center mt-4">
                <button onClick={handleCalculator} className='btn btn-success me-3'>Calculate</button>
                <button onClick={handleClear} className='btn btn-danger'>Clear</button>
            </div>
            {result!==null &&
            <h2 className='text-center text-light mt-4'>{result}</h2>
            }
        </div>
    </div>
    </>
  )
}

export default Calc