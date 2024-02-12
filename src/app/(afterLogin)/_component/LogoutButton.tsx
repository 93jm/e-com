'use client';

import Image from 'next/image';
import style from './logoutButton.module.css';
import ECOM from '/public/images/trunks.png';

export default function LogoutButton() {
  const me = {
    id: 'evan',
    nickname: '에반',
    image: ECOM,
  };

  const onLogout = () => {};

  return (
    <button className={style.logOutButton} onClick={onLogout}>
      <div className={style.logOutUserImage}>
        <Image src={me.image} alt={me.id} width={30} />
      </div>
      <div className={style.logOutUserName}>
        <div>{me.nickname}</div>
        <div>@{me.id}</div>
      </div>
    </button>
  );
}
