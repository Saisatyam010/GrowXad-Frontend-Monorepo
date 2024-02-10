import React from 'react'

const PricingsPreview = (props) => {
  const keyMap = new Map(
 
  )
  keyMap.set('pricingModel', "Pricing Model ")
  keyMap.set('biddingValue', 'Bidding Value')
  keyMap.set('campaignBudget', 'Campaign Budget')
  keyMap.set('frequencyClick', 'frequency Click')
  keyMap.set('dailyBudget', 'Daily Budget')
  return (
    <div className='bg-white px-4 pt-2.5 pb-1 rounded-sm  border border-gray-500 bordetr-solid'>
      <h2 className='text-[#2e2d2d] text-xl font-medium '>Pricing & Capping</h2>

      <div className='flex flex-col gap-1'>
        {props.pricingData &&
          Object.entries(props.pricingData).map(([key, value], index) => (
            <div className='flex gap-4'>
              <span className='w-[50%] text-xs text-black font-semibold '>{keyMap.get(key)}: </span>
              <span className='w-[50%] text-xs text-gray-600'>{value}</span>
            </div>

          ))}

      </div>
    </div>
  )
}
export default PricingsPreview