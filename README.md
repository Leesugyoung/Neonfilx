# Neonfilx

React, TypeScript, framer motion 를 이용한 넷플릭스 클론 사이트 입니다 :)

---

### 🌐 프로젝트 링크

[Neonfilx 바로가기](https://leesugyoung.github.io/neonfilx/)

---

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
├── [apis]/_ ― 영화/드라마/검색 API 폴더
└── [assets] ➡️ [images]/_ ― image 폴더
└── [Components] ― 리액트 컴포넌트 폴더
└── [movies]_ ― 영화 슬라이더, 디테일 컴포넌트 폴더
└── [Series]/_ ― 드라마(시리즈) 슬라이더, 디테일 컴포넌트 폴더
└── [Searhs]/_ ― 영화, 드라마 검색 컴포넌트 폴더
└── Header.tsx ― Header 컴포넌트.tsx
└── Banner.tsx ― Banner 컴포넌트.tsx
├── [Routes]/_ ― 리액트 라우터 폴더
├── [utils]/\_ ― JS 유틸함수 폴더(이미지 경로 생성 함수)
├── App.tsx ― 컴포넌트 관계 정의 컴포넌트.tsx
├── index.tsx ― 메인 컴포넌트.tsx
├── styled.d.ts ― 컬러 변수 설정
└── theme.tsx ― 컬러 설정

---

#### 🤯 추후 추가 예정인 기능

- Fetching 한 부분들을 Axios 로 변경하기
- 슬라이더 prev btn 첫 클릭 시 오른쪽이 아닌 왼쪽으로 이동하는 이슈 수정하기
- 세션을 사용한 간단 로그인 및 메인 화면 우측의 사용자 아이콘 설정하기

---

#### 🤗 후기

- 처음엔 그저 깔끔함을 위해 분리했던 styled-components 를 여러 컴포넌트에서 재사용하며 정말 편리하다는 걸 느꼈다!
- 타입스크립트는 아직까지 까다롭다는(?) 느낌이다. 그치만, 자동완성 기능 못잃어...
- 신세계를 가져다준 framer motion은 정말정말 대단한 라이브러리라는 것을 느꼈다.. 내가 만들고 싶던 사이트의 첫 화면을 이 녀석으로 만들 수 있을 것 같단 생각에 너무 행복함.
- react-hook-form 은 정말 편리한 것 같다. 자주 사용하게 될 것 같다.
- 베리베리 아쉬운 점 첫번째, 여기서도 쿼리요청 저기서도 쿼리요청(?)인 점.
- 그래도, 페이지를 만들면서 SPA, SSR, CSR에 대해 공부할 수 있어서 좋았다.
