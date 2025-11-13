import React from "react";
import Container from "@mui/material/Container";

function PageContainer({children}) {
  return (
    <>
      <Container maxWidth="xs">{children}</Container>
    </>
  );
}

export default PageContainer;
