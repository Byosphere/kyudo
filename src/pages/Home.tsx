import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Actu from "../components/Actu";
import img from '../img/tokuda_bandeau.jpg';

export default function Home() {


    const actu = {
        region: 'Rennes',
        title: 'Titre de la news',
        date: new Date(),
        img,
        shortText: "Il est logique que le Kyudo d'aujourd'hui n'ait plus les mêmes buts que l'arc des champs de bataille. Il ne peut plus avoir les mêmes raisons d'être que pour les Samuraï de l'époque Édo. Le Kyudo d'aujourd'hui est une 'Voie', une discipline, permettant d'enrichir sa vie quotidienne"
    }

    return (
        <>
            <Box sx={{ display: 'flex' }}>
                <Typography component="div" gutterBottom sx={{ margin: { xs: '0 10px', lg: '44px 114px 60px 114px' }, fontSize: { xs: '18px', lg: '22px' }, maxWidth: '900px' }}>
                    La pratique du Kyudo existe en Bretagne depuis 1984, soutenue et développée par <Box component="span" sx={{ color: 'primary.main' }}>Loïc De Penhouët</Box>,
                    élève de <Box component="span" sx={{ color: 'primary.main' }}>Jacques Normand Senseï</Box>, garant de l'enseignement traditionnel japonais du Kyudo.
                </Typography>
            </Box>

            <Typography id='anchor-title' variant="h4" sx={{ margin: '30px 0 0 60px', color: 'primary.main' }}>
                Actualités
            </Typography>
            <Box sx={{ margin: '20px 16px', display: 'grid', gridTemplateColumns: ['auto', 'auto auto', 'auto auto auto'] }}>
                <Actu {...actu} />
                <Actu {...actu} />
                <Actu {...actu} />
                <Actu {...actu} />
            </Box>
            <Box sx={{ margin: '30px 25px 30px', textAlign: 'center' }}>
                <Button variant="outlined">Anciennes actualités</Button>
            </Box>
        </>
    );
}

