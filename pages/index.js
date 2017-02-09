import Layout from '../components/layout'

export default () => (
  <Layout>
    <div>Hello World.</div>
      <div>
        Hello world
        <p>scoped!</p>
        <img src="/static/elephant.jpg" />
        <style jsx>{`
          p {
            color: blue;
          }
          img {
            height: 25%;
            width: 25%;
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
  </Layout>
)
