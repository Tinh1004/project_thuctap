import { useParams } from "react-router-dom"

export default function SearchPage(props) {
    const {search} = useParams();
    return (
        <section className="home">
            <div className="text">
                Search Page + {search}
            </div>
      </section>
    )
}