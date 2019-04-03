// 우리 앱의 모든 설정들

import { GraphQLServer } from "graphql-yoga";
import cors from "cors";
import helmet from "helmet";
import logger from "morgan";
import schema from "./schema";

class App {
  public app: GraphQLServer;
  constructor() {
    this.app = new GraphQLServer({
      // schema: schema
      // 최신 자바스크립트에서 객체의 key와 value가 같으면 하나만 적으면 된다.
      schema
    });
    this.middlewares();
  }
  private middlewares = (): void => {
    this.app.express.use(cors());
    this.app.express.use(logger("dev"));
    this.app.express.use(helmet());
  };
}

export default new App().app;
