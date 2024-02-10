import React from 'react';

const TargetingsPreview = (props) => {
  const keyMap = new Map();
  keyMap.set('geo', 'Geo');
  keyMap.set('os', 'Operating System');
  keyMap.set('browser', 'Browser');
  keyMap.set('connectionType', 'Connection Type');
  keyMap.set('language', 'Language');
  keyMap.set('ipTargeting', 'IP Targeting');

  console.log(props.targetingData);

  return (
    <div className='bg-white px-4 pt-2.5 pb-1 rounded-sm border border-gray-500 border-solid'>
      <h2 className='text-[#2e2d2d] text-xl font-medium'>Targetings</h2>

      <div className='flex flex-col gap-1'>
        {props.targetingData &&
          Object.entries(props.targetingData).map(([key, value], index) => (
            <div className='flex gap-4' key={index}>
              <span className='w-[50%] text-xs text-black font-semibold '>{keyMap.get(key)}: </span>
              <span className='w-[50%] text-xs text-gray-600'>
  {typeof(value) === 'object' ? value.map((item, idx) => (
    <React.Fragment key={idx}>
      <span>{item}</span>
      {idx !== value.length - 1 && <span>,{'\u00A0'}</span>}
    </React.Fragment>
  )) : value}
</span>
            </div>
          ))}
      </div>
    </div>
  );
};

export default TargetingsPreview;
