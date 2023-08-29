import type { FC, HTMLAttributes } from "react";
import classNames from "classnames";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  readonly bordered?: boolean;
}

const Card: FC<CardProps> = (props) => {
  const { className, bordered, ...rest } = props;

  return (
    <div
      className={classNames(
        "rounded-md",
        bordered ? "border border-slate-200" : "shadow-md",
        className
      )}
      {...rest}
    />
  );
};

export default Card;
