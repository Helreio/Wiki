import { Root as HTMLRoot } from "hast"
import { toString } from "hast-util-to-string"
import { QuartzTransformerPlugin } from "../types"
import { escapeHTML } from "../../util/escape"

export interface Options {
  descriptionLength: number
  removeExternalLinks: boolean
}

const defaultOptions: Options = {
  descriptionLength: 150,
  removeExternalLinks: true,
}

export const Description: QuartzTransformerPlugin<Partial<Options> | undefined> = (userOpts) => {
  const opts = { ...defaultOptions, ...userOpts }
  return {
    name: "Description",
    htmlPlugins() {
      return [
        () => {
          return async (tree: HTMLRoot, file) => {
            const frontMatterDescription = file.data.frontmatter?.description
            const text = escapeHTML(toString(tree))

            if (opts.removeExternalLinks) {
              frontMatterDescription?.replace(
                /(?:https?:\/\/)?([\da-z\.-]+)\.(?:[a-z\.]{2,6})(?::\d+)?(?:[\/\w\.-]*)/g,
                "$1",
              )
              text.replace(
                /(?:https?:\/\/)?([\da-z\.-]+)\.(?:[a-z\.]{2,6})(?::\d+)?(?:[\/\w\.-]*)/g,
                "$1",
              )
            }

            const desc = frontMatterDescription ?? text
            const sentences = desc.replace(/\s+/g, " ").split(/\.\s/)
            let finalDesc = ""
            let sentenceIdx = 0
            const len = opts.descriptionLength

            if (sentences[0].length >= len) {
              const firstSentence = sentences[0].split(" ")
              while (finalDesc.length < len) {
                const sentence = firstSentence[sentenceIdx]
                if (!sentence) break
                finalDesc += sentence + " "
                sentenceIdx++
              }
              finalDesc = finalDesc.trimEnd() + "..."
            } else {
              while (finalDesc.length < len) {
                const sentence = sentences[sentenceIdx]
                if (!sentence) break
                finalDesc += sentence + "."
                sentenceIdx++
              }
            }

            file.data.description = finalDesc
            file.data.text = text
          }
        },
      ]
    },
  }
}

declare module "vfile" {
  interface DataMap {
    description: string
    text: string
  }
}
