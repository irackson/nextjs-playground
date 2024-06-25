"use client";

import * as React from "react";
import { type Session } from "next-auth";

export const NavContext = React.createContext<{
  session: Session | null;
  // sessionStatus: "authenticated" | "unauthenticated" | "loading";
  adminMode: boolean;
  setAdminMode: React.Dispatch<React.SetStateAction<boolean>>;
}>({
  session: null,
  adminMode: false,
  setAdminMode: () => {
    return;
  },
});
