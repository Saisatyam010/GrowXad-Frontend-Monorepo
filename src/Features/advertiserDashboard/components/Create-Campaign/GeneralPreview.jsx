import React from "react";

const GenralPreview = (props) => {
  const keyMap = new Map();
  keyMap.set("adFormat", "Ad Format");
  keyMap.set("destinationURL", "Destination URL");
  keyMap.set("afterVerification", "After Verification");
  keyMap.set("feed", "Feed");
  keyMap.set("campaignName", "Campaign Name");
  keyMap.set("scheduledTime", "Scheduled Time");
  keyMap.set("scheduledDate", "Scheduled Date");
  keyMap.set("imageSize", "Image Size");
  // keyMap.set('campaignBudget', 'Campaign Budget');

  console.log("data is very general ", props.generalData);
  return (
    <div className="bg-white px-4 pt-2.5 pb-1 rounded-sm border border-gray-500 border-solid">
      <h2 className="text-[#2e2d2d] text-xl font-medium">Generals</h2>

      <div className="flex flex-col gap-1">
        {props.generalData &&
          Object.entries(props.generalData).map(([key, value], index) => (
            <div className="flex gap-4" key={index}>
              <span className="w-[50%] text-xs text-black font-semibold">
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
          ))}
      </div>
    </div>
  );
};
export default GenralPreview;
