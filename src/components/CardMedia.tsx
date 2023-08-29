import type { FC, HTMLAttributes } from "react";

interface CardMediaProps extends HTMLAttributes<HTMLDivElement> {
  readonly image?: Record<"path" | "altText", string>;
}

const CardMedia: FC<CardMediaProps> = (props) => {
  return (
    <div {...props}>
      {props.image && <img className="w-full h-auto rounded-t-md" src={props.image.path} alt={props.image.altText} />}
    </div>
  );
};

export default CardMedia;
