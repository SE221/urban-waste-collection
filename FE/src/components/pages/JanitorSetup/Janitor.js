import React from 'react'
import { Link } from 'react-router-dom'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './Navbar'
import janitoraccount from './JanitorAccount'

export default function Janitor() {
    return (
        <div>
		<>
			<Router>
				<Navbar />
				<Switch>
					<Route path="/janitor" element="Home" />
					<Route path="/janitoraccount" component= {janitoraccount} />
					<Route path="/week1" element="Week 1" />
					<Route path="/week2" element="Week 2" />
					<Route path="/week3" element="Week 3" />
					<Route path="/week4" element="Week 4" />
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
