import Navigator from "../components/Navigator";
import PageRouter from "./PageRouter";
import Grid from "@mui/material/Grid";
import Header from "../components/Header";
import { useState } from "react";

export default function Mainpage() {

  const [hasScrolled, setHasScrolled] = useState<boolean>(false);

  const handleScrollChange = (scroll: boolean) => {
    setHasScrolled(scroll);
  }

    return (
      <Grid container spacing={0}>
        <Grid item xs={8}>
          <Header />
          <PageRouter handleScrollChange={handleScrollChange} />
        </Grid>
        <Grid item xs={4}>
          <Navigator hasScrolled={hasScrolled} />
        </Grid>
      </Grid>
    );
}