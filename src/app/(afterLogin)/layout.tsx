import style from '@/app/(afterLogin)/layout.module.css';
import Image from 'next/image';
import Link from 'next/link';
import ECOM from '/public/images/ecom.png';
import NavMenu from './_component/NavMenu';
import LogoutButton from './_component/LogoutButton';
import TrendSection from './_component/TrendSection';
import FollowRecommend from './_component/FollowRecommend';
import { ReactNode } from 'react';
import RightSearchZone from './_component/RightSearchZone';

type Props = { children: ReactNode; modal: ReactNode };
export default function AfterLoginLayout({ children, modal }: Props) {
  return (
    // 전체 컨테이너
    <div className={style.container}>
      {/* //왼쪽 nav 바 */}
      <header className={style.leftSectionWrapper}>
        <section className={style.leftSection}>
          <div className={style.leftSectionFixed}>
            <Link className={style.logo} href="/home">
              <div className={style.logoPill}>
                <Image src={ECOM} alt="e.com로고" width={40} height={40} />
              </div>
            </Link>
            <nav>
              <ul>
                <NavMenu />
              </ul>
              <Link href="/compose/tweet" className={style.postButton}>
                게시하기
              </Link>
            </nav>
            <LogoutButton />
          </div>
        </section>
      </header>
      {/* 왼쪽을 제외한 오른쪽 전체 영역 */}
      <div className={style.rightSectionWrapper}>
        <div className={style.rightSectionInner}>
          {/* 컨텐츠 영역 */}
          <main className={style.main}>{children}</main>
          {/* 추천 영역 */}
          <section className={style.rightSection}>
            <RightSearchZone />
            <TrendSection />
            <div className={style.followRecommend}>
              <h3>팔로우 추천</h3>
              <FollowRecommend />
              <FollowRecommend />
              <FollowRecommend />
            </div>
          </section>
        </div>
      </div>
      {modal}
    </div>
  );
}
