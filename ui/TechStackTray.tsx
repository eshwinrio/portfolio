"use client";

import CloseIcon from "@mui/icons-material/Close";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import ListItem, { ListItemProps } from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Tooltip from "@mui/material/Tooltip";
import { cloneElement, FC, useState } from "react";
import { SkillMetrics } from "./services-overview";


export interface TechStackTrayProps extends ListItemProps {
    readonly title: string;
    readonly skills: SkillMetrics[];
}

const TechStackTray: FC<TechStackTrayProps> = ({ skills, ...props }) => {
    // A state for dialog trigger
    const totalItems = skills.length;
    const [open, setOpen] = useState(false);
    const handleClickOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <ListItem disableGutters disablePadding {...props}>
                <ListItemButton onClick={handleClickOpen}>
                    <ListItemText
                        primary={skills.map(({ icon, title }, i) => (
                            <>
                                <Tooltip key={i} title={title} arrow>
                                    {cloneElement(icon, { fontSize: "inherit" })}
                                </Tooltip>
                                {i < totalItems - 1 && "  "}
                            </>
                        ))}
                        primaryTypographyProps={{ variant: "body1" }}
                        secondary={props.title}
                    />
                </ListItemButton>
            </ListItem>

            <Dialog maxWidth="xs" fullWidth open={open} onClose={handleClose}>
                <DialogTitle sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    {props.title}
                    <IconButton onClick={handleClose}><CloseIcon /></IconButton>
                </DialogTitle>
                <DialogContent>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell colSpan={2}>Technology</TableCell>
                                <TableCell>Exp Level</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {skills.map(({ icon, title, level }) => (
                                <TableRow key={title} sx={{ "&:last-child td": { borderBottom: 0 } }}>
                                    <TableCell align="center">{icon}</TableCell>
                                    <TableCell sx={{ fontFamily: "monospace" }}>{title}</TableCell>
                                    <TableCell sx={{ textTransform: "capitalize", fontWeight: level === "advanced" ? "bold" : "normal" }}>
                                        {level}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </DialogContent>
            </Dialog>
        </>
    )
}

export default TechStackTray;
