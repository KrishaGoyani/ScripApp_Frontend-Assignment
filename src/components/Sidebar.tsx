"use client";

import { useState } from "react";

interface SidebarItem {
  title: string;
  checkboxes: string[];
}

interface SidebarProps {
  items: SidebarItem[];
}

const Sidebar: React.FC<SidebarProps> = ({ items }) => {
  const [expandedItems, setExpandedItems] = useState<Set<number>>(new Set());

  const [checkedItems, setCheckedItems] = useState<{ [key: string]: boolean }>(
    {}
  );

  const handleCheckboxChange = (name: string) => {
    setCheckedItems((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  const uncheckAll = (item: SidebarItem) => {
    const updated = { ...checkedItems };
    item.checkboxes.forEach((checkbox) => {
      updated[checkbox] = false;
    });
    setCheckedItems(updated);
  };


  const toggleItem = (index: number) => {
    setExpandedItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index); // Removes the item
      } else {
        newSet.add(index); // Adds the item
      }
      return newSet;
    });
  };

  return (
    <div className="sidebar">
      <label className="sidebarTitle">
        <input style={{ marginRight: "10px" }} type="checkbox" />
        CUSTOMIZABLE
      </label>
      {items.map((item, index) => (
        <div key={index} className="sidebarItem">
          <h3 className="sidebarTitle" onClick={() => toggleItem(index)}>
            {item.title}
          </h3>
          <p style={{ fontSize: "14px", marginBottom: "1rem" }}>All</p>

          {expandedItems.has(index) && (
            <>
              <a
                href="javascript:void(0)"
                onClick={(e) => {
                  e.preventDefault();
                  uncheckAll(item);
                }}
                style={{
                  color: "GrayText",
                  textDecoration: "underline",
                }}
              >
                Unselect all
              </a>
              <ul className="checkboxList">
                {item.checkboxes.map((checkbox, checkboxIndex) => (
                  <li key={checkboxIndex} className="checkboxItem">
                    <label>
                      <input
                        type="checkbox"
                        className="checkbox"
                        checked={checkedItems[checkbox] || false}
                        onChange={() => handleCheckboxChange(checkbox)}
                      />
                      {checkbox}
                    </label>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
