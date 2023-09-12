"use client";

import { useState } from "react";

import { useSidebarHook } from "@/app/hooks/useSidebarHook";
import * as ScrollAra from "@radix-ui/react-scroll-area";
import * as Tabs from "@radix-ui/react-tabs";

import { TabItem } from "./TabItem";

export function SettingsTabs() {
  const { sidebarItems } = useSidebarHook();

  const [currentTab, setCurrentTab] = useState<string>(sidebarItems[0].id);

  return (
    <Tabs.Root>
      <ScrollAra.Root className="w-full" type="scroll">
        <ScrollAra.Viewport className="w-full overflow-x-scroll">
          <Tabs.List className="mt-6 flex w-full items-center gap-4 border-b border-zinc-200 dark:border-zinc-700">
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
        </ScrollAra.Viewport>

        <ScrollAra.Scrollbar
          orientation="horizontal"
          className="flex h-0.5 translate-y-1.5 touch-none select-none flex-col bg-zinc-100"
        >
          <ScrollAra.Thumb className="relative flex-1 rounded-lg bg-zinc-300" />
        </ScrollAra.Scrollbar>
      </ScrollAra.Root>
    </Tabs.Root>
  );
}
