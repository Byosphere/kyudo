import { CardMedia, CardContent, Typography, CardHeader, Chip } from "@mui/material";
import Card from "@mui/material/Card";

interface Props {
    region: string;
    title: string;
    date: Date;
    img: string;
    shortText: string;
}

export default function Actu({ img, title, region, shortText }: Props) {
    return (
        <Card sx={{ margin: '10px', backgroundColor: 'transparent', borderTop: '2px solid', borderColor: 'primary.main' }} elevation={0}>
            <CardHeader
                subheader="14 septembre 2016"
                action={
                    <Chip label={region} size="small" color="primary" />
                }
            />
            <CardMedia
                component="img"
                height="140"
                image={img}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {shortText}
                </Typography>
            </CardContent>
        </Card>
    );
}