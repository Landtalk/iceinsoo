# 무인아이스크림 인수연구소

무인아이스크림 매장의 예상 월순이익, 권리금 회수기간과 창업 적합도를 계산하는 모바일 우선 웹사이트입니다.

- 대표 도메인: <https://iceinsoo.kr>
- 카카오톡 채널: <https://pf.kakao.com/_SdtxnX>
- 추천 저장소 이름: `iceinsoo-web`

## 기술 구조

이 프로젝트는 일반적인 React Router SPA가 아니라 React 19, Vite 8, vinext의 App Router 구조를 사용합니다.

`npm run build`는 다음 두 결과를 만듭니다.

1. `dist/`: vinext 서버·클라이언트 빌드
2. `out/`: Render Static Site용 HTML 정적 export

Render에서는 반드시 `out`을 Publish Directory로 사용해야 합니다.

## 로컬 실행

필수 환경:

- Node.js 22.13.0 이상
- npm

```bash
npm install
npm run dev
```

개발 서버가 출력한 로컬 주소를 브라우저에서 엽니다.

## 빌드

```bash
npm install
npm run build
```

빌드 과정에서 `/`, `/about`, `/privacy`, `/terms`, `/contact`, `/store-supplies`를 `out/`에 정적 HTML로 생성하고 내부 링크를 검사합니다.

## Render Static Site 배포

루트의 `render.yaml`을 Blueprint로 연결하면 설정이 자동 적용됩니다.

- Service type: Static Site (`type: web`, `runtime: static`)
- Build Command: `npm install && npm run build`
- Publish Directory: `out`
- Node version: `.node-version`의 `22.13.0`
- 대표 도메인: `iceinsoo.kr`

라우팅 규칙은 각 정적 페이지를 해당 `index.html`로 연결하고, 그 외 경로는 홈 문서로 rewrite합니다.

### Render에서 직접 설정하는 경우

1. GitHub 저장소를 Render에 연결합니다.
2. New → Static Site를 선택합니다.
3. 배포 브랜치를 `main`으로 설정합니다.
4. Build Command에 `npm install && npm run build`를 입력합니다.
5. Publish Directory에 `out`을 입력합니다.
6. 배포가 성공하면 Custom Domains에서 `iceinsoo.kr`을 추가합니다.

## DNS 연결

Render에서 도메인을 먼저 추가한 뒤 표시되는 값을 기준으로 DNS를 설정합니다.

- 루트 도메인 `@`: DNS 업체가 ALIAS/ANAME을 지원하면 Render의 `*.onrender.com` 주소로 연결
- ALIAS/ANAME을 지원하지 않으면 `A` 레코드를 Render의 안내 IP로 연결
- `www`: Render가 발급한 `*.onrender.com` 주소를 향하는 CNAME
- 기존 AAAA 레코드는 Render 연결을 방해할 수 있으므로 확인 후 제거

Render가 발급하는 `*.onrender.com` 주소는 서비스 생성 전에는 알 수 없으므로 임의로 입력하지 않습니다.

## GitHub 업로드

저장소를 생성한 다음 아래 순서로 연결합니다.

```bash
git init
git add .
git commit -m "Prepare iceinsoo for GitHub and Render deployment"
git branch -M main
git remote add origin https://github.com/<YOUR_ACCOUNT>/iceinsoo-web.git
git push -u origin main
```

실제 저장소 주소에 맞게 `<YOUR_ACCOUNT>`를 변경하세요.

## 설정 파일

- 사이트 대표 주소: `lib/constants.ts`
- 카카오톡 채널과 공개 UI 설정: `src/config/siteConfig.js`
- Render Blueprint: `render.yaml`
- 검색엔진 크롤링: `public/robots.txt`, `public/sitemap.xml`

진단 입력값과 계산 결과는 서버에 저장하지 않습니다. 환경변수와 비밀키는 `.gitignore`에 포함되며 프런트엔드 코드에 비밀 API 키를 넣으면 안 됩니다.

