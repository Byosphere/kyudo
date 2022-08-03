import { ArrowUpward, KeyboardArrowLeft, KeyboardArrowRight, KeyboardArrowUp, Menu } from "@mui/icons-material";
import { Button, useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import useMediaQuery from "@mui/material/useMediaQuery";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import { useState } from "react";

export default function Navigator() {

    const theme = useTheme();
    const [value, setValue] = useState<number>(0);
    const matches = useMediaQuery(theme.breakpoints.up('lg'));

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue);
    };

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
            {!trigger && matches && <Tabs  variant="scrollable"
  scrollButtons
  allowScrollButtonsMobile
  value={value} onChange={handleChange} aria-label="nav tabs example" indicatorColor='secondary' textColor='secondary' sx={{}}>
                <LinkTab label="Actualités" href="/actualites" />
                <LinkTab label="Pratiquer" href="/tradition" />
                <LinkTab label="Contact" href="/contact" />
            </Tabs>}
        </Box>
        {(trigger || !matches) && <IconButton size="large" color="secondary" aria-label="upload picture" sx={{position:'absolute', top: 0, right: '5px'}}>
          <Menu sx={{ fontSize: 30 }}/>
        </IconButton>}

        {trigger && <Button size="large" color="secondary" aria-label="upload picture" sx={{position:'absolute', bottom: '70px', right: '-58px', transform: 'rotate(90deg)'}} startIcon={<KeyboardArrowLeft />}>
          Retour en haut
        </Button>}
      </>
    );
}


interface LinkTabProps {
    label?: string;
    href?: string;
  }

function LinkTab(props: LinkTabProps) {
    return (
      <Tab
        component="a"
        onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
          event.preventDefault();
        }}
        {...props}
      />
    );
  }