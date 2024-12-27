"use client";

import Sidebar from "./Sidebar";
import ProductGrid, { type ProductData } from "./ProductGrid";
import { useState } from "react";
import { Check, ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import MaxwidthWrapper from "./MaxwidthWrapper";

const options = [
  "RECOMMENDED",
  "NEWEST FIRST",
  "POPULAR",
  "PRICE: HIGH TO LOW",
  "PRICE LOW TO HIGH",
];

const Hero = ({ productData }: { productData: ProductData[] }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const sidebarItems = [
    {
      title: "IDEAL FOR",
      checkboxes: ["Option 1", "Option 2", "Option 3"],
    },
    {
      title: "OCCASION",
      checkboxes: ["Option A", "Option B", "Option C"],
    },
    {
      title: "WORK",
      checkboxes: ["Item X", "Item Y", "Item Z"],
    },
    {
      title: "FABRIC",
      checkboxes: ["Item X", "Item Y", "Item Z"],
    },
    {
      title: "SEGMENT",
      checkboxes: ["Item X", "Item Y", "Item Z"],
    },
    {
      title: "SUITABLE FOR",
      checkboxes: ["Item X", "Item Y", "Item Z"],
    },
    {
      title: "RAW MATERIALS",
      checkboxes: ["Item X", "Item Y", "Item Z"],
    },
    {
      title: "PATTERN",
      checkboxes: ["Item X", "Item Y", "Item Z"],
    },
  ];

  return (
    <MaxwidthWrapper>
      <div className="info">
        <div className="info-1">
          <p style={{ fontWeight: "bold", fontSize: "18px" }}>3425 items</p>
          <a
            className="toggle-btn"
            style={{ color: "grey", textDecoration: "underline" }}
            onClick={toggleSidebar}
          >
            {isSidebarOpen ? (
              <div style={{ display: "flex", gap: "1px" }}>
                <ChevronLeft style={{ width: "22px", height: "22px" }} />
                <p style={{ fontSize: "18px" }}>HIDE FILTER</p>
              </div>
            ) : (
              <div style={{ display: "flex", gap: "1px" }}>
                <ChevronRight style={{ width: "22px", height: "22px" }} />
                <p style={{ fontSize: "18px" }}>SHOW FILTER</p>
              </div>
            )}
          </a>
        </div>
        <div className="mobile-info">
          <h3>FILTERS</h3>
        </div>
        <span className="separator" />
        <div className="sm">
          <button onClick={toggleDropdown} className="dropdown-button">
            <span className="dropdown-title">{selectedOption}</span>
            <div className={`dropdown-icon ${isOpen ? "open" : ""}`}>
              <ChevronDown style={{ width: "25px", height: "25px" }} />
            </div>
          </button>
          {isOpen && (
            <ul className="dropdown-menu">
              {options.map((option) => (
                <li
                  key={option}
                  onClick={() => handleOptionClick(option)}
                  className="dropdown-option"
                >
                  {selectedOption === option && (
                    <Check className="check-icon" />
                  )}
                  {option}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <div className="app">
        {isSidebarOpen && <Sidebar items={sidebarItems} />}
        <div
          className={`content ${isSidebarOpen ? "with-sidebar" : "full-width"}`}
        >
          <ProductGrid
            isSidebarOpen={isSidebarOpen}
            productData={productData}
          />
        </div>
      </div>
    </MaxwidthWrapper>
  );
};

export default Hero;
