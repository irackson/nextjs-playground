import { Container, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export const MissingPage = () => {
  return (
    <Container
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        // justifyContent: "center",
        height: "100vh", // Set container height to viewport height
      }}
    >
      <Image
        src={
          "https://static.hsappstatic.net/ui-images/static-2.592/optimized/errors/map.svg"
        }
        alt={"lost-wander"}
        width="400"
        height="400"
      />
      {/* a button that when clicked calls a function that console logs */}
      <button
        onClick={() => {
          console.log("Hello");
        }}
      >
        Click me
      </button>
    </Container>
  );
};

export default function Custom404() {
  return <MissingPage />;
}
