import { useState } from "react";

function App() {
  const [images, setImages] = useState([
    {
      id: 1,
      url: "https://picsum.photos/800/1200?random=1",
      likes: 0,
      disLikes: 0,
    },
    {
      id: 2,
      url: "https://picsum.photos/800/1200?random=2",
      likes: 0,
      disLikes: 0,
    },

    {
      id: 3,
      url: "https://picsum.photos/800/1200?random=3",
      likes: 0,
      disLikes: 0,
    },
    {
      id: 4,
      url: "https://picsum.photos/800/1200?random=4",
      likes: 0,
      disLikes: 0,
    },
  ]);
  return (
    <div className="images-container">
      {images.map((image) => {
        return (
          <div key={image.id}>
            <img src={image.url} alt="" />
            <div className="buttons-container">
              <button>👍 {image.likes}</button>
              <button>👎 {image.disLikes}</button>
              <button>🗑</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
