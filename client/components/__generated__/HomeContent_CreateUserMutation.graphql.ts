/**
 * @generated SignedSource<<9ed60933815651cfdf72cbb05ce81c3a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type HomeContent_CreateUserMutation$variables = {
  firstName: string;
  lastName: string;
  password: string;
  username: string;
};
export type HomeContent_CreateUserMutation$data = {
  readonly registerUser: {
    readonly id: string;
    readonly username: string;
  };
};
export type HomeContent_CreateUserMutation = {
  response: HomeContent_CreateUserMutation$data;
  variables: HomeContent_CreateUserMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "firstName"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "lastName"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "password"
},
v3 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "username"
},
v4 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "firstName",
        "variableName": "firstName"
      },
      {
        "kind": "Variable",
        "name": "lastName",
        "variableName": "lastName"
      },
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
    "name": "registerUser",
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
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/),
      (v3/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "HomeContent_CreateUserMutation",
    "selections": (v4/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v2/*: any*/),
      (v3/*: any*/),
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "HomeContent_CreateUserMutation",
    "selections": (v4/*: any*/)
  },
  "params": {
    "cacheID": "0b419d95c1317bac72cba781bc9e7e9f",
    "id": null,
    "metadata": {},
    "name": "HomeContent_CreateUserMutation",
    "operationKind": "mutation",
    "text": "mutation HomeContent_CreateUserMutation(\n  $password: String!\n  $username: String!\n  $lastName: String!\n  $firstName: String!\n) {\n  registerUser(password: $password, username: $username, lastName: $lastName, firstName: $firstName) {\n    id\n    username\n  }\n}\n"
  }
};
})();

(node as any).hash = "24c3e940df868d181477c55da0083573";

export default node;
