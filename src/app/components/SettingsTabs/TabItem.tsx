"use client";

import * as Tabs from "@radix-ui/react-tabs";

interface TabItemProps {
  value: string;
  title: string;
  isSelected?: boolean;
  onClickAction: (value: string) => void;
}

export function TabItem({
  value,
  title,
  isSelected = false,
  onClickAction,
}: TabItemProps) {
  const handleOnClick = () => {
    onClickAction(value);
  };

  return (
    <Tabs.Trigger
      value={value}
      className="group px-1 pb-4 text-sm font-medium text-zinc-500 outline-none data-[isSelected=true]:border-b-2 data-[isSelected=true]:border-violet-700 hover:text-violet-700 dark:text-zinc-400 dark:data-[isSelected=true]:border-violet-300 dark:hover:text-violet-300"
      data-isSelected={isSelected}
      onClick={handleOnClick}
    >
      <span className="whitespace-nowrap rounded group-focus-visible:ring-2 group-focus-visible:ring-violet-400 group-focus-visible:ring-offset-4 group-data-[isSelected=true]:text-violet-700 dark:group-data-[isSelected=true]:text-violet-300">
        {title}
      </span>
    </Tabs.Trigger>
  );
}
