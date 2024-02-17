'use client';

import { useSession } from 'next-auth/react';
import style from './followRecommend.module.css';
import { useRouter } from 'next/navigation';
import LoginModal from '@/app/(beforeLogin)/_component/LoginModal';

export default function FollowRecommend() {
  const router = useRouter();
  const { data: me } = useSession();

  const onFollow = () => {
    if (!me) {
      router.replace('/i/flow/login');
      return <LoginModal />;
    }

    return;
  };

  const user = {
    id: 'faker',
    nickname: 'Faker(이상혁)',
    image: '/faker.png',
  };

  return (
    <div className={style.container}>
      <div className={style.userLogoSection}>
        <div className={style.userLogo}>
          <img src={user.image} alt={user.id} />
        </div>
      </div>
      <div className={style.userInfo}>
        <div className={style.title}>{user.nickname}</div>
        <div className={style.count}>@{user.id}</div>
      </div>
      <div className={style.followButtonSection}>
        <button onClick={onFollow}>팔로우</button>
      </div>
    </div>
  );
}
