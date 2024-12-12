/**
 * @generated SignedSource<<c6305e788daddd7ac098635aaaae5378>>
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
    }
  ],
  "type": "User",
  "abstractKey": null
};

(node as any).hash = "4eee4de488c824321b52e71086607606";

export default node;
