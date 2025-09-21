## Lecture-2

### 성능 최적화 요약

#### 애니메이션 최적화

- **Reflow 최소화**: layout 연산이 발생하는 속성(`width`, `height`, `margin` 등) 변경 지양
- **Repaint 최소화**: color, background 변경 시 레이아웃 건너뛰기
- **GPU 활용**: `transform`, `opacity` 변경 시 레이아웃/페인트 과정 생략 가능

---

#### CSS 속성에 따른 영향

- **Reflow 발생 (Layout 재계산 필요)**

  - `position`, `width`, `height`, `left`, `top`, `right`, `bottom`
  - `margin`, `padding`, `border`, `border-width`
  - `display`, `float`, `font-family`, `font-size`, `font-weight`
  - `line-height`, `min-height`, `overflow`, `text-align`, `vertical-align`

- **Repaint 발생 (Paint만 다시 필요)**

  - `background`, `background-image`, `background-position`, `background-repeat`, `background-size`
  - `border-radius`, `border-style`, `box-shadow`
  - `color`, `outline`, `outline-color`, `outline-style`, `outline-width`, `text-decoration`

- **Reflow / Repaint 생략 가능 (GPU 처리)**

  - `transform`
  - `opacity`

---

#### Lazy Loading

- **정의**: 필요한 순간에만 코드 로드
- **장점**: 초기 번들 크기 감소, 초기 로딩 성능 ↑
- **단점**: 첫 사용 시 로딩 지연 발생 가능

---

#### Preloading

- **정의**: 곧 필요할 리소스를 미리 로드
- **활용 시점**

  1. 버튼 hover 시

  - 모달과 같이 특정 동작 직전에 필요한 경우, 사용자가 버튼을 누르기 전에 hover 이벤트 시점에 미리 로드

  2. 페이지 마운트 직후

  - 페이지가 로드되고 주요 컴포넌트가 모두 DOM에 마운트된 상태 (사용자가 상호작용할 준비가 된 시점)
  - 곧 사용될 가능성이 높은 리소스(예: 모달, 이미지 뷰어 등 Lazy 컴포넌트)를 이 시점에 preload

---

#### 이미지 Preloading

- **방법**: JS `Image` 객체로 미리 로드 후 캐시 사용
- **주의**: 캐시 활용 여부 확인 필요

---

#### 최종 체크리스트

1. 애니메이션 속성 최적화 (Reflow/Repaint 최소화)
2. `transform` / `opacity` 활용해 GPU 가속
3. Lazy Loading으로 초기 번들 최적화
4. Preloading으로 사용자 경험 보완
5. 이미지 Preloading으로 렌더링 지연 최소화

---

### 실행 방법

1. download sources

```
$ git clone https://github.com/performance-lecture/lecture-2.git
```

2. install dependencies

```
$ npm install
or
$ yarn
```

3. start development server

```
$ npm start
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
