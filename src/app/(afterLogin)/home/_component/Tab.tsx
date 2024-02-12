'use client';
import style from './tab.module.css';
import { useState } from 'react';

export default function Tab() {
  const [tab, setTab] = useState('recommend');

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
