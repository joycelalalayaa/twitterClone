/**
 * @generated SignedSource<<921f1c0e107a6aaea5a39fc62fff1412>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type PostBoxEditPostMutation$variables = {
  content: string;
  password: string;
  postId: string;
  username: string;
};
export type PostBoxEditPostMutation$data = {
  readonly editPost: {
    readonly content: string;
    readonly id: string;
  };
};
export type PostBoxEditPostMutation = {
  response: PostBoxEditPostMutation$data;
  variables: PostBoxEditPostMutation$variables;
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
  "name": "postId"
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
    "name": "editPost",
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
        "name": "content",
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
    "name": "PostBoxEditPostMutation",
    "selections": (v4/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v2/*: any*/),
      (v1/*: any*/),
      (v3/*: any*/)
    ],
    "kind": "Operation",
    "name": "PostBoxEditPostMutation",
    "selections": (v4/*: any*/)
  },
  "params": {
    "cacheID": "1ecedaa6045bd3d8c6ddac19ddfee636",
    "id": null,
    "metadata": {},
    "name": "PostBoxEditPostMutation",
    "operationKind": "mutation",
    "text": "mutation PostBoxEditPostMutation(\n  $content: String!\n  $postId: String!\n  $password: String!\n  $username: String!\n) {\n  editPost(content: $content, post_id: $postId, password: $password, username: $username) {\n    id\n    content\n  }\n}\n"
  }
};
})();

(node as any).hash = "91ee423c766fb806599f3dd4f51322ff";

export default node;
