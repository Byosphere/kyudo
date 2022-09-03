import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";


export default function Home() {

    return (
        <>
            <Box sx={{ display: 'flex' }}>
                <Typography component="div" gutterBottom sx={{ margin: { xs: '0 10px', lg: '44px 114px 60px 114px' }, fontSize: { xs: '18px', lg: '22px' }, maxWidth: '900px' }}>
                    La pratique du Kyudo existe en Bretagne depuis 1984, soutenue et développée par <Box component="span" sx={{ color: 'primary.main' }}>Loïc De Penhouët</Box>,
                    élève de <Box component="span" sx={{ color: 'primary.main' }}>Jacques Normand Senseï</Box>, garant de l'enseignement traditionnel japonais du Kyudo.
                </Typography>
            </Box>

            <Typography variant="h4" sx={{ margin: '30px 0 0 60px', color: 'primary.main' }}>
                Actualités
            </Typography>
            <Box sx={{ margin: '20px 16px' }}>

            </Box>
        </>
    );
}

