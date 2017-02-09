export default () => (
  <div>
    Hello world
    <p>scoped!</p>
    <img src="/static/elephant.jpg" />
    <style jsx>{`
      p {
        color: blue;
      }
      div {
        background: red;
      }
      @media (max-width: 600px) {
        div {
          background: blue;
        }
      }
    `}</style>
  </div>
)
