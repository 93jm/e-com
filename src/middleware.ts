import { auth } from './auth';
import { NextResponse } from 'next/server';

export async function middleware() {
  //현재 세션이 있는지 검사
  // console.log('미들웨어 호출');
  const session = await auth();
  if (!session) {
    //없다면 login 페이지로 리다이렉트
    // return NextResponse.redirect('http://localhost:80/i/flow/login'); {/* 백엔드 통신 테스트 */}
    return NextResponse.redirect('http://localhost:3000/i/flow/login'); /*프론트만 통신 테스트*/
  }
}
/**
 * App router에서는 기존 page router에서 작업하기 어려웠던 로그인 별 페이지 접근 권한에 있어
 * 간단하게 사용할 수 있게끔 middleware라는 것을 제공해준다, 다만 여기서는 middleware를
 * Next Auth가 만들어놓은 auth 함수를 middleware로 사용한다
 */

//로그인을 해야지만 접근할 수 있는 페이지 모음
export const config = {
  matcher: ['/compose/tweet', '/home', '/explore', '/messages', '/search'],
};
