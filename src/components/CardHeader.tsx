import type { FC, HTMLAttributes } from "react";

interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {
    readonly title: string;
    readonly subtitle?: string;
}

const CardHeader: FC<CardHeaderProps> = props => {
    return (
    <div className="py-3 px-4" {...props}>
        <h6 className="text-xl font-semibold">{props.title}</h6>
        {props.subtitle && <p className="text-base">{props.subtitle}</p>}
    </div>
    );
}

export default CardHeader;
