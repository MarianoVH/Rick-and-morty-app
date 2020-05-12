export const callToApi = async (URL: string) => {
  const data = await fetch(URL);
  const dataJson = await data.json();
  return dataJson;
}
