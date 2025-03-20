import React from 'react';

interface Tab {
  id: string;
  label: string;
}

interface TabsProps {
  tabs: Tab[];
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const CustomTabs: React.FC<TabsProps> = ({ tabs, activeTab, setActiveTab }) => {
  return (
    <div className='flex py-3 gap-3 Tabs'>
      {tabs.map((tab) => (
        <button
          key={tab.id}
          type="button"
          className={`flex items-center justify-center cursor-pointer transition-all ease-in-out py-[6px] px-[14px] rounded-[40px] text-[12px] font-[400] whitespace-nowrap ${activeTab === tab.id ? 'bg-black text-white' : 'bg-gray-200 text-gray-700'}`}
          onClick={() => setActiveTab(tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default CustomTabs;
