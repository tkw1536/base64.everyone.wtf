import * as React from "react"
import { CopyToClipboard } from "react-copy-to-clipboard"
import styles from "./ResultsDisplay.module.css"

export interface Base64Data {
    type: string,
    data: string,
}

/** Displays results for the base64 uri */
export default function ResultDisplay({ type, data }: Base64Data) {
    const b64: Base64Data = { type, data }

    const uri = makeDataURI(b64)

    const a = makeTag("a", "href", b64, {}, "Link Text")
    const img = makeTag("img", "src", b64)

    const css_link = makeTag("link", "href", b64, { rel: "stylesheet" })
    const js = makeTag("script", "src", b64)

    const css_url = `url("${CSS.escape(uri)}")`

    return <form onSubmit={(event) => event.preventDefault()}>
        <table className={styles.Output}>
            <thead>
                <tr>
                    <th style={{ width: "30%" }} />
                    <th style={{ width: "60%" }} />
                    <th style={{ width: "10%" }} />
                </tr>
            </thead>
            <tbody>
                <Output id="uri" value={uri}>
                    URI &nbsp;
                    <small>
                    (<a href={uri} target="_blank" rel="noopener noreferrer">Open As URL</a> *)
                    </small>
                </Output>
                <Output label="<a href=>" id="link" value={a} />
                <Output label="<script>" id="js" value={js} />

                <Output label="<img>" id="img" value={img} />
                <Output label="CSS url()" id="css_url" value={css_url} />

                <Output label="<link rel=stylesheet>" id="css_link" value={css_link} />
            </tbody>
        </table>

        <hr />
        <small>
            *) Not all Browsers Support opening all links. If it does not work try copy pasting the URL manually.
        </small>
    </form>
}

function makeTag(name: string, attr: string, data: Base64Data, attrs?: Record<string, string>, content?: string) {
    const element = document.createElement(name)
    if (attrs) {
        Object.entries(attrs).forEach(([key, value]) => element.setAttribute(key, value))
    }
    element.setAttribute(attr, makeDataURI(data))
    if (content) element.append(document.createTextNode(content))
    return element.outerHTML
}

function makeDataURI({ data, type }: Base64Data) {
    return `data:${type};base64,${data}`
}

function Output({ value, label, id, children }: { value: string, label?: string, id: string, children?: React.ReactNode}) {
    const [isCopied, setCopied] = React.useState<boolean>(false)
    const [timer, setTimer] = React.useState<NodeJS.Timeout | null>(null)

    // keep track if we are still mounted or not!
    const mounted = React.useRef(false)
    React.useEffect(() => {
        mounted.current = true
        return () => { mounted.current = false }
    })

    return <tr className={styles.Output}>
        <td>
            <label htmlFor={id}>{label ?? children}</label>
        </td>
        <td>
            <input type="text" readOnly={true} value={value} id={id} />
        </td>
        <td>
            <CopyToClipboard text={value} onCopy={() => {
                if(timer) clearTimeout(timer)
                setTimer(setTimeout(() => { if(!mounted.current) return; setTimer(null); setCopied(false) }, 1000))

                setCopied(true)
            }}><button>{ isCopied ? "Copied" : "Copy" }</button></CopyToClipboard>
        </td>
    </tr>
}