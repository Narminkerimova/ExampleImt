import { createContext, useEffect, useState } from "react";

export const MainContext = createContext();

function MainProvider({ children }) {
  const [product, setProduct] = useState([]);
  const [basket, setBasket] = useState([]);
  const [wish, setWish] = useState([]);
  const url = "http://localhost:3000/products/";

  async function getElement(url) {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setProduct(data);
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteElement(url, id) {
    try {
      const res = await fetch(url+id, {
        method: "DELETE",
      });
      getElement(url)
    } catch (error) {
      console.log(error);
    }
  }

  async function postElement(url, body) {
    try {
      console.log("p", body);

      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body)
      });
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  function addBasket(obj) {
    const addedElement = basket.find((x) => x._id === obj._id);
    if (addedElement) {
        addedElement.count++
        setBasket([...basket])
    }
    else{
        setBasket([...basket, { ...obj, count:1 }]);

    }
  }

  useEffect(() => {
    getElement(url);
  }, []);
  console.log(product);

  return (
    <MainContext.Provider value={{basket, product, deleteElement, url, postElement }}>
      {children}
    </MainContext.Provider>
  );
}

export default MainProvider;
