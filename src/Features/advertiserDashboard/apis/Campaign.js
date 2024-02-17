import { ADV_API_URL } from "../utils/api";

export const createCampaign=async (data)=>{
    const formData = new FormData();
    Object.keys(data).map((key) => {
        if (key === "general") {
            const {creatives,...rest}=data[key];
            formData.append("general", JSON.stringify(rest));
            formData.append('creatives',creatives);
        }
         else {
          formData.append(key, JSON.stringify(data[key]));
        }
      });
    const response=await fetch(`${ADV_API_URL}/create-campaign`,{
        method:'POST',
        headers:{
            'Content-Type':'application/json',
            'Authorization':`Bearer ${localStorage.getItem('token')}`
       },
       body:JSON.stringify(data)
});
    return response.data;
}




export const allCampaignDetail = async ()=>{
    const res = await fetch(`${ADV_API_URL}/findCampaign`,{
        method:"Get",
        headers:{
            "content-Type":"application/json",
            'Authorization':`Bearer ${localStorage.getItem('token')}`
        },
        body:JSON.stringify()
    })
    return res.json()
}