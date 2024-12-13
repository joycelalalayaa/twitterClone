/**
 * @generated SignedSource<<6eaf9dd9a34d6587fc6db5e565937682>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type UserContentQuery$variables = {
  user_id: string;
};
export type UserContentQuery$data = {
  readonly genUserByID: {
    readonly firstName: string;
    readonly genPosts: ReadonlyArray<{
      readonly id: string;
      readonly " $fragmentSpreads": FragmentRefs<"TweetDisplay_post">;
    }>;
    readonly id: string;
    readonly lastName: string;
    readonly username: string;
  } | null | undefined;
};
export type UserContentQuery = {
  response: UserContentQuery$data;
  variables: UserContentQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "user_id"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "user_id",
    "variableName": "user_id"
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
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "username",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "UserContentQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "genUserByID",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Post",
            "kind": "LinkedField",
            "name": "genPosts",
            "plural": true,
            "selections": [
              (v2/*: any*/),
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "TweetDisplay_post"
              }
            ],
            "storageKey": null
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
    "name": "UserContentQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "genUserByID",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Post",
            "kind": "LinkedField",
            "name": "genPosts",
            "plural": true,
            "selections": [
              (v2/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "content",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "User",
                "kind": "LinkedField",
                "name": "genAuthor",
                "plural": false,
                "selections": [
                  (v3/*: any*/),
                  (v4/*: any*/),
                  (v2/*: any*/),
                  (v5/*: any*/)
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "updatedAt",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "c6d8e8767b48b226f9250d0eedfc4ba6",
    "id": null,
    "metadata": {},
    "name": "UserContentQuery",
    "operationKind": "query",
    "text": "query UserContentQuery(\n  $user_id: String!\n) {\n  genUserByID(user_id: $user_id) {\n    id\n    firstName\n    lastName\n    username\n    genPosts {\n      id\n      ...TweetDisplay_post\n    }\n  }\n}\n\nfragment PostBox_user on User {\n  id\n  firstName\n  lastName\n  username\n}\n\nfragment TweetDisplay_post on Post {\n  id\n  content\n  genAuthor {\n    firstName\n    lastName\n    ...PostBox_user\n  }\n  updatedAt\n}\n"
  }
};
})();

(node as any).hash = "8a9efede72ad69fd62ef10241238bc58";

export default node;
