import { Box, Fab } from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Home from "./Home";
import { Route, Routes } from "react-router-dom";
import Detail from "./Detail";
import Contact from "./Contact";

export default function PageRouter() {

    const handleClick = () => {
        const title = document.getElementById('anchor-title');
        if (title) {
            window.scrollTo({
                top: title.offsetTop + 180,
                left: 0,
                behavior: 'smooth'
            });
        }
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
                    zIndex: 2
                }}
            >
                <Fab
                    color="primary"
                    aria-label="add"
                    size="medium"
                    onClick={handleClick}
                    sx={{
                        position: 'absolute',
                        top: '-20px',
                        left: ['20px', '20px', '114px']
                    }}
                >
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