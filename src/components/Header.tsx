import { Typography } from "@mui/material";
import Box from "@mui/system/Box";
import image from "../img/tokuda_bandeau.jpg";

export default function Header() {

    return (
        <Box sx={{
            display: 'flex',
            alignItems: 'center',
            height: '196px',
            justifyContent: { xs: 'center', lg: 'initial' },
            position: 'relative',
            '&:before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                left: 0,
                top: 0,
                width: '100%',
                height: '100%',
                backgroundImage: 'url("' + image + '")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                opacity: 0.2
            }

        }}>
            <Box sx={{ position: 'relative', marginLeft: [0, 0, '35px'] }}>
                <Typography variant="h1" sx={{
                    paddingRight: '42px',
                    fontFamily: 'Shark'
                }}>
                    ABK
                </Typography>
                <Typography component='span' sx={{
                    position: 'absolute',
                    top: 22,
                    right: 4,
                    fontSize: 35,
                    lineHeight: '38px',
                    fontWeight: 'bold'
                }}>
                    弓<br />道
                </Typography>
                <Typography component='span' sx={{
                    display: 'block',
                    marginTop: '-10px',
                    textAlign: 'center'
                }}>
                    Association Bretagne Kyudo
                </Typography>
            </Box>
            <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                <Typography variant='h2' sx={{ fontSize: 40, marginLeft: '60px', marginTop: '30px' }}>
                    Le tir à l'arc japonais en Bretagne
                </Typography>
                <Typography variant='h3' sx={{ fontSize: 16, marginLeft: '60px', textAlign: 'right', fontWeight: 300, marginRight: '20px' }}>
                    Rennes - Le minihic-sur-rance - Morlaix
                </Typography>
            </Box>
        </Box>
    );
}