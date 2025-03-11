export default function Home() {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-bold">Mood Voyage</h1>
          <p className="py-6 w-full">
            Discover the "why" behind your feelings with Mood Voyage, elegantly quantifying emotional needs through scientifically-backed Nonviolent Communication principles. When daily life obscures meaningful introspection, our intuitive approach helps you reconnect with what truly matters.
          </p>
          <div className="flex justify-center mt-4">
            <a href="https://github.com/silveralcid/Mood-Voyage/" target="_blank" rel="noopener noreferrer">
              <img src="https://img.shields.io/github/stars/silveralcid/mood-voyage?style=for-the-badge&logo=github&logoColor=white" alt="GitHub repo" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
