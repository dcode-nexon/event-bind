# 컴포넌트에 이벤트 연결

## 리얼돔 (RealDOM)

- HTML태그를 브라우저가 해석을 해서 DOM형태로 화면에 렌더링
- 일단 브라우저에 리얼돔으로 렌더링된 이후에 해당 요소를 변경할땐 querySelector로 해당 요소 선택후 이벤트 연결
- 리얼돔 요소를 렌더링 이후 제어할때 시스템 리소스를 많이 소비

## 가상돔 (VirtualDOM)

- 메모리상에서 자바스크립트 문법을 이용하여 빠르게 가상의 DOM을 JSX문법체계를 이용해서 생성
- 기존 리얼돔대비 변경되는 부분을 메모리상에서 비교해서 빠르게 수정한다음에 리얼돔에 적용
- 가상돔에 직접 이벤트 핸들러 연결
