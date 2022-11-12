import React from 'react'
import { Link } from 'react-router-dom'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from './Navbar'
import account from './Account'
export default function HomePage() {
    return (
        <div>
		<>
			<Router>
				<Navbar />
				<Switch>
					<Route path="/home" element="Home" />
					<Route path="/account" component= {account} />
					<Route path="/mcp" element="MCP" />
					<Route path="/vehicle" element="Vehicle" />
					<Route path="/task1" element="Task Assignment" />
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


