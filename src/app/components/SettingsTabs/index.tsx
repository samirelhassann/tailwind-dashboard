"use client";

import { useState } from "react";

import { useSidebarHook } from "@/app/hooks/useSidebarHook";
import * as Tabs from "@radix-ui/react-tabs";

import { TabItem } from "./TabItem";

export function SettingsTabs() {
  const { sidebarItems } = useSidebarHook();

  const [currentTab, setCurrentTab] = useState<string>(sidebarItems[0].id);

  return (
    <Tabs.Root>
      <Tabs.List className="mt-6 flex w-full items-center gap-4 border-b border-zinc-200">
        {sidebarItems.map((item) => (
          <TabItem
            value={item.id}
            title={item.title}
            key={item.id}
            onClickAction={(value) => setCurrentTab(value)}
            isSelected={currentTab === item.id}
          />
        ))}
      </Tabs.List>
    </Tabs.Root>
  );
}
