import Navigator from "../components/Navigator";
import PageRouter from "./PageRouter";
import Grid from "@mui/material/Grid";
import Header from "../components/Header";
import { useState } from "react";
import Footer from "../components/Footer";
import FooterNav from "../components/FooterNav";
import Box from "@mui/material/Box";
import { teal } from "@mui/material/colors";

export default function Mainpage() {

  const [hasScrolled, setHasScrolled] = useState<boolean>(false);

  const handleScrollChange = (scroll: boolean) => {
    setHasScrolled(scroll);
  }

    return (
      <>
        <Grid container spacing={0} sx={{position: 'fixed'}}>
          <Grid item xs={8}>
            <Box sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              height: '100vh'
            }}>
              <Header />
              <Footer />
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '100vh',
                backgroundColor: teal[500],
              }}>
              <Navigator hasScrolled={hasScrolled} />
              <FooterNav />
            </Box>
          </Grid>
        </Grid>
        <PageRouter handleScrollChange={handleScrollChange} />
      </>
    );
}