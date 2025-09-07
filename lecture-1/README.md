## Lecture-1

### 성능 최적화 요약

#### 분석 도구

- **Lighthouse**: 페이지 성능, 접근성, SEO 등 자동 분석
- **Performance 탭**: 렌더링 성능, GC, CPU 사용량 추적
- **Network 탭**: 리소스 요청/응답 확인 (텍스트 압축, 캐싱, 크기 등)

---

#### 로딩 성능 최적화

- **이미지 사이즈 최적화**: 적절한 해상도로 조정
- **Code Splitting**: 라우트/모듈 단위 분할, 필요 시 로드
- **텍스트 압축**: gzip / brotli 적용

---

#### 렌더링 성능 최적화

- **Bottleneck 코드 제거**: 불필요한 반복문, 비효율적인 로직 → 최적화

---

#### 이미지 성능 최적화

- **일반 CDN**: 사용자와 가까운 서버에서 리소스 제공
- **이미지 CDN**: CDN + 이미지 리사이징/포맷 변환 (예: Cloudinary, Imgix)

---

#### 번들 최적화

- **번들 분석**: `webpack-bundle-analyzer`, `cra-bundle-analyzer`
- **Lazy Loading**: `React.lazy` + `Suspense`

```tsx
const ListPage = lazy(() => import('./pages/ListPage'));
<Suspense fallback={<div>Loading...</div>}>
  <Routes>
    <Route path='/' element={<ListPage />} />
  </Routes>
</Suspense>;
```

---

#### 최종 체크리스트

1. Lighthouse로 성능 측정
2. 이미지 크기 최적화
3. Bottleneck 코드 개선 (Performance 탭 활용)
4. Code Splitting / Lazy Loading
5. 텍스트 압축 확인 (gzip/brotli, Network 탭)

---

### 실행 방법

1. download sources

```
$ git clone https://github.com/performance-lecture/lecture-1.git
```

2. install dependencies

```
$ npm install
or
$ yarn
```

3. start development server

```
$ npm run start
or
$ yarn start
```

4. start json-server

```
$ npm run server
or
$ yarn server
```

\*3번의 dev server 와 다른 콘솔에서 띄워줍니다.

5. build + serve

```
$ npm run serve
or
$ yarn serve
```
