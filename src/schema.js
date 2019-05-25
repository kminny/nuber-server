"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//import { GraphQLSchema } from "graphql";
var graphql_tools_1 = require("graphql-tools");
var merge_graphql_schemas_1 = require("merge-graphql-schemas");
var path_1 = __importDefault(require("path"));
// 모든 파일들이 배열안에 들어가 있다.
var allTypes = merge_graphql_schemas_1.fileLoader(path_1.default.join(__dirname, "./api/**/*.graphql"));
var allResolvers = merge_graphql_schemas_1.fileLoader(path_1.default.join(__dirname, "./api/**/*.resolvers.*"));
var mergedTypes = merge_graphql_schemas_1.mergeTypes(allTypes);
var mergedResolvers = merge_graphql_schemas_1.mergeResolvers(allResolvers);
var schema = graphql_tools_1.makeExecutableSchema({
    typeDefs: mergedTypes,
    resolvers: mergedResolvers
});
exports.default = schema;
//# sourceMappingURL=schema.js.map