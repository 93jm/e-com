## X.COM (twitter) 클론 코딩

Nextjs App router 공부를 위해 [강의 가이드](https://www.inflearn.com/course/next-react-query-sns%EC%84%9C%EB%B9%84%EC%8A%A4/dashboard)를 따라 기본적인 UI 및 기능 클론 코딩 진행<br>
msw(mockServiceWorker)를 사용하여 가짜 api 구성하여 통신하며, style은 css.module과 classnames를 사용하였고 클래스 네임 임의의 데이터는 faker-js를 사용함<br>

## 사용 스택

- React 18
- Next14 App router
- css.module
- classnames
- Next-Auth
- React-Query
- Faker-js
- MSW
- Express
- ContextAPI + Zustand
  <br>

## 실행 방법

```bash
# next front server run
npm run next
# msw run
npm run mock
```

<br>

## 공부해본 기능

- next14 app router 의 기능
- 제어컴포넌트와 비제어컴포넌트 컨트롤
- Next Middleware
- MSW 사용하여 백엔드 없이도 프론트 통신 테스트
- Next Server Action
- React Query
- Optimistic Updates
