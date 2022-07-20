import Box from "@mui/material/Box";
import teal from "@mui/material/colors/teal";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import { useState } from "react";

interface NavigatorProps {
    hasScrolled: boolean;
}

export default function Navigator({hasScrolled}: NavigatorProps) {

    const [value, setValue] = useState<number>(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue);
    };  

    return (
        <Box sx={{
            backgroundColor: teal[500],
            width: '100%',
            height: '100vh'        
        }}>
            <Box sx={{
                display: 'flex',
                width: '100%',
                height: '196px',
                alignItems: 'center',
                paddingLeft: '80px'
            }}>
                <Tabs value={value} onChange={handleChange} aria-label="nav tabs example" indicatorColor='secondary' textColor='secondary'>
                    <LinkTab label="Page One" href="/drafts" />
                    <LinkTab label="Page Two" href="/trash" />
                    <LinkTab label="Page Three" href="/spam" />
                </Tabs>
            </Box>
        </Box>
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