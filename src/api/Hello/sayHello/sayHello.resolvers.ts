import { sayHelloResponse, SayHelloQueryArgs } from "src/types/graph";

const resolvers = {
  Query: {
    sayHello: (_, args: SayHelloQueryArgs): sayHelloResponse => {
      return {
        error: false,
        text: `Hello ${args.name}`
      };
    }
  }
};

export default resolvers;
