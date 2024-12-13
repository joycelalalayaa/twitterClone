/**
 * @generated SignedSource<<59627028583476e44d8d81be5763a25d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type PostBoxDeletePostMutation$variables = {
  password: string;
  postId: string;
  username: string;
};
export type PostBoxDeletePostMutation$data = {
  readonly deletePost: {
    readonly id: string;
  };
};
export type PostBoxDeletePostMutation = {
  response: PostBoxDeletePostMutation$data;
  variables: PostBoxDeletePostMutation$variables;
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
  "name": "postId"
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
        "name": "password",
        "variableName": "password"
      },
      {
        "kind": "Variable",
        "name": "post_id",
        "variableName": "postId"
      },
      {
        "kind": "Variable",
        "name": "username",
        "variableName": "username"
      }
    ],
    "concreteType": "Post",
    "kind": "LinkedField",
    "name": "deletePost",
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
    "name": "PostBoxDeletePostMutation",
    "selections": (v3/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/),
      (v2/*: any*/)
    ],
    "kind": "Operation",
    "name": "PostBoxDeletePostMutation",
    "selections": (v3/*: any*/)
  },
  "params": {
    "cacheID": "741c89540f10702266737f570ecf2261",
    "id": null,
    "metadata": {},
    "name": "PostBoxDeletePostMutation",
    "operationKind": "mutation",
    "text": "mutation PostBoxDeletePostMutation(\n  $postId: String!\n  $password: String!\n  $username: String!\n) {\n  deletePost(post_id: $postId, password: $password, username: $username) {\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "05199a6b50f267b0d1eef1b4a0d759a1";

export default node;
