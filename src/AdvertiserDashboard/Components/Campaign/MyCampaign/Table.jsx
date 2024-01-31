import React, { useState, useMemo, useEffect } from "react";
import './Mycampaign.css';
import DataTable from "react-data-table-component";
import { getCampaignAPI } from "../../../../AllApi/AllAuthApi";
const Table = () => {
  const [separateCampaign, setSeparateCampaign] = useState([{}]);
 
 
  const AllSeparateCampaign = async () => {
    const res = await getCampaignAPI()
    console.log(res)

    if (res.status == "success") {
      setSeparateCampaign(res.campaigns)
    }
 

  }
  useEffect(() => {
    AllSeparateCampaign()
  }, [])


 
  return (
   <><div className=" p-4 mt-4">
    dwd
  { separateCampaign?.map((ele)=>
    
    
   ( <><h1 className="p-2  fs-3 text-black">err   ewfmewkmfkwe                     {ele?.campaignName}</h1>
   <h1 className="p-2  fs-3 text-black">err   ewfmewkmfkwe                     {ele?.campaignName}</h1>
   <h1 className="p-2  fs-3 text-black">err   ewfmewkmfkwe                     {ele?.campaignName}</h1>
   
   
   
   
   
   </>)
   
  )}
   </div>
   </>
  );
};
export default Table;










