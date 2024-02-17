import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { pathToRoot } from "../util/path"
import { i18n } from "../i18n"
import { classNames } from "../util/lang"
import style from "../components/styles/navbar.scss"
import SearchConstructor from "../components/Search"
import DarkmodeConstructor from "./Darkmode"

const Darkmode = DarkmodeConstructor()
const Search = SearchConstructor()
const NavBar: QuartzComponent = (props: QuartzComponentProps) => {
  const title = props.cfg?.pageTitle ?? i18n(props.cfg.locale).propertyDefaults.title
  const baseDir = pathToRoot(props.fileData.slug!)

  return (
    <nav>
      <h1 className={classNames(props.displayClass, "page-title")}>
        <a href={baseDir}>{title}</a>
      </h1>

      <div class={"desktop"}>
        <ul>
          <li><a href={baseDir}>📙블로그</a></li>
          <li><a href="/About-Me">🙍‍♂️이력</a></li>
          <li><a href="/Project">📂프로젝트</a></li>
        </ul>
      </div>

      <div class={"mobile"}>
        <Search {...props} />
        <Darkmode {...props} />
      </div>
    </nav>
  )
}

NavBar.css = style

export default (() => NavBar) satisfies QuartzComponentConstructor