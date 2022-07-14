<<<<<<< HEAD
import Content from "../components/content/content";

export default function HomePage(props) {
    return (
        <section className="home">
            <div className="text">
                <Content/>
            </div>
      </section>
=======
import AppDefault from './app_default/AppDefault';


export default function HomePage(props) {
    return (
        <AppDefault>
            <section className="home">
                <div className="text">
                    Home Page
                </div>
            </section>
        </AppDefault>

>>>>>>> main
    )
}