import { Box, Fab, Grid, Typography } from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Actu from "../components/Actu";
import img from '../img/tokuda_bandeau.jpg';
import Home from "./Home";
import { Route, Routes } from "react-router-dom";
import Detail from "./Detail";
import Contact from "./Contact";

export default function PageRouter() {

    const actu = {
        region: 'R',
        title: 'Titre de la news',
        date: new Date(),
        img,
        shortText: 'Bla bla bla'
    }



    return (
        <Box
            sx={{
                width: '100%',
                height: '100%',
                overflowY: 'auto',
                top: 0,
                bottom: 0,
                paddingBottom: '300px'
            }}
        >
            <Box
                sx={{
                    position: 'relative',
                    width: 'calc(100% - 64px)',
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
                <Box sx={{ height: '100%', overflow: 'hidden', padding: '20px 16px' }}>
                    <Routes>
                        <Route index element={<Home />} />
                        <Route path="pratiquer" element={<Detail />} />
                        <Route path="contact" element={<Contact />} />
                    </Routes>
                </Box>
            </Box>
        </Box>
    );
}