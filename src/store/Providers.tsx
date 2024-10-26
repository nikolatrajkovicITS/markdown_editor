import { ReactNode } from "react";
import { Provider as JotaiProvider } from "jotai";

type ProvidersProps = {
  children: ReactNode;
};

const Providers = ({ children }: ProvidersProps) => {
  return <JotaiProvider>{children}</JotaiProvider>;
};

export default Providers;
