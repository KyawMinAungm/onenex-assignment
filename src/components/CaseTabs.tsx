"use client";
import { motion } from "framer-motion";



interface TabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  years: string[];
}

export default function CaseTabs({ activeTab, setActiveTab, years }: TabsProps) {
    
  return (
    <div className="flex text-gray-500 flex-wrap gap-8 mb-16 border-y border-black py-5">
      {years.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`relative   font-sharp tracking-widest uppercase transition-colors duration-300 ${
            activeTab === tab ? "text-black" : "text-gray-500 "
          }`}
        >
          {tab}
          
        </button>
      ))}
    </div>
  );
}