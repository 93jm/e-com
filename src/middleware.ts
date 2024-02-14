export { auth as middleware } from './auth';

/**
 * App router에서는 기존 page router에서 작업하기 어려웠던 로그인 별 페이지 접근 권한에 있어
 * 간단하게 사용할 수 있게끔 middleware라는 것을 제공해준다, 다만 여기서는 middleware를
 * Next Auth가 만들어놓은 auth 함수를 middleware로 사용한다
 */

//로그인을 해야지만 접근할 수 있는 페이지 모음
export const config = {
  matcher: ['/compose/tweet', '/home', '/explore', '/messages', '/search'],
};