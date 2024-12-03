/**
 * @generated SignedSource<<874ef056f422904a0b7deec69cff9c64>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type HomeContentQuery$variables = Record<PropertyKey, never>;
export type HomeContentQuery$data = {
  readonly addNumbers: number;
};
export type HomeContentQuery = {
  response: HomeContentQuery$data;
  variables: HomeContentQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Literal",
        "name": "a",
        "value": 8
      },
      {
        "kind": "Literal",
        "name": "b",
        "value": 7
      }
    ],
    "kind": "ScalarField",
    "name": "addNumbers",
    "storageKey": "addNumbers(a:8,b:7)"
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "HomeContentQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "HomeContentQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "4523625934fa7197081e73ab72b28ca6",
    "id": null,
    "metadata": {},
    "name": "HomeContentQuery",
    "operationKind": "query",
    "text": "query HomeContentQuery {\n  addNumbers(b: 7, a: 8)\n}\n"
  }
};
})();

(node as any).hash = "91e1814c481fd2189ef33b2db3451e69";

export default node;
