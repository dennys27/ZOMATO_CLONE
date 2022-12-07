import React from "react";
import "./tabOptions.css";

const tabs = [
  {
    id: 1,
    name: "Delivery",
    active_img: "https://cdn-icons-png.flaticon.com/512/3063/3063822.png",
    backdrop: "FCEEC0",
    inactive_img: "https://cdn-icons-png.flaticon.com/512/3063/3063755.png",
  },

  {
    id: 2,
    name: "Dining Out",
    active_img: "https://cdn-icons-png.flaticon.com/512/2082/2082063.png",
    backdrop: "E5F3F3",
    inactive_img: "https://cdn-icons-png.flaticon.com/512/2081/2081991.png",
  },

  {
    id: 3,
    name: "Nightlife",
    active_img: "https://cdn-icons-png.flaticon.com/512/1425/1425519.png",
    backdrop: "EDf4FF",
    inactive_img: "https://cdn-icons-png.flaticon.com/512/1425/1425468.png",
  },
];

export const TabOptions = ({ activeTab, setActiveTab }) => {
  return (
    <div className="tab-options">
      <div className="max-width options-wrapper">
        {tabs.map((tab) => {
          return (
            <div key={tab.id}
              onClick={() => {
                setActiveTab(tab.name);
              }}
              className={`tab-item absolute-center cursor-pointer ${
                activeTab === tab.name && "active-tab" 
              }`}
            >
              <div
                className="tab-image-container absolute-center"
                style={{
                  backgroundColor: `${
                    activeTab === tab.name ? tab.backdrop : ""
                  }`,
                }}
              >
                <img
                  className="tab-image"
                  src={
                    activeTab === tab.name ? tab.active_img : tab.inactive_img
                  }
                  alt={tab.name}
                />
              </div>
              <div className="tab-name">{tab.name}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
