export default function Home() {
  const backgroundImageUrl = "/public/laptop-2055522_1280.jpg";

  const containerStyle = {
    backgroundImage: `url(${backgroundImageUrl})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
  };
  const h1Style = {
    alignSelf: "flex-start",
    marginTop: "0",
    fontStyle: "italic",
  };

  return (
    <div style={containerStyle} className="text-center">
      <h1 className="display-2" style={h1Style}>
        HorizonX
      </h1>
    </div>
  );
}
