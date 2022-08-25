# URL Image download
 * URL 이미지를 파일로 다운로는 하는 샘플 소스입니다.
 * pkg 를 통해 단독 실행 파일로 packaging 할 수 있습니다.
 * `.env` 환경 변수를 통해 다운로드 경로 및 URL, URN 을 지정 할 수 있습니다.

## Required module
```bash
npm i axios dotenv fs path --save
```

## Test
```
npm run test
```

## pkg
 * /dist 폴더에 실행 가능한 파일이 생성됩니다.
 * 같은 경로에 `.env` 파일이 존재해야 합니다.
```
npm run build
```

## Required .env
```
BASE_URL={URL | http:aaaa.com}
BASE_URN={/URN | /image.jpg}
DOWN_PATH={downloadPath | d:\\download}
```


## reference
 * [KINDACODE](https://www.kindacode.com/article/using-axios-to-download-images-and-videos-in-node-js/)
