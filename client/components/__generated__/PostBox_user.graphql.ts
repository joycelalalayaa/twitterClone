/**
 * @generated SignedSource<<81f2963f8b24d368c48b8555b4b150c1>>
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
  readonly id: string;
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

(node as any).hash = "8d1ba0526fa705b631bc45e0e4a94ee0";

export default node;
