/**
 * @generated SignedSource<<d5c585752c9a8dd2c57f9dff7a9b5a81>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type HomeContentQuery$variables = {
  password: string;
  username: string;
};
export type HomeContentQuery$data = {
  readonly genUser: {
    readonly firstName: string;
    readonly id: string;
    readonly lastName: string;
    readonly " $fragmentSpreads": FragmentRefs<"PostBox_user">;
  } | null | undefined;
};
export type HomeContentQuery = {
  response: HomeContentQuery$data;
  variables: HomeContentQuery$variables;
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
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "firstName",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "lastName",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "HomeContentQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "genUser",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "PostBox_user"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "HomeContentQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "genUser",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "dfa1e4da0a02af7437039b3cc491ff47",
    "id": null,
    "metadata": {},
    "name": "HomeContentQuery",
    "operationKind": "query",
    "text": "query HomeContentQuery(\n  $password: String!\n  $username: String!\n) {\n  genUser(password: $password, username: $username) {\n    id\n    firstName\n    lastName\n    ...PostBox_user\n  }\n}\n\nfragment PostBox_user on User {\n  firstName\n  lastName\n}\n"
  }
};
})();

(node as any).hash = "d060e1b3b4b529021df39525c6ee47f8";

export default node;
