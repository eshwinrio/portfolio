import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import Grid2 from "@mui/material/Unstable_Grid2";
import DatamaticsLogo from "./icons/Datamatics";
import RazorDigitalSolutionsIcon from "./icons/RazorDigitalSolutions";
import THEMUSEUMIcon from "./icons/THEMUSEUM";


export default function ProfessionalJourney() {
    return (
        <>
            <Typography component="h2" variant="h5" fontWeight="bold" textAlign="center">
                <Box fontWeight="bold" display="block">Companies & Organizations</Box>
                <Box component="small" color="text.secondary">I&apos;ve worked with</Box>
            </Typography>
            <Grid2 container justifyContent="center" alignItems="center" rowSpacing={4} columnSpacing={8} sx={{ mt: 4 }}>
                <Grid2 xs={12} md="auto">
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                        <Tooltip title="Datamatics Digital Ltd.">
                            <DatamaticsLogo sx={{ width: "auto", height: { xs: 48, sm: 64 } }} alignSelf="center" />
                        </Tooltip>
                    </Box>
                </Grid2>
                <Grid2>
                    <Tooltip title="THEMUSEUM">
                        <THEMUSEUMIcon sx={{ width: 64, height: 64 }} />
                    </Tooltip>
                </Grid2>
                <Grid2>
                    <Tooltip title="Razor Digital Solutions">
                        <RazorDigitalSolutionsIcon sx={{ width: 64, height: 64 }} />
                    </Tooltip>
                </Grid2>
            </Grid2>
        </>
    );
}
