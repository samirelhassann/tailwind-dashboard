"use client";

import React from "react";

import { Cog, LifeBuoy, Menu, Search } from "lucide-react";

import { Logo } from "@/app/assets/Logo";
import { useNavigationHook } from "@/app/hooks/useNavigationHook";
import * as Collapsible from "@radix-ui/react-collapsible";

import { Button } from "../Button";
import Input from "../Input";
import { CollapsibleItem } from "./CollapsibleItem";
import { Profile } from "./Profile";
import { StorageUsage } from "./StorageUsage";

export function Sidebar() {
  const { navigationMenus } = useNavigationHook();

  return (
    <Collapsible.Root className="fixed inset-x-0 top-0 z-20 flex flex-col gap-6 border-b border-zinc-200 bg-white p-4 data-[state=open]:bottom-0 dark:border-zinc-800 dark:bg-zinc-800 lg:right-auto lg:w-80 lg:border-r lg:px-5 lg:py-8 lg:data-[state=closed]:bottom-0">
      <div className="flex items-center justify-between">
        <Logo />

        <Collapsible.Trigger className="lg:hidden" asChild>
          <Button variant="ghost">
            <Menu className="h-6 w-6" />
          </Button>
        </Collapsible.Trigger>
      </div>

      <Collapsible.Content
        forceMount
        className="flex flex-1 flex-col gap-3 data-[state=closed]:hidden lg:data-[state=closed]:flex"
      >
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
      </Collapsible.Content>
    </Collapsible.Root>
  );
}
