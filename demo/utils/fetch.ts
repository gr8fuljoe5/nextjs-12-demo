const fetchData = async (uri: Request | string) => {
  try {
    const response = await fetch(uri);
    let json: any;
    json = await response.json();
    return json;
  } catch (error) {
    console.error("error", error);
    return error;
  }
};

export default fetchData;
