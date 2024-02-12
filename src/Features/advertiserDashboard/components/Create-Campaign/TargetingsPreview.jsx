import React from 'react';

const TargetingsPreview = (props) => {
  const { targetingData,setActiveStep } = props;
  const keyMap = new Map();
  keyMap.set('geo', 'Geo');
  keyMap.set('os', 'Operating System');
  keyMap.set('browser', 'Browser');
  keyMap.set('connectionType', 'Connection Type');
  keyMap.set('language', 'Language');
  keyMap.set('ipRange', 'IP Range');

  console.log(props.targetingData);

  return (
    <div className='bg-white px-4 pt-2.5 pb-2 rounded-sm border border-gray-500 hover:!border-[#71065d] border-solid' onClick={()=>setActiveStep(3)}>
      <h2 className='text-[#4c4b4b] text-lg'>Targetings</h2>

      <div className='flex flex-col gap-1'>
        {targetingData &&
          Object.entries(targetingData).map(([key, value], index) => (
            <div className='flex gap-4' key={index}>
              <span className='w-[50%] text-xs text-black font-medium '>{keyMap.get(key)}: </span>
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
