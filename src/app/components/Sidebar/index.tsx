"use client";

import React from "react";

import { Cog, LifeBuoy, Search } from "lucide-react";

import { Logo } from "@/app/assets/Logo";
import { useNavigationHook } from "@/app/hooks/useNavigationHook";

import Input from "../Input";
import { CollapsibleItem } from "./CollapsibleItem";
import { Profile } from "./Profile";
import { StorageUsage } from "./StorageUsage";

export function Sidebar() {
  const { navigationMenus } = useNavigationHook();

  return (
    <aside className="flex max-w-xs flex-col gap-6 border-r border-zinc-200 px-10 py-8">
      <Logo />

      <Input.Root>
        <Input.Prefix>
          <Search className="h-5 w-5 text-zinc-500" />
        </Input.Prefix>
        <Input.Control placeholder="Search" />
      </Input.Root>

      <nav className="flex flex-col space-y-0.5 ">
        {navigationMenus.map((menu) => (
          <CollapsibleItem
            key={menu.title}
            title={menu.title}
            icon={menu.icon}
            subItems={menu.items}
          />
        ))}
      </nav>

      <div className="mt-auto flex flex-col">
        <nav className="space-y-0.5">
          <CollapsibleItem title="Support" icon={LifeBuoy} />
          <CollapsibleItem title="Settings" icon={Cog} />
        </nav>
        <StorageUsage />

        <Profile />
      </div>
    </aside>
  );
}
