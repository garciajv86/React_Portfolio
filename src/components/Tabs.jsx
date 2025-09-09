import { useState } from "react";

//* Tabs for my about me page that create a responsive effect! 
function Tabs() {
  const [activeTab, setActiveTab] = useState("skills");

  const openTab = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="tabs">
      <div className="tab-titles">
        {tabLinks.map((tabLink, index) => (
          <p
            key={index}
            className={`tab-links ${
              activeTab === tabLink ? "active-link" : ""
            }`}
            onClick={() => openTab(tabLink)}
          >
            {tabLink}
          </p>
        ))}
      </div>
      <div className="tab-contents">
        {tabContents.map((tabContent, index) => (
          <div
            key={index}
            className={`tab-content ${
              activeTab === tabContent.name ? "active-tab" : ""
            }`}
            id={tabContent.name}
          >
            {tabContent.content}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tabs;
