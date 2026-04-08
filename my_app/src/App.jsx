import Navbar from "./components/Navbar";
import PostCard from "./components/PostCard";

// IMPORT YOUR IMAGES
import img1 from "./assets/img1.jpg";
import img2 from "./assets/img2.jpg";
import img3 from "./assets/img3.jpg";

function App() {
  return (
    <div style={{ backgroundColor: "#000", minHeight: "100vh" }}>
      
      {/* Navbar */}
      <Navbar />

      {/* Posts */}
      <PostCard
        username="1 SWE"
        image={img1}
        caption="Started as strangers, leaving as a core memory"
      />

      <PostCard
        username="Sonam"
        image={img2}
        caption="Some looks never fade.ICONIC FOREVER"
      />

      <PostCard
        username="Chencho_7"
        image={img3}
        caption="Where the earth whispers to the sky"
      />

    </div>
  );
}

export default App;