/**
 * @generated SignedSource<<3d4865785bc579488791a61a1acdcfe3>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type TweetDisplay_post$data = {
  readonly content: string;
  readonly genAuthor: {
    readonly firstName: string;
    readonly lastName: string;
    readonly " $fragmentSpreads": FragmentRefs<"PostBox_user">;
  };
  readonly id: string;
  readonly updatedAt: any;
  readonly " $fragmentType": "TweetDisplay_post";
};
export type TweetDisplay_post$key = {
  readonly " $data"?: TweetDisplay_post$data;
  readonly " $fragmentSpreads": FragmentRefs<"TweetDisplay_post">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "TweetDisplay_post",
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
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "User",
      "kind": "LinkedField",
      "name": "genAuthor",
      "plural": false,
      "selections": [
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
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "PostBox_user"
        }
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
  "type": "Post",
  "abstractKey": null
};

(node as any).hash = "2444732b6564c4ff4d0e3888b42aeb24";

export default node;
