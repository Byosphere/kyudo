import { ArrowUpward, Home, KeyboardArrowLeft, KeyboardArrowRight, KeyboardArrowUp, Mail, Menu, SportsGymnastics } from "@mui/icons-material";
import { Button, useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import useMediaQuery from "@mui/material/useMediaQuery";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navigator() {

  const theme = useTheme();
  const [value, setValue] = useState<string>('/');
  const matches = useMediaQuery(theme.breakpoints.up('md'));
  const navigate = useNavigate();

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  };

  const handleChangeRoute = (route: string) => {
    setValue(route);
    navigate(route);
    handleClick();
  }

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 80,
    target: window
  });

  return (
    <>
      <Box sx={{
        display: 'flex',
        width: '100%',
        height: '196px',
        alignItems: 'center',
        padding: '0 64px 0 0',
        justifyContent: 'flex-end'
      }}>
        {!trigger && matches && <Tabs
          variant="scrollable"
          scrollButtons
          allowScrollButtonsMobile
          value={value} onChange={handleChange} aria-label="nav tabs example" indicatorColor='secondary' textColor='secondary' sx={{}}
        >
          <Tab label="Actualités" value="/" to="/" component={Link} />
          <Tab label="Pratiquer" value="/tradition" to="/tradition" component={Link} />
          <Tab label="Contact" value="/contact" to="/contact" component={Link} />
        </Tabs>}
      </Box>
      {(trigger || !matches) && <>
        <IconButton onClick={() => handleChangeRoute('/')} size="large" color={value === '/' ? 'secondary' : 'default'} sx={{ position: 'absolute', top: 0, right: '5px' }}>
          <Home sx={{ fontSize: 30 }} />
        </IconButton>
        <IconButton onClick={() => handleChangeRoute('/tradition')} size="large" color={value === '/tradition' ? 'secondary' : 'default'} sx={{ position: 'absolute', top: '64px', right: '5px' }}>
          <SportsGymnastics sx={{ fontSize: 30 }} />
        </IconButton>
        <IconButton onClick={() => handleChangeRoute('/contact')} size="large" color={value === '/contact' ? 'secondary' : 'default'} sx={{ position: 'absolute', top: '128px', right: '5px' }}>
          <Mail sx={{ fontSize: 30 }} />
        </IconButton>
      </>}

      {trigger && <Button
        onClick={handleClick}
        size="large"
        color="secondary"
        sx={{ position: 'absolute', bottom: '70px', right: '-58px', transform: 'rotate(90deg)' }}
        startIcon={<KeyboardArrowLeft />}
      >
        Retour en haut
      </Button>}
    </>
  );
}