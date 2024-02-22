## X.COM (twitter) 클론 코딩

Nextjs App router 공부를 위해 강의 가이드를 따라 기본적인 UI 및 기능 클론 코딩 진행<br>
msw(mockServiceWorker)를 사용하여 가짜 api 구성하여 통신하며, 임의의 데이터는 faker-js를 사용함<br>

## 사용 스택

- React 18
- Next14 App router
- css.module
- next-auth
- react-query
- faker-js
- msw
- express

## 실행 방법

```bash
# next front server run
npm run next
# msw run
npm run mock
```

## 배운 점

- next14 app router 의 기능
- 제어컴포넌트와 비제어컴포넌트
- next middleware 사용
- MSW 사용하여 백엔드 없이도 프론트 통신 테스트
- next server action
