import { useMemo } from "react";

export interface SidebarItem {
  id: string;
  title: string;
}

interface UseNavigationProps {
  sidebarItems: SidebarItem[];
}

export const useSidebarHook = (): UseNavigationProps => {
  const sidebarItems = useMemo(() => {
    return [
      {
        id: "my-details",
        title: "My Details",
      },
      {
        id: "profile",
        title: "Profile",
      },
      {
        id: "password",
        title: "Password",
      },
      {
        id: "team",
        title: "Team",
      },
      {
        id: "plan",
        title: "Plan",
      },
      {
        id: "billing",
        title: "Billing",
      },
      {
        id: "email",
        title: "Email",
      },
      {
        id: "notifications",
        title: "Notifications",
      },
      {
        id: "integration",
        title: "Integrations",
      },
      {
        id: "api",
        title: "API",
      },
    ];
  }, []);

  const hookReturnValue = useMemo(() => {
    return { sidebarItems };
  }, [sidebarItems]);

  return hookReturnValue;
};
