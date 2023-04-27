import passport from "passport";
import { Strategy } from "passport-local";

interface Option {
  usernameField: string;
  passwordField: string;
  passReqToCallback?: false | null;
}

interface OptionWithReq {
  usernameField: string;
  passwordField: string;
  passReqToCallback?: true;
}
interface Done {
  (err: unknown | null, user?: Express.User | false, info?: unknown): void;
}
interface Callback {
  (userId: string, password: string, done: Done): void;
}
interface CallbackWithReq {
  (req: Express.Request, userId: string, password: string, done: Done): void;
}
declare class S {
  constructor(options: Option, callback: Callback);
  constructor(options: OptionWithReq, callback: CallbackWithReq);

  authenticate(): void;
}

const s: S = new S(
  {
    usernameField: "userId",
    passwordField: "password",
    // passReqToCallback: true,
  },
  async (userId, password, done) => {
    try {
      return done(null, false, { message: "비밀번호가 틀립니다." });
    } catch (err) {
      console.error(err);
      return done(err);
    }
  }
);

export default () => {
  passport.use(
    "local",
    new Strategy(
      {
        usernameField: "userId",
        passwordField: "password",
        // passReqToCallback: true,
      },
      async (userId, password, done) => {
        try {
          return done(null, false, { message: "비밀번호가 틀립니다." });
        } catch (err) {
          console.error(err);
          return done(err);
        }
      }
    )
  );
};
