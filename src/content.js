import React from "react";

const StoreItem = ({ item, children }) => {
  return (
    <div
      style={{
        border: "1px solid grey",
        borderRadius: 10,
        width: 120,
        padding: 5,
      }}
    >
      <h2>{item.title}</h2>
      <img src={item.img} style={{ width: "100%" }} />
      <p>{item.description}</p>
      <span> price: {item.price}</span>

      {children}
    </div>
  );
};

const ItemList = ({ items }) => {
  return (
    <>
      {items.map((anItem) => (
        <StoreItem item={anItem}>
          <button style={{ padding: 10 }}>Buy christmas</button>
        </StoreItem>
      ))}
    </>
  );
};

const content = () => {
  const SKUs = [
    {
      title: "Death Star",
      price: 200,
      description: "this is a nice star",
      img: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f9/Death_star1.png/220px-Death_star1.png",
    },
    {
      title: "Death Star",
      price: 200,
      description: "this is a nice star",
      img: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f9/Death_star1.png/220px-Death_star1.png",
    },
    {
      title: "Death Star",
      price: 200,
      description: "this is a nice star",
      img: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f9/Death_star1.png/220px-Death_star1.png",
    },
    {
      title: "Death Star",
      price: 200,
      description: "this is a nice star",
      img: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f9/Death_star1.png/220px-Death_star1.png",
    },
    {
      title: "Death Star",
      price: 200,
      description: "this is a nice star",
      img: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f9/Death_star1.png/220px-Death_star1.png",
    },
    {
      title: "Death Star",
      price: 200,
      description: "this is a nice star",
      img: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f9/Death_star1.png/220px-Death_star1.png",
    },
    {
      title: "Death Star",
      price: 200,
      description: "this is a nice star",
      img: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f9/Death_star1.png/220px-Death_star1.png",
    },
    {
      title: "Death Star",
      price: 200,
      description: "this is a nice star",
      img: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f9/Death_star1.png/220px-Death_star1.png",
    },
    {
      title: "Death Star",
      price: 200,
      description: "this is a nice star",
      img: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f9/Death_star1.png/220px-Death_star1.png",
    },
    {
      title: "Death Star",
      price: 200,
      description: "this is a nice star",
      img: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f9/Death_star1.png/220px-Death_star1.png",
    },
    {
      title: "arwing",
      price: 300,
      description: "this is a nice ship",
      img: "data:image/jpeg;base64,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",
    },
    {
      title: "Majoras Mask",
      price: 500,
      description: "this is a nice Mask",
      img: "https://i.ytimg.com/vi/vbMQfaG6lo8/maxresdefault.jpg",
    },
  ];
  const isError = true;
  return (
    <Layout>
      <h1> My Shopify</h1>
      <p>This is my awesome page for shopping</p>
      <div
        className="flexWrapper"
        style={{ display: "flex", gap: 10, flexWrap: "wrap" }}
      >
        <ItemList items={SKUs} />
        {isError ? <p> ERRROR</p> : <span> not an error</span>}
      </div>
    </Layout>
  );
};

const Layout = ({ children }) => {
  return <div className="layout">{children}</div>;
};
export default content;
