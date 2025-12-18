import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import "../css/pageContainer.css";

function PageContainer({children, theme}) {
  return (
    <Box className={`${theme}`}>
      <Container className="page" maxWidth="xs">
        {children}
      </Container>
    </Box>
  );
}

export default PageContainer;
