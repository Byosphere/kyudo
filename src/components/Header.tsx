import { Typography } from "@mui/material";
import Box from "@mui/system/Box";

export default function Header() {
    
    return (
        <Box sx={{
            display: 'flex',
            alignItems: 'center',
            height: '196px',
            justifyContent: {xs: 'center', lg: 'initial'}
        }}>
            <Box sx={{position: 'relative'}}>
                <Typography variant="h1" sx={{
                    marginLeft: {md: '40px', xs: '35px'},
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
                    marginLeft: '40px',
                    display: 'block',
                    marginTop: '-10px',
                    textAlign: 'center'
                }}>
                    Association Bretagne Kyudo
                </Typography>
            </Box>
            <Box sx={{display: { xs: 'none', md: 'block' }}}>
                <Typography variant='h2' sx={{fontSize: 40, marginLeft: '60px', marginTop: '30px'}}>
                    Le tir à l'arc japonais en Bretagne
                </Typography>
                <Typography variant='h3' sx={{fontSize: 16, marginLeft: '60px', textAlign: 'right', fontWeight: 300}}>
                    Rennes - Le minihic-sur-rance - Morlaix
                </Typography>
            </Box>
        </Box>
    );
}