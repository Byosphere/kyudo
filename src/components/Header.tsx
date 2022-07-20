import { Typography } from "@mui/material";
import Box from "@mui/system/Box";

export default function Header() {
    
    return (
        <Box sx={{
            display: 'flex',
            alignItems: 'center',
            height: '196px'
        }}>
            <div>
                <Typography variant="h1" sx={{
                    marginLeft: '50px',
                }}>
                    ABK_
                </Typography>
                <Typography component='span' sx={{
                    marginLeft: '50px',
                    display: 'block',
                    marginTop: '-12px'
                }}>
                    Association Bretagne Kyudo
                </Typography>
            </div>
            <Typography variant='h2' sx={{fontSize: 40, marginLeft: '60px', marginTop: '30px'}}>
                Le tir à l'arc japonais en Bretagne
            </Typography>
        </Box>
    );
}