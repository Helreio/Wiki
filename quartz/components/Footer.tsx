import { QuartzComponentConstructor } from "./types"
import { OptionType } from "../plugins/types"
import style from "./styles/footer.scss"
import { version } from "../../package.json"

interface Optionss {
  links: Record<string, string>
}

console.log(globalThis.remark_config)

export default ((opts?: Optionss) => {
  function Footer() {
    const year = new Date().getFullYear()
    const links = opts?.links ?? []
    return (
      <footer class={`${displayClass ?? ""}`}>
        <hr />
        <p style="margin-bottom:4px;font-weight:bold;font-size:2em;">
          Share your thoughts with <a class="internal" href="/Projects/Obsidian/quartz-comments">Remark42</a>
        </p>
        <div id="remark42"></div>
        <hr />
        <p>
          © be-far {year}. Powered by <a href="https://quartz.jzhao.xyz/">Quartz</a>.
        </p>
        <p>
        not legal advice 🤟
        </p>
        <ul>
          {Object.entries(links).map(([text, link]) => (
            <li>
              <a href={link}>{text}</a>
            </li>
          ))}
        </ul>
      </footer>
    )
  }

  Footer.css = style
  return Footer
}) satisfies QuartzComponentConstructor
