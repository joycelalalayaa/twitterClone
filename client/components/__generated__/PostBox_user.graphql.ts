/**
 * @generated SignedSource<<a78a0b898b4f91076ff77fed684a2b7a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type PostBox_user$data = {
  readonly firstName: string;
  readonly lastName: string;
  readonly username: string;
  readonly " $fragmentType": "PostBox_user";
};
export type PostBox_user$key = {
  readonly " $data"?: PostBox_user$data;
  readonly " $fragmentSpreads": FragmentRefs<"PostBox_user">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "PostBox_user",
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
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "username",
      "storageKey": null
    }
  ],
  "type": "User",
  "abstractKey": null
};

(node as any).hash = "4e4b5eb020749c71daf6a725d5473419";

export default node;
