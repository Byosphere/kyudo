import { Box, Fab, useScrollTrigger } from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useEffect, useState } from "react";

interface PageRouterProps {
    handleScrollChange: (value:boolean) => void;
}

export default function PageRouter({handleScrollChange}: PageRouterProps) {

    const [scrollTarget, setScrollTarget] = useState<HTMLDivElement | undefined>(undefined);
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 60,
        target: scrollTarget
      });

    useEffect(() => {
        handleScrollChange(trigger);
    }, [trigger, handleScrollChange]);

    return (
        <Box 
            ref={(node: HTMLDivElement)=> {
                if (node) {
                    setScrollTarget(node);
                }
            }}
            sx={{
                width: '100%',
                height: '100%',
                overflowY: 'auto',
                top:0,
                bottom: 0,
                paddingBottom: '300px'
            }} 
        >
            <Box 
                sx={{
                    position: 'relative',
                    width: 'calc(100% - 80px)',
                    marginTop: '196px',
                    backgroundColor: '#F5F5F6',
                    paddingTop: '80px',
                    height: 2000,
                    zIndex: 2
                }}
            >
                <Fab color="primary" aria-label="add" size="medium" sx={{
                    position: 'absolute',
                    top: '-20px',
                    left: '114px'
                }}>
                    <KeyboardArrowDownIcon /> 
                </Fab>
                {/* <Typography variant="h2" gutterBottom sx={{padding: '0 50px', fontSize: '24px'}}>
                    La pratique du Kyudo existe en Bretagne depuis 1984, soutenue et développée par Loïc De Penhouët, élève de Jacques Normand Senseï. 
                    <br />
                    À l'heure actuelle, deux clubs, situés à Rennes et à Morlaix, assurent une pratique régulière et hebdomadaire du Kyudo.
                    <br />
                    À Rennes, l'association Kyudo 35, et à Morlaix, l'association Kyudo 29
                    Les enseignants des deux clubs sont formés par Jacques Normand Senseï, garant de l'enseignement traditionnel japonais du Kyudo.
                    <br />
                    Les deux clubs travaillent en étroite collaboration et se retrouvent régulièrement au long de l'année.
                </Typography> */}
            </Box>
        </Box>
    );
}