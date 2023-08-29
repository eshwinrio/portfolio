import classNames from "classnames";
import type { FC, HTMLAttributes } from "react";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {}

const Container: FC<ContainerProps> = ({ className, ...rest }) => {
  return (
    <div
      className={classNames("container px-8 mx-auto max-w-4xl", className)}
      {...rest}
    />
  );
};

export default Container;
