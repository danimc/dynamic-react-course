import { useEffect, useState } from 'react'

import CardName from '../CardName'

export default function MainPage(){

    const MINIMUN_RANGE = 1
    const MAXIMUN_RANGE = 10

    const [selectedName, setSelectedNameState] = useState(0)
    const [randomState, setRandomState] = useState(1)

    const namesArray = ["Sam","Kenny", "Alexander"]
    const lenLetters = namesArray.map((name)=>(name.length))

    const randomInt = (min:number, max:number) => Math.floor(Math.random() * (max - min + 1)) + min;

    function findClosest(arr:number[],  target:number)
    {
        const n = arr.length;

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
                            target:number, arr:number[])
    {
        const val1 = arr[curr_element]
        const val2 = arr[next_element]

        if (Math.abs(val1-target) > Math.abs(val2 - target))
        {
            return next_element 
        }
        else{
            return curr_element 
        }
    }


    const updateRandomState = () =>
    {
        const randomNumber = randomInt(MINIMUN_RANGE, MAXIMUN_RANGE) 
        const closestName = findClosest(lenLetters, randomNumber) 
        setRandomState(randomNumber)
        setSelectedNameState(closestName)
    }

    useEffect(()=>{
        updateRandomState()
    })

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