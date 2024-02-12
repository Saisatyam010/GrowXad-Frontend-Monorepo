import React from 'react'

const PricingsPreview = (props) => {
  const { pricingData,setActiveStep } = props
  const keyMap = new Map()
  keyMap.set('pricingModel', "Pricing Model ")
  keyMap.set('biddingValue', 'Bidding Value')
  keyMap.set('campaignBudget', 'Campaign Budget')
  keyMap.set('frequencyClick', 'frequency Click')
  keyMap.set('dailyBudget', 'Daily Budget')
  return (
    <div className='bg-white curosr-pointer px-4 pt-2.5 pb-2 rounded-sm  border border-gray-500 hover:!border-[#71065d] bordetr-solid' onClick={()=>setActiveStep(2)}>
      <h2 className='text-[#4c4b4b] text-lg '>Pricings</h2>

      <div className='flex flex-col gap-1'>
        {pricingData &&
          Object.entries(pricingData).map(([key, value], index) => (
            <div className='flex gap-4'>
              <span className='w-[50%] text-xs text-black font-medium '>{keyMap.get(key)}: </span>
              <span className='w-[50%] text-xs text-gray-600'>{value}</span>
            </div>

          ))}

      </div>
    </div>
  )
}
export default PricingsPreview