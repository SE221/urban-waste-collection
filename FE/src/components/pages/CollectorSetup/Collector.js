import React from 'react'
import { Link } from 'react-router-dom'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './Navbar'
import collectoraccount from './CollectorAccount'

export default function Collector() {
    return (
        <div>
		<>
			<Router>
				<Navbar />
				<Switch>
					<Route path="/collector" element="Home" />
					<Route path="/collectoraccount" component= {collectoraccount} />
					<Route path="/week1" element="Week 1" />
					<Route path="/week2" element="Week 2" />
					<Route path="/week3" element="Week 3" />
					<Route path="/week4" element="Week 4" />
					<Route path="/currentroute" element="Current Route"></Route>
				</Switch>
			</Router>
		</>
            <Link to="/">
            <div className="fixed-bottom">
                <button className="primary-button">Log out</button>
            </div>
            </Link>
        </div>
    )
}
