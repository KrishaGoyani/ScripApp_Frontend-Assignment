import type { ReactNode } from "react";

const MaxwidthWrapper = ({ children }: { children: ReactNode }) => {
  return <div className="maxwidth-wrapper">{children}</div>;
};

export default MaxwidthWrapper;
