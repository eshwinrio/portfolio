import StyledText from "@/ui/styled-text";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Image from "next/image";


export default function PersonalHomeSuspenseBoundary() {
    return (
        <Stack component="main" justifyContent="center" alignItems="center" spacing={2} sx={{ height: "100vh" }}>
            <Image
                src="/images/stickers/0ef4fdeb-55c6-4e78-918f-4e8999cb0a93.gif"
                width={96} height={96}
                alt="Ganyu riding a motorcycle"
                unoptimized
            />
            <StyledText component="div" variant="h6" textAlign="center" lineHeight={1.15}>
                <Box fontWeight="bold" display="block">Loading</Box>
                <Box component="small" color="text.secondary">Onwards we go!</Box>
            </StyledText>
        </Stack>
    );
}
