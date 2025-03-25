import StyledText from "@/ui/styled-text";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Image from "next/image";


export default function PersonalHomeSuspenseBoundary() {
    return (
        <Stack component="main" justifyContent="center" alignItems="center" spacing={2} sx={{ height: "100vh" }}>
            <Image
                src="/1fee910951f9c112afc5ef925bf1f82a.gif"
                width={96} height={96}
                alt="Ganyu riding a motorcycle"
            />
            <StyledText component="div" variant="h6" textAlign="center" lineHeight={1.15}>
                <Box fontWeight="bold" display="block">Loading</Box>
                <Box component="small" color="text.secondary">Onwards we go!</Box>
            </StyledText>
        </Stack>
    );
}
