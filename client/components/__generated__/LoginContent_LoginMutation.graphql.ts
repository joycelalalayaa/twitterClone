/**
 * @generated SignedSource<<11111d1cc6027434555dc38d3a653c74>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type LoginContent_LoginMutation$variables = {
  password: string;
  username: string;
};
export type LoginContent_LoginMutation$data = {
  readonly login: {
    readonly id: string;
  } | null | undefined;
};
export type LoginContent_LoginMutation = {
  response: LoginContent_LoginMutation$data;
  variables: LoginContent_LoginMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "password"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "username"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "password",
        "variableName": "password"
      },
      {
        "kind": "Variable",
        "name": "username",
        "variableName": "username"
      }
    ],
    "concreteType": "User",
    "kind": "LinkedField",
    "name": "login",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "LoginContent_LoginMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "LoginContent_LoginMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "032d40c678391cb2b2d56efe24505ac6",
    "id": null,
    "metadata": {},
    "name": "LoginContent_LoginMutation",
    "operationKind": "mutation",
    "text": "mutation LoginContent_LoginMutation(\n  $password: String!\n  $username: String!\n) {\n  login(username: $username, password: $password) {\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "aa1a0f5ff0c472f178218db1f7ac153d";

export default node;
