'use client';

import { createContext, ReactNode, useState } from 'react';

export const TabContext = createContext({
  tab: 'recommend',
  setTab: (value: 'recommend' | 'follow') => {},
});

type Props = { children: ReactNode };
export default function TabProvider({ children }: Props) {
  const [tab, setTab] = useState('recommend');

  return <TabContext.Provider value={{ tab, setTab }}>{children}</TabContext.Provider>;
}
