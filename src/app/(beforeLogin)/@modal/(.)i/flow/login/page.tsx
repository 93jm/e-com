import LoginModal from '@/app/(beforeLogin)/_component/LoginModal';

export default function Page() {
  // 인터셉팅 라우트로 i/flow/login 페이지 접근시에 링크 가로채기
  return <LoginModal />;
}
