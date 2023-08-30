import { ElementType, useMemo } from "react";

import { Home, SquareStack, CheckSquare, Flag, Users } from "lucide-react";

export interface Navigation {
  title: string;
  icon: ElementType;
  items?: NavigationItem[];
}

export interface NavigationItem {
  title: string;
  href: string;
}

interface UseNavigationProps {
  navigationMenus: Navigation[];
}

export const useNavigationHook = (): UseNavigationProps => {
  const navigationMenus = useMemo(() => {
    return [
      {
        title: "Home",
        icon: Home,
      },
      {
        title: "Projects",
        icon: SquareStack,
      },
      {
        title: "Tasks",
        icon: CheckSquare,
      },
      {
        title: "Reporting",
        icon: Flag,
      },
      {
        title: "Users",
        icon: Users,
        items: [
          {
            title: "List all users",
            href: "/users/list",
          },
        ],
      },
    ];
  }, []);

  const hookReturnValue = useMemo(() => {
    return { navigationMenus };
  }, [navigationMenus]);

  return hookReturnValue;
};
