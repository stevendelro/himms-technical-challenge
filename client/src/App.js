import { bindActionCreators } from 'redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import React, { useEffect } from 'react'

import { fetchReports } from './actions/actionCreators'
import Home from '../src/pages/Home'

const App = ({ fetchReports, loading }) => {
  useEffect(() => fetchReports(), [])
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home loading={loading} />
        </Route>
      </Switch>
    </Router>
  )
}

const mapStateToProps = store => ({ loading: store.spam.isLoading })

const mapDispatchToProps = dispatch =>
  bindActionCreators({ fetchReports }, dispatch)


export default connect(mapStateToProps, mapDispatchToProps)(App)
