import { Typography } from "@mui/material";
import Box from "@mui/material/Box";

export default function Footer() {

    const blockStyle = {
        margin: '0 30px'
    };

    return (
        <Box sx={{ height: '300px', display: 'flex', padding: '70px 0', justifyContent: 'space-around' }}>
            <Box sx={blockStyle}>
                <Typography variant="h5" sx={{ textTransform: 'uppercase' }}>
                    Minihic sur rance
                </Typography>
                <Typography variant="body1">
                    Le lundi de 19h à 21h et le mercredi de 19h à 21h <br />
                    Gymnase du Minihic sur Rance
                </Typography>
            </Box>
            <Box sx={blockStyle}>
                <Typography variant="h5" sx={{ textTransform: 'uppercase' }}>
                    Morlaix
                </Typography>
                <Typography variant="body1">
                    le vendredi de 19h à 22h et le deuxième samedi du mois de 10h à 16h <br />
                    Gymnase du collège du Château <br />
                    Rue du Château
                </Typography>
            </Box>
            <Box sx={blockStyle}>
                <Typography variant="h5" sx={{ textTransform: 'uppercase' }}>
                    Rennes
                </Typography>
                <Typography variant="body1">
                    le lundi de 19h à 21h et le mercredi de 19h à 21h <br />
                    Gymnase du Portugal <br />
                    Bd du Portugal
                </Typography>
            </Box>
        </Box>
    );
}