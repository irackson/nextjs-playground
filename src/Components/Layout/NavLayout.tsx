"use client";

import * as React from "react";
import { useSession } from "next-auth/react";
import { Box } from "@mui/material";
import { NavContext } from "../Context/NavContext";

export interface LayoutProps {
  children: React.ReactNode;
}

export function NavLayout(props: LayoutProps) {
  const { data: session, status: sessionStatus } = useSession();

  const [adminMode, setAdminMode] = React.useState(
    Boolean(session?.isAdmin) || false,
  );

  return (
    <Box
      sx={{
        overflowX: "hidden",
        display: "flex",
        flexDirection: "column",
        // backgroundColor: theme.palette.background.default,
      }}
    >
      <Box sx={{}}>
        <NavContext.Provider
          value={{
            session,
            adminMode,
            setAdminMode,
          }}
        >
          <Box
            component="main"
            sx={{
              minHeight: "100vh",
              overflowY: "auto",
              overflowX: "hidden",
              webkitScrollbar: {
                width: "0.4em",
              },
            }}
          >
            {props.children || null}
          </Box>
        </NavContext.Provider>
      </Box>
    </Box>
  );
}

export default NavLayout;
