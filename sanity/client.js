import sanityClient from "@sanity/client";

const config = {
  dataset: "production",
  projectId: "d8tx68dl",
  apiVersion: "2021-04-28",
  token: 'skNyNesL2rVORROdHTFxO2lL0GSUwQHhYSZphfvsxXaGjDenX8jq67tHCPMFB9k65OpIIjcTVWrIKBAlEyxzvWhqsNhMvzN83mil7WM0EqNWtNHwowdHF8a7OUz9nuQ5rt1LVpQ9Htl5bMp92rdR8jqqMBUuW3ErGjFVdPIYul1bZ7CaNxdx',
  useCdn: false,
};

const client = sanityClient(config);

export default client;