import Head from "next/head"
import * as React from "react"
import DropArea from "../components/DropArea"
import type { Base64Data } from "../components/ResultsDisplay"
import ResultDisplay from "../components/ResultsDisplay"
import styles from "./index.module.css"

interface HomeState {
    forceType: boolean
    type: string
    
    base64: string | undefined
}

export default class Home extends React.Component {
    state: HomeState = { forceType: false, type: "text/plain", base64: undefined }

    private readonly handleDroppedFile = async (file: File) => {
        const { data, type } = await readBase64(file)
        this.setState( ({ forceType }: HomeState) => {
            if (forceType) return { base64: data }
            return { type: type, base64: data }
        })
    }

    private readonly onSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
    }
    private readonly onChangeCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ forceType: event.target.checked })
    }
    private readonly onChangeText = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ type: event.target.value })
    }
    private readonly onClearResults = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        this.setState({ base64: undefined })
    }

    render() {
        const { forceType, type, base64 } = this.state

        return <>
            <Head>
                <title>Convert File To Base64</title>
            </Head>
            <h1>Convert File To Base64</h1>

            <div className={styles.input}>
                <p>
                    This page allows you to convert a file to a <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs" target="_blank" rel="noopener noreferrer"><code>Base64 Data URI</code></a>. 
                    Such a URL allows you to embed (small) files directly into other files.
                    This approach is <a href="https://caniuse.com/datauri" target="_blank" rel="noopener noreferrer">supported by all major browsers</a>, although there are file size limits.
                </p>
                <p>
                    All data on this page is processed locally and never reaches any server that could perform logging.
                </p>
                <DropArea onDropFile={this.handleDroppedFile} className={styles.dropZone} activeClassName={styles.active}>{
                    (active: boolean) => active ? "Drop File To Convert" : "Drag A File Here Or Click To Open"
                }</DropArea>

                <form onSubmit={this.onSubmitForm} className={styles.form}>
                    <input type="checkbox" checked={forceType} onChange={this.onChangeCheckbox}></input>
                    <span className={forceType ? styles.active : styles.passive}>
                        Force <code>Content-Type</code> &nbsp;
                        <input type="text" disabled={!forceType} value={type} onChange={this.onChangeText}></input>
                    </span>
                </form>
            </div>

            <div>
                <h2>
                    Results
                    &nbsp; <button disabled={!base64} onClick={this.onClearResults}>Clear Results</button>
                </h2>
                { base64 ? <ResultDisplay data={base64!} type={type} />: "There are no results yet. Pick a file to begin. "}
            </div>
        </>
    }
}

async function readBase64(file: File): Promise<Base64Data> {
    // read the file as base64
    const uri = await new Promise<string>((rs, rj) => {
        const reader = new FileReader()
        reader.onload = () => rs(reader.result as string)
        reader.onerror = rj
        reader.readAsDataURL(file)
    })
    
    // extract the data URI parts 
    const match = uri.match(/^data:([^;]+);base64,(.*)$/i)
    if (!match) throw new Error("not a valid data URI")

    return { type: match[1], data: match[2] }
}
