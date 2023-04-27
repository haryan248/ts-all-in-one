// declare global의 조건
// import, export가 밖에 있어야함 (모듈 시스템이여야 한다.)
// export {}; > 없으면 script로 침

declare global {
  interface Error {
    status: number;
  }
  namespace Express {
    export interface User {
      zerocho: string;
    }
  }
}
export {};
