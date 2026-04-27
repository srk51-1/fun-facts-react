function FunFactCard({ fact }) {
  return <p>{fact}</p>;
}

function App() {
  return (
    <div>
      <h1>Fun Facts About Me</h1>

      <FunFactCard fact="I like playing video games." />
      <FunFactCard fact="I enjoy anime and creative designs." />
      <FunFactCard fact="I like learning coding step by step." />
      <FunFactCard fact="I enjoy music and playing piano." />
    </div>
  );
}

export default App;