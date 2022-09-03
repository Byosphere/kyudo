import Navigator from "../components/Navigator";
import PageRouter from "./PageRouter";
import Grid from "@mui/material/Grid";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FooterNav from "../components/FooterNav";
import Box from "@mui/material/Box";
import { teal } from "@mui/material/colors";
import { useMediaQuery } from "@mui/material";
import theme from "../theme";

export default function MainLayout() {

  const matches = useMediaQuery(theme.breakpoints.up('lg'));

  return (
    <>
      <Grid container spacing={0} sx={{ position: 'fixed' }}>
        <Grid item lg={8} xs={9}>
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
        <Grid item lg={4} xs={3}>
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: '100vh',
            backgroundColor: teal[500],
          }}>
            <Navigator />
            {matches && <FooterNav />}
          </Box>
        </Grid>
      </Grid>
      <PageRouter />
    </>
  );
}