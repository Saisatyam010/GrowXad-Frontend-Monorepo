import { ADV_API_URL } from "../utils/api";

export const createCampaign=async (data)=>{
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

