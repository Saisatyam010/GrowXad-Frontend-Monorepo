import React from 'react';

const AdvSettingsPreview = (props) => {
  const keyMap = new Map();
  keyMap.set('geo', 'Geo');
  keyMap.set('frequenctImpression', 'Frequency Impression');
  keyMap.set('cappingImpression', 'Capping Impression');
  keyMap.set('frequencyClick', 'Frequency Click');
  keyMap.set('cappingClick', 'Capping Click');
  keyMap.set('proxyFilter', 'Proxy Filter');
  keyMap.set('tracking', 'Tracking');
  keyMap.set('buyingType', 'Buying Type');

  console.log(props.advSettingData);

  return (
    <div className='bg-white px-4 pt-2.5 pb-1 rounded-sm border border-gray-500 border-solid'>
      <h2 className='text-[#2e2d2d] text-xl font-medium'>Advance Settings</h2>

      <div className='flex flex-col gap-1'>
        {props.advSettingData &&
          Object.entries(props.advSettingData).map(([key, value], index) => (
            <div className='flex gap-4' key={index}>
              <span className='w-[50%] text-xs text-black font-semibold'>{keyMap.get(key)}:</span>
              <span className='w-[50%] text-xs text-gray-600'>{value}</span>
            </div>
          ))}
      </div>
    </div>
  );
};

export default AdvSettingsPreview;
