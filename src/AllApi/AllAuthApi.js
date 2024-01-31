import { Main_URL } from "../MainUrl/MainUrl";

export const AdvertiserUserSignup = async (data) => {
  const res = await fetch(`${Main_URL}/auth/advertisersignup`, {
    method: "post",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return await res.json();
};

export const AdvertiserUserLogin = async (data) => {
  const res = await fetch(`${Main_URL}/auth/advertiserlogin`, {
    method: "post",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return await res.json();
};

// Publisher Auth Api
export const PublisherUserSignup = async (data) => {
  const res = await fetch(`${Main_URL}/auth/publishersignup`, {
    method: "post",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return await res.json();
};

export const PublisherUserLogin = async (data) => {
  const res = await fetch(`${Main_URL}/auth/publisherlogin`, {
    method: "post",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return await res.json();
};

// Publisher Auth Api

// Affiliates Auth Api
export const AffiliateUserSignup = async (data) => {
  const res = await fetch(`${Main_URL}/auth/affiliatesignup`, {
    method: "post",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return await res.json();
};

export const AffiliateUserLogin = async (data) => {
  const res = await fetch(`${Main_URL}/auth/affiliatelogin`, {
    method: "post",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return await res.json();
};

// Affiliates Auth Api
export const CreateCampaignAPI = async (updateData) => {
  console.log(updateData, "updateData");
  const formData = new FormData();
  Object.keys(updateData).forEach((key) => {
    if (key === "createcampaign_images") {
      updateData[key].forEach((image, index) => {
        formData.append(`createcampaign_images`, image);
      });
    } else {
      formData.append(key, updateData[key]);
    }
  });

  // updateData.campaign_images.forEach((image, index) => {
  //     formData.append(`campaign_images`, image);})

  try {
    const userToken = JSON.parse(localStorage.getItem("user")).token;
    console.log(userToken, "userToken");
    const res = await fetch(`${Main_URL}/auth/createcampaign`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
      body: formData,
    });

    return await res.json();
  } catch (error) {
    console.error("Error in CreateCampaignAPI:", error);
  }
};
export const updateCampain = async (id, data) => {
  const userToken = JSON.parse(localStorage.getItem("user")).token;
  const res = await fetch(`${Main_URL}/auth/updatecampaigns/${id}`, {
    method: "Put",
    headers: {
      Authorization: `Bearer ${userToken}`,
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return res.json();
};

export const getCampaignAPI = async () => {
  try {
    const userToken = JSON.parse(localStorage.getItem("user")).token;

    const res = await fetch(`${Main_URL}/auth/getcampaignbyuser`, {
      method: "Get",
      headers: {
        Authorization: `Bearer ${userToken}`,
        "Content-type": "application/json",
      },
      body: JSON.stringify(),
    });
    console.log(res)

    return await res.json();
  } catch (error) {
    console.log(error);
  }
};

export const deleteCampaignAPI = async (campaignId) => {
  try {
    console.log(campaignId);
    const userToken = JSON.parse(localStorage.getItem("user")).token;

    const res = await fetch(`${Main_URL}/auth/deletecampaigns/${campaignId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${userToken}`,
        "Content-type": "application/json",
      },
    });

    return await res.json();
  } catch (error) {
    console.log(error);
  }
};

// getcampaignbyuser
// Targeting Auth
export const TargetingAuth = async (data) => {
  console.log(data);
  const res = await fetch(`${Main_URL}/targeting/targetingCampaign`, {
    method: "post",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return await res.json();
};

export const CappingAndLimit = async (data) => {
  console.log(data);
  const res = await fetch(`${Main_URL}/cappingandlimits/cappingandlimits`, {
    method: "post",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return await res.json();
};

// /advancesettings/advancesettings

export const AdvanceSettingAPI = async (data) => {
  console.log(data);
  const res = await fetch(`${Main_URL}/advancesettings/advancesettings`, {
    method: "post",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return await res.json();
};



export const getWalletBalance = async () => {
  try {
    const userToken = JSON.parse(localStorage.getItem("user")).token;
    const userID = JSON.parse(localStorage.getItem("user")).data.id;

    console.log(`usertoken is ${userToken}`);
    console.log(`userID is ${userID}`);

    // const res = await fetch(`${Main_URL}/auth/getcampaignbyuser`, {
    const res = await fetch(`${Main_URL}/auth/getallAmmount/${userID}`, {
      method: "Get",
      headers: {
        Authorization: `Bearer ${userToken}`,
        "Content-type": "application/json",
      },
      body: JSON.stringify(),
    });
    console.log(res)

    return await res.json();
  } catch (error) {
    console.log(error);
  }
};


