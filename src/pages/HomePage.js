import Content from "../components/content/content";

import AppDefault from "./app_default/AppDefault";

export default function HomePage(props) {
  return (
    <AppDefault>
      <section className="home">
        <div className="text">
          <Content />
        </div>
      </section>
    </AppDefault>
  );
}
