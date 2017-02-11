import React from 'react'
import cowsay from 'cowsay-browser'

export default class extends React.Component {
  render() {
    return (
      <pre>{ cowsay.say({ text: 'hi there!' }) }</pre>
    )
  }
}
