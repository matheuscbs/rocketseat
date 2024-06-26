import styles from "./App.module.css";
import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/sidebar";
import "./global.css";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/68289167?v=4",
      name: "Matheus Cardoso",
      role: "Web developer",
    },
    content: [
      { type: "paragraph", text: "Fala galeraa 👋" },
      {
        type: "paragraph",
        text: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", text: "👉 jane.design/doctorcare" },
      { type: "tags", text: "#novoprojeto #nlw #rocketseat" },
    ],
    publishedAt: new Date("2024-06-21 16:08:30"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/68289167?v=4",
      name: "Draconis Dev",
      role: "Developer",
    },
    content: [
      { type: "paragraph", text: "Fala galeraa 👋" },
      {
        type: "paragraph",
        text: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", text: "👉 jane.design/doctorcare" },
      { type: "tags", text: "#novoprojeto #nlw #rocketseat" },
    ],
    publishedAt: new Date("2024-06-21 16:08:30"),
  },
];

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </>
  );
}
