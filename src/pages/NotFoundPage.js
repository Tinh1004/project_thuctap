import { Link } from 'react-router-dom'

export default function NotFoundPage(props) {
	return (
		<section>
			<div className="pageNotFound">
				<div id="notfound">
					<div class="notfound">
						<div class="notfound-404">
							<h1>404</h1>
							<h2>Page not found</h2>
						</div>
						<Link to="/">Homepage</Link>
					</div>
				</div>
			</div>
		</section>
	)
}




