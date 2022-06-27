```
💡 IDE 우측 상단의 `미리보기`를 통해 README.md 파일을 읽어주세요!
```

# goormIDE

구름IDE에 오신 것을 환영합니다!

구름IDE는 개발자들을 위한 강력한 클라우드IDE입니다.

`즐거운 코딩하세요! -구름IDE팀-`

## MERN bolierplate

- 기술
    - 본 프로젝트는 `React.js` `Express` `MongoDB` `Node.js`를 중점적으로 사용합니다.
- 대상
    - javascript 언어 공부 후 웹 전체를 구현해보고싶으신 분
    - 프론트엔드, 백엔드 각각의 매력을 알고싶으신 분
    - 스타트업에서 많이 사용하는 MERN 스택을 경험해보고싶으신 분
    - 만들고 싶은 웹 프로젝트의 주제가 확실히 있으신 분
- 상세 설명
    - sample의 이름으로 프론트 - 백엔드 api 연동이 되어있는 상태입니다.
        - 클라이언트에서 문자를 입력하면, DB에 저장해주는 로직이 구현되어있습니다.
    - 보일러플레이트를 이용하여 나만의 프로젝트를 완성해보세요!
- 폴더구조
    ```
    .
    |-- client
    |   |-- node_modules
    |   |-- package-lock.json
    |   |-- package.json
    |   |-- public
    |   ┕-- src
    |        |-- components
    |        |-- containers
    |        |-- index.css
    |        `-- index.js
    `-- server
        |-- config
        |-- node_modules
        |-- package-lock.json
        |-- package.json
        `-- src
            |-- controllers
            |-- index.js
            |-- middlewares
            |-- models
            |-- routes
            `-- services

    ```

## 🎨 Usage

1. URL과 포트 확인
    1. 상단 메뉴바의 `프로젝트 > 실행URL과포트` 클릭하기
    2. 3000, 3001포트로 각각 client, server 도메인 등록하기 (domain은 자유롭게 !)
    3. 3000에 client, 3001에 server가 띄워집니다.
2. 환경변수 및 config 설정
    1. client 경로에 `.env.development` 파일을 생성합니다.
    2. 해당 파일에 `REACT_APP_SERVER_URL = <본인이 설정한 server 도메인>` 을 넣어줍니다.
    3. server 경로에 `config/default.js` 파일을 생성해줍니다.
    4. 해당 파일에 다음과 같이 설정해줍니다.
    ```
    module.exports = {
        db: { //mongo db atlas cluster를 생성하여 다음 정보를 채워주세요.
           userName: "",
           password: "",
           cluster: "",
        },
        port: 3001, //1번에서 설정한 서버 포트에 맞게 설정합니다.
        client: "" //1번에서 설정한 클라이언트 URL과 같이 설정합니다.
    }
    ```
3. 의존성 확인
    1. client 및 server 경로에서 `node_modules`가 설치되어 있는지 확인하기
    2. 설치되어 있지 않다면 client와 server 경로에서 각각 `npm install`
4. 프로젝트 시작하기
    - 실행 명령어(IDE 우측 상단)
        - `run client`: 프론트엔드 실행
        - `run server`: 백엔드 실행

## 🔧 Tip & Guide

- 명령어 기능
    - 우측 상단에 프로젝트 실행만으로 프로젝트를 실행하실 수 있습니다.
    - 상단 메뉴바의 `프로젝트 > 공통/빌드/실행/테스트` 메뉴로도 실행하실 수 있습니다.
- URL과 PORT
    - `프로젝트 > 실행URL과 포트`에서 포트와 URL을 확인 및 변경하실 수 있습니다.
    - 처음에는 Default 값이 들어가 있습니다.