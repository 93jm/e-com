'use client';

import style from './trendSection.module.css';
import Trend from '@/app/(afterLogin)/_component/Trend';
import { usePathname } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { useQuery } from '@tanstack/react-query';
import { getTrends } from '@/app/(afterLogin)/_lib/getTrends';
import { Hashtag } from '@/model/Hashtag';
import { Fragment } from 'react';

export default function TrendSection() {
  const { data: session } = useSession();
  const { data } = useQuery<Hashtag[]>({
    queryKey: ['trends'],
    queryFn: getTrends,
    staleTime: 60 * 1000,
    gcTime: 300 * 1000,
    //로그인을 했을 경우만 해당 쿼리 실행
    enabled: !!session?.user,
  });

  const pathname = usePathname();
  if (pathname === '/explore') return null;
  if (session?.user) {
    return (
      <div className={style.trendBg}>
        <div className={style.trend}>
          <h3>나를 위한 트렌드</h3>
          {data?.map((trend, idx) => (
            <Fragment key={idx}>
              <Trend trend={trend} />
            </Fragment>
          ))}
        </div>
      </div>
    );
  }
  return (
    <div className={style.trendBg}>
      <div className={style.noTrend}>트렌드를 가져올 수 없습니다.</div>
    </div>
  );
}
