'use client';
import style from './tab.module.css';
import { useContext } from 'react';
import { TabContext } from '@/app/(afterLogin)/home/_component/TabProvider';

export default function Tab() {
  const { tab, setTab } = useContext(TabContext);
  const onClickRec = () => {
    setTab('recommend');
  };
  const onClickFol = () => {
    setTab('follow');
  };

  return (
    <div className={style.homeFixed}>
      <div className={style.homeText}>홈</div>
      <div className={style.homeTab}>
        <div onClick={onClickRec}>
          추천
          <div className={style.tabIndicator} hidden={tab === 'follow'}></div>
        </div>
        <div onClick={onClickFol}>
          팔로우 중<div className={style.tabIndicator} hidden={tab === 'recommend'}></div>
        </div>
      </div>
    </div>
  );
}
