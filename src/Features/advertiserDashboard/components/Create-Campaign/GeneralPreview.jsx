import React from "react";

const GenralPreview = (props) => {
  const {generalData, setActiveStep} = props;
  const keyMap = new Map();
  keyMap.set("adFormat", "Ad Format");
  keyMap.set("destinationURL", "Destination URL");
  keyMap.set("afterVerification", "After Verification");
  keyMap.set("feed", "Feed");
  keyMap.set("creatives",'Creatives');
  keyMap.set("campaignName", "Campaign Name");
  keyMap.set("scheduledDateTime", "Scheduled DateTime");
  keyMap.set("imageSize", "Image Size");
  // keyMap.set('campaignBudget', 'Campaign Budget');

  console.log("data is very general ", generalData);
  return (
    <div className="bg-white px-4 pt-2.5 pb-2 rounded-sm border border-gray-500 hover:!border-[#71065d] border-solid" onClick={()=>setActiveStep(1)}>
      <h2 className="text-[#4c4b4b] text-lg ">General</h2>

      <div className="flex flex-col gap-1">
        {props.generalData &&
          Object.entries(generalData).map(([key, value], index) => {
            if(key === 'creatives') {
              value = value.length;
            }
            return (
              <div className="flex gap-4" key={index}>
                <span className="w-[50%] text-xs text-black font-medium">
                  {keyMap.get(key)}:
                </span>
                <span className="w-[50%] text-xs text-gray-600">
                  {typeof value === "object"
                    ? value?.map((item, idx) => (
                        <React.Fragment key={idx}>
                          <span>{item}</span>
                          {idx !== value.length - 1 && <span>,{"\u00A0"}</span>}
                        </React.Fragment>
                      ))
                    : value}
                </span>
              </div>
            );
          })}
      </div>
    </div>
  );
        
   
};
export default GenralPreview;
