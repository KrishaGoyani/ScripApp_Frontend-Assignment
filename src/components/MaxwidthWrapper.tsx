import type { ReactNode } from "react";

const MaxWidthWrapper = ({ children }: { children: ReactNode }) => {
  return <div className="maxwidth-wrapper">{children}</div>;
};

export default MaxWidthWrapper;
