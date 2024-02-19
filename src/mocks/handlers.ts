import { http, HttpResponse, StrictResponse } from 'msw';
import { faker } from '@faker-js/faker';

/**
 * API 종류
 * 1. 로그인
 * 2. 로그아웃
 * 3. 회원가입
 * 4. 추천게시글
 * 5. 팔로우중게시글
 * 6. 검색결과게시글
 * 7. 특정사용자의게시글
 * 8. 팔로우추천대상리스트
 * 9. 현재트렌드리스트
 * 10. 유저정보
 */

function generateDate() {
  const lastWeek = new Date(Date.now());
  lastWeek.setDate(lastWeek.getDate() - 7);
  return faker.date.between({
    from: lastWeek,
    to: Date.now(),
  });
}

const delay = (ms: number) =>
  new Promise((res) => {
    setTimeout(res, ms);
  });

const User = [
  {
    nickname: '에반' /** 에덴 << 으로 입력하면 cookie가 안쌓임 */,
    id: 'Evan',
    image: '/ecom.png',
  },
  {
    nickname: '이상혁',
    id: 'Faker',
    image: '/faker.png',
  },
];

export const handlers = [
  //로그인
  http.post('/api/login', () => {
    console.log('로그인 한다');
    //json 형태로 api 요청에 대한 응답 보냄
    return HttpResponse.json(User[0], {
      headers: {
        'Set-Cookie': 'connect.sid=msw-cookie;HttpOnly;Path=/',
      },
    });
  }),
  //로그아웃
  http.post('/api/logout', () => {
    //보낼 데이터가 없을때
    return new HttpResponse(null, {
      headers: {
        'Set-Cookie': 'connect.sid=;HttpOnly;Path=/;Max-Age=0',
      },
    });
  }),
  //회원가입
  http.post('/api/users', async ({ request }) => {
    console.log('회원가입 한다');
    // 유저 이미 존재하는 return 용
    // return HttpResponse.text(JSON.stringify('user_exists'), {
    //   status: 403,
    // })
    return HttpResponse.text(JSON.stringify('ok'), {
      headers: {
        'Set-Cookie': 'connect.sid=msw-cookie;HttpOnly;Path=/;Max-Age=0',
      },
    });
  }),
  //유저정보
  http.get('/api/users/:userId', ({ request, params }): StrictResponse<any> => {
    const { userId } = params;
    const found = User.find((v) => v.id === userId);
    if (found) {
      return HttpResponse.json(found);
    }
    return HttpResponse.json(
      { message: 'no_such_user' },
      {
        status: 404,
      },
    );
  }),
  //추천게시글
  http.get('/api/postRecommends', () => {
    console.log('postRecommends 데이터를 가져온다');
    return HttpResponse.json([
      {
        postId: 1,
        User: User[1],
        content: `${1} 세번째 우승은 저를 위한 것이었다면 네번째 우승은 저희 팀을 위한 것입니다.`,
        Images: [{ imageId: 1, link: faker.image.urlLoremFlickr() }],
        createdAt: generateDate(),
      },
      {
        postId: 2,
        User: User[1],
        content: `${2} 세번째 우승은 저를 위한 것이었다면 네번째 우승은 저희 팀을 위한 것입니다.`,
        Images: [
          { imageId: 1, link: faker.image.urlLoremFlickr() },
          { imageId: 2, link: faker.image.urlLoremFlickr() },
        ],
        createdAt: generateDate(),
      },
      {
        postId: 3,
        User: User[1],
        content: `${3} 세번째 우승은 저를 위한 것이었다면 네번째 우승은 저희 팀을 위한 것입니다.`,
        Images: [],
        createdAt: generateDate(),
      },
      {
        postId: 4,
        User: User[1],
        content: `${4} 세번째 우승은 저를 위한 것이었다면 네번째 우승은 저희 팀을 위한 것입니다.`,
        Images: [
          { imageId: 1, link: faker.image.urlLoremFlickr() },
          { imageId: 2, link: faker.image.urlLoremFlickr() },
          { imageId: 3, link: faker.image.urlLoremFlickr() },
          { imageId: 4, link: faker.image.urlLoremFlickr() },
        ],
        createdAt: generateDate(),
      },
      {
        postId: 5,
        User: User[1],
        content: `${5} 세번째 우승은 저를 위한 것이었다면 네번째 우승은 저희 팀을 위한 것입니다.`,
        Images: [
          { imageId: 1, link: faker.image.urlLoremFlickr() },
          { imageId: 2, link: faker.image.urlLoremFlickr() },
          { imageId: 3, link: faker.image.urlLoremFlickr() },
        ],
        createdAt: generateDate(),
      },
    ]);
  }),
  //팔로우중게시글
  http.get('/api/followingPosts', async ({ request }) => {
    await delay(3000);
    return HttpResponse.json([
      {
        postId: 1,
        User: User[1],
        content: `${1} 저를 팔로우 하고 계시는군요 훗..`,
        Images: [{ imageId: 1, link: faker.image.urlLoremFlickr() }],
        createdAt: generateDate(),
      },
      {
        postId: 2,
        User: User[1],
        content: `${2} 저를 팔로우 하고 계시는군요 훗..`,
        Images: [{ imageId: 1, link: faker.image.urlLoremFlickr() }],
        createdAt: generateDate(),
      },
      {
        postId: 3,
        User: User[1],
        content: `${3} 저를 팔로우 하고 계시는군요 훗..`,
        Images: [{ imageId: 1, link: faker.image.urlLoremFlickr() }],
        createdAt: generateDate(),
      },
      {
        postId: 4,
        User: User[1],
        content: `${4} 저를 팔로우 하고 계시는군요 훗..`,
        Images: [{ imageId: 1, link: faker.image.urlLoremFlickr() }],
        createdAt: generateDate(),
      },
      {
        postId: 5,
        User: User[1],
        content: `${5} 저를 팔로우 하고 계시는군요 훗..`,
        Images: [{ imageId: 1, link: faker.image.urlLoremFlickr() }],
        createdAt: generateDate(),
      },
    ]);
  }),
  //검색결과게시글
  http.get('/api/search/:tag', ({ request, params }) => {
    const { tag } = params;
    return HttpResponse.json([
      {
        postId: 1,
        User: User[1],
        content: `${1} 저를 검색하려 하셨던 겁니까 ?`,
        Images: [{ imageId: 1, link: faker.image.urlLoremFlickr() }],
        createdAt: generateDate(),
      },
      {
        postId: 2,
        User: User[1],
        content: `${2} 저를 검색하려 하셨던 겁니까 ?`,
        Images: [{ imageId: 1, link: faker.image.urlLoremFlickr() }],
        createdAt: generateDate(),
      },
      {
        postId: 3,
        User: User[1],
        content: `${3} 저를 검색하려 하셨던 겁니까 ?`,
        Images: [{ imageId: 1, link: faker.image.urlLoremFlickr() }],
        createdAt: generateDate(),
      },
      {
        postId: 4,
        User: User[1],
        content: `${4} 저를 검색하려 하셨던 겁니까 ?`,
        Images: [{ imageId: 1, link: faker.image.urlLoremFlickr() }],
        createdAt: generateDate(),
      },
      {
        postId: 5,
        User: User[1],
        content: `${5} 저를 검색하려 하셨던 겁니까 ?`,
        Images: [{ imageId: 1, link: faker.image.urlLoremFlickr() }],
        createdAt: generateDate(),
      },
    ]);
  }),
  //특정사용자의게시글
  http.get('/api/users/:userId/posts', ({ request, params }) => {
    const { userId } = params;
    return HttpResponse.json([
      {
        postId: 1,
        User: User[0],
        content: `${1} ${userId}의 CS 놓치지 않고 먹는 법`,
        Images: [{ imageId: 1, link: faker.image.urlLoremFlickr() }],
        createdAt: generateDate(),
      },
      {
        postId: 2,
        User: User[0],
        content: `${2} ${userId}의 CS 놓치지 않고 먹는 법`,
        Images: [{ imageId: 1, link: faker.image.urlLoremFlickr() }],
        createdAt: generateDate(),
      },
      {
        postId: 3,
        User: User[0],
        content: `${3} ${userId}의 CS 놓치지 않고 먹는 법`,
        Images: [{ imageId: 1, link: faker.image.urlLoremFlickr() }],
        createdAt: generateDate(),
      },
      {
        postId: 4,
        User: User[0],
        content: `${4} ${userId}의 CS 놓치지 않고 먹는 법`,
        Images: [{ imageId: 1, link: faker.image.urlLoremFlickr() }],
        createdAt: generateDate(),
      },
      {
        postId: 5,
        User: User[0],
        content: `${5} ${userId}의 CS 놓치지 않고 먹는 법`,
        Images: [{ imageId: 1, link: faker.image.urlLoremFlickr() }],
        createdAt: generateDate(),
      },
    ]);
  }),
  //팔로우추천대상리스트
  http.get('/api/followRecommends', ({ request }) => {
    return HttpResponse.json(User);
  }),
  //현재트렌드리스트
  http.get('/api/trends', ({ request }) => {
    return HttpResponse.json([
      { tagId: 1, title: '페이커', count: 1264 },
      { tagId: 2, title: '구마유시', count: 1264 },
      { tagId: 3, title: '케리아', count: 1264 },
      { tagId: 4, title: '오너', count: 1264 },
      { tagId: 5, title: '제우스', count: 1264 },
      { tagId: 6, title: '징동다운', count: 1264 },
      { tagId: 7, title: '티원우승', count: 1264 },
      { tagId: 8, title: '손흥민', count: 1264 },
      { tagId: 9, title: '이강인', count: 1264 },
    ]);
  }),
];
