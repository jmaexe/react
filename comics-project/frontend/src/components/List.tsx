import React, { memo } from "react";
type ListProps<T> = {
  isLoading?: boolean;
  items: T[];
  children: (item: T) => React.ReactElement;
};
function List<T>({
  children,
  isLoading,
  items,
}: ListProps<T>): React.ReactElement {
  if (isLoading) {
    return <p className="text-center mt-4">Loading...</p>;
  }

  return (
    <div className=" gap-4 flex flex-wrap justify-center items-center gap-y-6">
      {items.map((item, i) => (
        <div>{children(item)}</div>
      ))}
    </div>
  );
}

export default memo(List);
