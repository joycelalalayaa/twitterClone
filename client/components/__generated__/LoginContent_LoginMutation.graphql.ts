/**
 * @generated SignedSource<<e772a04f6ed98583b870b8ec85e20b85>>
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
    readonly username: string;
  };
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
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "username",
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
    "cacheID": "56cf6217d7a1d15b3906c52fc1c97739",
    "id": null,
    "metadata": {},
    "name": "LoginContent_LoginMutation",
    "operationKind": "mutation",
    "text": "mutation LoginContent_LoginMutation(\n  $password: String!\n  $username: String!\n) {\n  login(password: $password, username: $username) {\n    id\n    username\n  }\n}\n"
  }
};
})();

(node as any).hash = "93a1a19ab8a1bc8105e18f2188ed1d31";

export default node;
