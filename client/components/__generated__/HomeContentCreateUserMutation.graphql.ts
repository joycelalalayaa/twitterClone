/**
 * @generated SignedSource<<f45344aea68f8df0c8eb357bc13bb008>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type HomeContentCreateUserMutation$variables = {
  password: string;
  username: string;
};
export type HomeContentCreateUserMutation$data = {
  readonly createUser: {
    readonly id: string;
    readonly password: string;
    readonly username: string;
  };
};
export type HomeContentCreateUserMutation = {
  response: HomeContentCreateUserMutation$data;
  variables: HomeContentCreateUserMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "password"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "username"
},
v2 = [
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
    "name": "createUser",
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
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "password",
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
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "HomeContentCreateUserMutation",
    "selections": (v2/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "HomeContentCreateUserMutation",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "815e2d1f4753b5288be5ecfe8efb4d34",
    "id": null,
    "metadata": {},
    "name": "HomeContentCreateUserMutation",
    "operationKind": "mutation",
    "text": "mutation HomeContentCreateUserMutation(\n  $username: String!\n  $password: String!\n) {\n  createUser(username: $username, password: $password) {\n    id\n    username\n    password\n  }\n}\n"
  }
};
})();

(node as any).hash = "0b61125964988c4e43183730008e3533";

export default node;
