import { useState } from 'react'
import './App.css'

import CardName from './components/CardName'

const randomInt = (min:number, max:number) => Math.floor(Math.random() * (max - min + 1)) + min;

function findClosest(arr:number[],  target:number)
{
  let n = arr.length;

  if (target <= arr[0])
    return 0;

  if (target >= arr[n-1])
    return n-1;

  let i = 0, j = n, mid= 0;

  while(i<j)
  {

    mid = Math.floor((i+j) / 2);

    if (arr[mid] == target)
      return mid;

    if (target < arr[mid]){
      if (mid>0 && target>arr[mid-1])
        return getClosest(mid - 1,
                          mid, target, arr);
      j = mid
    }
    else
    {
      if (mid < n - 1 && target < arr[mid+1])
        return getClosest(mid, mid+1, target, arr);
      i = mid + 1;
    }
  }

  return mid;
}

function getClosest(curr_element:number,
                    next_element:number,
                    target:number, arr:number[]){
  let val1 = arr[curr_element]
  let val2 = arr[next_element]

  if (Math.abs(val1-target) > Math.abs(val2 - target))
  {
    return next_element 
  }
  else{
    return curr_element 
  }
}


function App() {
  const minRange = 1
  const maxRange = 10
  const namesArray = ["Sam","Kenny", "Alexander"]

  const [randomState, setRandomState] = useState(1)
  const [selectedName, setSelectedNameState] = useState(0)

  const lenLetters = namesArray.map((name)=>(name.length)) 

  const updateRandomState = () =>{
    const randomNumber = randomInt(minRange, maxRange) 
    const closestName = findClosest(lenLetters, randomNumber) 
    setRandomState(randomNumber)
    setSelectedNameState(closestName)
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

export default App
