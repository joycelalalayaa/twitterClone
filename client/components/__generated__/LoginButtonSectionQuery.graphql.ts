/**
 * @generated SignedSource<<597ed73930f0a1ba3386674442cf4fbd>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type LoginButtonSectionQuery$variables = {
  password: string;
  username: string;
};
export type LoginButtonSectionQuery$data = {
  readonly genUser: ReadonlyArray<{
    readonly firstName: string;
    readonly id: string;
    readonly lastName: string;
  }>;
};
export type LoginButtonSectionQuery = {
  response: LoginButtonSectionQuery$data;
  variables: LoginButtonSectionQuery$variables;
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
    "name": "genUser",
    "plural": true,
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
        "name": "firstName",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "lastName",
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
    "name": "LoginButtonSectionQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "LoginButtonSectionQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "86a10b1ade99292a7d64223a14d9e153",
    "id": null,
    "metadata": {},
    "name": "LoginButtonSectionQuery",
    "operationKind": "query",
    "text": "query LoginButtonSectionQuery(\n  $password: String!\n  $username: String!\n) {\n  genUser(password: $password, username: $username) {\n    id\n    firstName\n    lastName\n  }\n}\n"
  }
};
})();

(node as any).hash = "d06ebd6c1b49205ceaaab1aef8bdae73";

export default node;
