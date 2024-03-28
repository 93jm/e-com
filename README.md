## X.COM (twitter) 클론 코딩

Nextjs App router 공부를 위해 UI 및 기능 클론 코딩 진행<br>
msw(mockServiceWorker)를 사용하여 가짜 api 구성하여 통신하며, style은 css.module과 classnames를 사용하였고 클래스 네임 임의의 데이터는 faker-js를 사용함 간단한 Get api 기능 외에 기능은 백엔드 Run 후에 url 쿼리 변경 후 테스트 가능

## 사용 스택

- React 18
- Next14 App router
- css.module + vanila-extract
- classnames
- Next-Auth
- React-Query
- Faker-js
- MSW
- ContextAPI + Zustand
  <br>

## 실행 방법

```bash
# next front server run port : 3000
npm run next
# msw run port : 9090
npm run mock
```

<br>

## 공부해본 기능

- next14 app router 의 기능
- 제어컴포넌트와 비제어컴포넌트 컨트롤
- Next Middleware
- MSW 사용하여 백엔드 없이도 프론트 통신 테스트
- Next Server Action
- Nextjs Caching
- React Query
- Optimistic Updates
- vanila-extract
- websorket
