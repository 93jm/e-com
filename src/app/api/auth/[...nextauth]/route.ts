/**
 * catch-all-segment 기능이 있는 파일임
 * [...something] 인 경우에 어떤 경로든지 들어갈 수 있음
 * ex ) /api/auth/a, /api/auth/a/b, /api/auth/a/b/c.......
 * 하지만 여기서는 GET 과 POST를 Next Auth가 만들어놓은 함수를 가져다가 쓰기에 따로 만들 필요가 없음
 */

export { GET, POST } from '@/auth';
