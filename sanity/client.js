import sanityClient from "@sanity/client";

const config = {
  dataset: "production",
  projectId: "jynt2wpw",
  apiVersion: "2021-04-28",
  token: 'skNF9n3oio8cuooOpQmTm9ivIXOoj9RRJKOxsIOmVnwcdeCbUMOAX89XaVA7F0VyZwXfdfZPTisRVdfQPVy9ioX0oTFbf978dOudMn5gKSyIIJwGfG2WGuNtkrn6JsMtbKz1TKLT7jcHB6IxwgdBhdcZUJLnHHRoIuK1tGLooa3JGLNwnyF9',
  useCdn: false,
};

const client = sanityClient(config);

export default client;