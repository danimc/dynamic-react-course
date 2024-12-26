import { useEffect, useState } from 'react'

import CardName from '../CardName'
import {useFindClosest} from '../../hooks/useFindClosest'

export default function MainPage(){

    const [selectedName, setSelectedNameState] = useState(0)
    const [randomState, setRandomState] = useState(1)

    const namesArray = ["Sam","Kenny", "Alexander"]
    const lenLetters = namesArray.map((name)=>(name.length))


    const { findClosestIndex} = useFindClosest()

    const updateRandomState = () =>
    {
        const {closestIndex, seed} = findClosestIndex(lenLetters)
        setRandomState(seed)
        setSelectedNameState(closestIndex)
    }

    return (
      <div className="flex justify-center items-center bg-gray-100 h-screen">
        <div className="flex flex-wrap justify-center gap-4 w-full text-center">
          <div className="columns-1 space-y-2">
            {namesArray.map((name, index)=>(
              <CardName name={name} isSelected={index==selectedName}/>
            ))}
            <button onClick={updateRandomState} className='bg-green-700 text-white rounded-lg p-6 hover:bg-green-600'>
              Generate Random Number: {randomState}
            </button>
          </div>
        </div>
      </div>
    )
}