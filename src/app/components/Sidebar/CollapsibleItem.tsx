"use client";

import React, { ElementType } from "react";

import { ChevronDown } from "lucide-react";

import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";

interface CollapsibleItemProps {
  title: string;
  icon: ElementType;
  subItems?: { title: string; href: string }[];
}

export function CollapsibleItem({
  title,
  icon: Icon,
  subItems,
}: CollapsibleItemProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  const showList = isOpen && !!subItems;

  return (
    <CollapsiblePrimitive.Root open={isOpen} onOpenChange={setIsOpen}>
      <CollapsiblePrimitive.Trigger
        className="group flex w-full items-center gap-4 rounded-md p-2 hover:bg-violet-50 hover:text-purple-500 data-[selected=true]:bg-violet-50"
        data-selected={isOpen}
      >
        <Icon className="h-5 w-5 text-zinc-700" />
        <span className="font-medium text-zinc-700 group-hover:text-purple-500">
          {title}
        </span>
        {subItems && subItems.length > 0 && (
          <ChevronDown
            className="ml-auto text-zinc-400 duration-300 ease-in-out data-[selected=true]:rotate-180"
            data-selected={showList}
          />
        )}
      </CollapsiblePrimitive.Trigger>
      <CollapsiblePrimitive.Content
        className="ml-10 mt-4 flex flex-col space-y-4 data-[selected=true]:mb-5"
        data-selected={showList}
      >
        {subItems?.map((item) => (
          <div
            key="title"
            className="cursor-pointer text-zinc-500 hover:text-purple-500"
          >
            {item.title}
          </div>
        ))}
      </CollapsiblePrimitive.Content>
    </CollapsiblePrimitive.Root>
  );
}
