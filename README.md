# Neonflix

- React, TypeScript, framer motion 를 이용한 영화 및 TV Show 스트리밍 서비스 입니다.  

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

- React-Query 라이브러리와 fetch 를 사용한 API 호출 및 비동기 처리와,  
useMemo 나 useEffect 등의 함수형 컴포넌트의 생명주기 처리에 대해 가장 많이 고민하며 공부했었던 프로젝트입니다.  

- 이전 react-beautiful-dnd 를 사용하면서도 간단한 코드로 애니메이션을 만들 수 있음에 놀랐는데,   
framer motion 라이브러리를 사용하면서 신세계를 경험할 수 있었습니다.  

- SSR 기반의 프로젝트가 궁금하여 Next.js 를 독학해 유사한 neonflix 사이트를 제작했습니다.   
이는 공부한 CSR 과 SSR 에 대해서 한번 더 복습할 수 있는 계기가 되었습니다.  

---

#### 🤯 디벨롭 예정 리스트

- 슬라이더 prev btn 첫 클릭 시 왼쪽으로 이동하는 이슈 개선
- 많은 fetch 로 버벅이는 현상 개선
