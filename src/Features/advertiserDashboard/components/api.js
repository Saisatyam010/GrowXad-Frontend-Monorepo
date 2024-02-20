export const signup  = async (data) => {
    const res = await fetch("https://growbackend-9b25ec9109f6.herokuapp.com/advertiser/advertisersignup",{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    }
    
    )
return res.json();
};