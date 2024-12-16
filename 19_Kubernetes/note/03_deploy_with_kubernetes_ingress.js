// Kubernetes Ingress

//      강의자료에 없는 내용만 필기

//      Kubernetes Ingress 란?

//          Kubernetes에서 로드밸런서 역할을 하는 것

//          인증서를 설치해 HTTPS로 트래픽을 받을 수 있음

//      부하분산기(로드밸런서) 와 인그레스

//          공통점
//              SSL 인증서를 설치해 HTTPS로 통신할 수 있게 해줌
//              엔드포인트에 따라 경로가 있고 경로에 따라 트래픽을 분산함

//          부하분산기
//              파드 종류별로 하나씩 생성됨

//          인그레스
//              부하분산기를 업그레이드해서 인그레스로 만듬


// Kubernetes Ingress 실습

//      강의자료 보고 실습 진행

//      강의자료에 없는 내용

//      1. 인그레스 생성 후 Ingress의 상태가 
//          'All backend  services are in UNHEALTHY' 인 경우 해결 방법

//          원인
//              생성한 'my-backend-project-ingress' 인그레스 눌러서 들어가보면 
//               아래에 디폴트로 생성된 '부하 분산기'의 링크가 나옴

//              부하 분산기 링크 눌러서 들어가보면 아래의 '백엔드 서비스' 의
//               '1. (부하분산기 이름)' 의 '상태 확인' 의 링크가 있음

//              상태 확인(헬스 체커) 링크 눌러서 들어가보면
`               경로: /
                프로토콜: HTTP
`//             이렇게 되어 있는데 헬스체커가 디폴트로 생성되며
//              엔드포인트는 / 로, 프로토콜은 HTTP 로 설정된 것

//          방법1) TCP 3000 헬스체크 변경

//              디폴트로 생성된 헬스체커(상태 확인)에 들어가서 위의 수정 버튼을 눌러
//              TCP 3000 으로 헬스체크를 변경하는 것

//              하지만 이 방법은 수정해도 잠깐 바뀌어 있다가 리프레시되어 원상복구됨

//          방법2) HTTP / API 만들어 재배포

//              HTTP 프로토콜의 / 엔드포인트로 REST API를 만든 다음 재배포하는 것
//              상태코드 200 성공이 떨어지도록

//              => 이 방법으로 실습하기

//      2. HTTP 의 / API 만들기

//          여기서 backend/src/apis 내에 새로운 api 폴더를 생성하는 것이 아니라
//          그냥 src 안에 app.controller.ts 파일 만들어 api 작성하는데

//          기능이 있는 api를 만드는 것이 아니기 때문에 src 안에 app.module.ts와
//          같은 레벨에 app.controller.ts를 만들어 api 작성하는 것