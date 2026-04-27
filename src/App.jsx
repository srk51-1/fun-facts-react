function FunFactCard({ fact }) {
  return <p>{fact}</p>;
}

function App() {
  return (
    <div>
      <h1>Fun Facts About Me</h1>

      <FunFactCard fact="1. I like playing video games." />
      <FunFactCard fact="2. I enjoy anime and creative designs." />
      <FunFactCard fact="3. I like learning coding step by step." />
      <FunFactCard fact="4. I enjoy music and playing piano." />
    </div>
  );
}

export default App;