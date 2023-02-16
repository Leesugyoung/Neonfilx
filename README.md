# Neonflix

React, TypeScript, framer motion 를 이용한 넷플릭스 클론 사이트 입니다 :)

---

### 🌐 프로젝트 링크

[Neonflix 바로가기](https://leesugyoung.github.io/neonflix/)

서버 실행 코드

```
$ npm run start
```

---

### 🚀 개발환경

- 언어 : JavaScript(ES6), TypeScript
- 프론트 : React
- 배포 : Github Pages
- 라이브러리 : npm, react-query, React Hook Form, styled-componenet, framer motion 등

---

### ⚙️ 기능 설명

- Movie & Series
  - React-Query 를 사용하여 themoviedb API 패치
  - 카테고리 별로 구분된 영화&시리즈 출력
  - 슬라이드 기능 구현
  - 디테일 페이지 모달(오버레이) 기능 구현
- Search
  - React-Hook-Form 을 사용한 검색 기능
  - 메인화면 우측 상단 돋보기 모양 아이콘 및 Search 페이지 검색 기능 구현

---

### 📝 프로젝트 구조

-📂[src]  
└── [apis]/_ ― 영화/시리즈/검색 API 폴더  
└── [assets] ➡️ [images]/_ ― image 폴더  
└── [Components] ― 리액트 컴포넌트 폴더  
└── [movies]_ ― 영화 슬라이더, 디테일 컴포넌트 폴더  
└── [Series]/_ ― 시리즈 슬라이더, 디테일 컴포넌트 폴더  
└── [Searhs]/_ ― 영화, 시리즈 검색 컴포넌트 폴더  
└── Header.tsx ― Header 컴포넌트.tsx  
└── Banner.tsx ― Banner 컴포넌트.tsx  
├── [Routes]/_ ― 리액트 라우터 폴더  
├── [utils]/\_ ― JS 유틸함수 폴더(이미지 경로 생성 함수)  
├── App.tsx ― 컴포넌트 관계 정의 컴포넌트.tsx  
├── index.tsx ― 메인 컴포넌트.tsx  
├── styled.d.ts ― 컬러 변수 설정  
└── theme.tsx ― 컬러 설정

---

#### 📖 배운점? 성과?

- React-Query 라이브러리와 fetch 를 사용한 API 호출 및 데이터 관리를 배우면서,  
  axios 라는 방법이 있다는 것을 알았으며, 추가로 리액트의 생명주기에 대해 공부할 수 있었다.

- 추가로, React-hook-form 에 대해 깊이 공부할 수 있었는데,  
  `form` 기능을 직관적이고 단순하게 작성하는 것 만으로도 쉬운 사용이 가능한 것에 대해 놀랐다.

- 이전 react-beautiful-dnd 를 사용하면서도 간단한 코드로 애니메이션을 만들 수 있음에 놀랐는데,  
  framer motion 라이브러리를 사용하면서 신세계를 알 수 있었다.  
  손쉬운 라이브러리를 사용하여 멋진 애니메이션을 구현해낼 수 있는 사람이 된 것 같다!

- React 를 더 깊게 공부하며, SPA, SSR, CSR란 무엇들인지 궁금하여 추가적으로 공부했다.  
  React 도 사랑이지만, SSR 기반의 Next.js 독학하며 유사한 neonflix 사이트를 제작했는데,  
  이러한 경험으로 한층 더 성장한 느낌이다.

---

#### 🤯 디벨롭 예정 리스트

- 반응형 웹 디자인, 크로스 브라우징 개선
- 슬라이더 prev btn 첫 클릭 시 왼쪽으로 이동하는 이슈 개선
- 많은 fetch 로 버벅이는 현상 개선
