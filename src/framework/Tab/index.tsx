import React from "react";

interface ITabContext {
  activeTab: string;
  setActiveTab: (label: string) => void;
}

interface ITabProps {
  label: string;
  children: React.ReactNode;
}
const Tab: React.FC<ITabProps> = (props) => {
  const { label, children } = props;
  const { setActiveTab } = useTab();
  const onClickButton = () => {
    setActiveTab(label);
  };
  return (
    <div>
      <button onClick={onClickButton}>{children}</button>
    </div>
  );
};

interface IPanelProps {
  label: string;
  children: React.ReactNode;
}

const Panel = (props: IPanelProps) => {
  const { label, children } = props;
  const { activeTab } = useTab();
  return label === activeTab ? <div>{children}</div> : null;
};

const TabContext = React.createContext<ITabContext | undefined>(undefined);

interface ITapBaseProps {
  children: React.ReactNode;
}
const TabBase = (props: ITapBaseProps) => {
  const [activeTab, setActiveTab] = React.useState("a");
  const memoizedContextValue = React.useMemo(
    () => ({
      activeTab,
      setActiveTab,
    }),
    [activeTab, setActiveTab]
  );
  return (
    <TabContext.Provider value={memoizedContextValue}>
      {props.children}
    </TabContext.Provider>
  );
};

const useTab = (): ITabContext => {
  const context = React.useContext(TabContext);
  if (!context) {
    throw new Error("This component must be used within a <Tabs> component");
  }
  return context;
};

export const TabContainer = Object.assign(TabBase, {
  Tab,
  Panel,
});
