const getItemsJSON = async () => {
    const url =
      "../json/items.json";
  
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
    console.log(response);

  };
