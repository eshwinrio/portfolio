import type { FC, HTMLAttributes } from "react";
import classNames from "classnames";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  readonly align?: "start" | "middle" | "end";
}

const CardActions: FC<CardProps> = (props) => {
  const { className, align, ...rest } = props;

  return <div className={`py-3 px-4`} {...rest} />;
};

export default CardActions;
