import Box, { BoxProps } from "@mui/material/Box";
import { FC } from "react";


export interface SectionProps extends Omit<BoxProps, "component"> { }

const Section: FC<SectionProps> = (props) => {
    return <Box component="section" {...props} />;
}

export default Section;
