import style from './profile.module.css';
import Post from '@/app/(afterLogin)/_component/Post';
import BackButton from '@/app/(afterLogin)/_component/BackButton';
import ECOM from '/public/images/ecom.png';
import Image from 'next/image';

export default function Profile() {
  const user = {
    id: 'evan',
    nickname: '에반',
    image: ECOM,
  };

  return (
    <main className={style.main}>
      <div className={style.header}>
        <BackButton />
        <h3 className={style.headerTitle}>{user.nickname}</h3>
      </div>
      <div className={style.userZone}>
        <div className={style.userImage}>
          <Image src={user.image} alt={user.id} height={134} />
        </div>
        <div className={style.userName}>
          <div>{user.nickname}</div>
          <div>@{user.id}</div>
        </div>
        <button className={style.followButton}>팔로우</button>
      </div>
      <div>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </main>
  );
}
