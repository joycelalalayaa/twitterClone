import {
  Environment,
  FetchFunction,
  Network,
  RecordSource,
  Store,
} from "relay-runtime";

// Relay passes a "params" object with the query name and text. So we define a helper function
// to call our fetchGraphQL utility with params.text.
const fetchRelay: FetchFunction = (params, variables) => {
  return fetchGraphQL(params.text, variables);
};

const fetchGraphQL = async (
  text: string | null | undefined,
  variables: unknown
) => {
  // TODO: put this in a .env file before deploying...
  const url = "http://localhost:4000/";

  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: text,
      variables,
    }),
  });

  return await response.json();
};

function createEnvironment() {
  const network = Network.create(fetchRelay);
  const store = new Store(new RecordSource());
  return new Environment({ store, network });
}

export default createEnvironment();
