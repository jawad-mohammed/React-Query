import React from 'react'
// import { useContext } from 'react'
import {NameContext} from '../App'
const CompC = () => {



  return (
    <>CompC
    <NameContext.Consumer>
    {(myName)=>{
        return(<h4>{myName}</h4>)
    }}
    </NameContext.Consumer>
    



    </>
  )
}

export default CompC