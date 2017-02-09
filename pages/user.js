import React from 'react'
import fetch from 'node-fetch'
export default class extends React.Component {
  static async getInitialProps () {
    const res = await fetch('http://api.football-data.org/v1/competitions/426/leagueTable')
    const json = await res.json()
    return {data: json}
  }

  render() {
    return (
      <div>{JSON.stringify(this.props.data)}</div>
    )
  }
}
