/**
 * @generated SignedSource<<e913bf5ac268194de4852803d5a0ee61>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type RegisterContent_CreateUserMutation$variables = {
  firstName: string;
  lastName: string;
  password: string;
  username: string;
};
export type RegisterContent_CreateUserMutation$data = {
  readonly registerUser: {
    readonly id: string;
    readonly username: string;
  };
};
export type RegisterContent_CreateUserMutation = {
  response: RegisterContent_CreateUserMutation$data;
  variables: RegisterContent_CreateUserMutation$variables;
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
    "name": "RegisterContent_CreateUserMutation",
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
    "name": "RegisterContent_CreateUserMutation",
    "selections": (v4/*: any*/)
  },
  "params": {
    "cacheID": "def8599cb9aae38625c110106e55cb95",
    "id": null,
    "metadata": {},
    "name": "RegisterContent_CreateUserMutation",
    "operationKind": "mutation",
    "text": "mutation RegisterContent_CreateUserMutation(\n  $password: String!\n  $username: String!\n  $lastName: String!\n  $firstName: String!\n) {\n  registerUser(password: $password, username: $username, lastName: $lastName, firstName: $firstName) {\n    id\n    username\n  }\n}\n"
  }
};
})();

(node as any).hash = "f0e8e3a481e95b9f53145c435b7808ad";

export default node;
