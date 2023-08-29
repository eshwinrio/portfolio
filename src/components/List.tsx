import type { FC, HTMLAttributes } from "react";
import classNames from "classnames";

interface ListProps extends HTMLAttributes<HTMLDivElement> {
    
}

const List: FC<ListProps> = (props) => {
  const { className, ...rest } = props;

  return (
    <div
      className={classNames(className)}
      {...rest}
    />
  );
};

export default List;
