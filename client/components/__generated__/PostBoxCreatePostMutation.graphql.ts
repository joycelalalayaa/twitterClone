/**
 * @generated SignedSource<<d4706c1ac8bd81bdaf5b279914968705>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type PostBoxCreatePostMutation$variables = {
  content: string;
  password: string;
  username: string;
};
export type PostBoxCreatePostMutation$data = {
  readonly createPost: {
    readonly id: string;
  };
};
export type PostBoxCreatePostMutation = {
  response: PostBoxCreatePostMutation$data;
  variables: PostBoxCreatePostMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "content"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "password"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "username"
},
v3 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "content",
        "variableName": "content"
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
    "concreteType": "Post",
    "kind": "LinkedField",
    "name": "createPost",
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
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "PostBoxCreatePostMutation",
    "selections": (v3/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v2/*: any*/),
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "PostBoxCreatePostMutation",
    "selections": (v3/*: any*/)
  },
  "params": {
    "cacheID": "b54a86fda210c9798af20c63b1ac393d",
    "id": null,
    "metadata": {},
    "name": "PostBoxCreatePostMutation",
    "operationKind": "mutation",
    "text": "mutation PostBoxCreatePostMutation(\n  $username: String!\n  $password: String!\n  $content: String!\n) {\n  createPost(username: $username, password: $password, content: $content) {\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "0862ad9c324d33fb52654be1811122ea";

export default node;
