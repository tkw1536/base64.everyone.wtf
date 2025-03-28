import * as React from "react"

interface DropAreaProps {
    onDropFile: (file: File) => void,
    
    className?: string, activeClassName?: string, passiveClassName?: string

    children?: (active: boolean) => React.ReactNode
}

export default class DropArea extends React.Component<DropAreaProps> {
    state = { dragActive: false }
        
    private readonly onDropFile = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault()
        this.setState({ dragActive: false })

        const { dataTransfer: { files } } = event
        if (files.length === 0) return

        this.props.onDropFile(files.item(0)!)
    }
    private readonly onDragOver = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault()
        this.setState({ dragActive: true })
    }
    private readonly onDragExit = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault()
        this.setState({ dragActive: false })
    }

    private readonly onClick = (event: React.MouseEvent<HTMLDivElement>) => {
        event.preventDefault()
        this.fileInput.current!.click()
    }

    private readonly onUploadFile = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault()
        const files = this.fileInput.current!.files
        if (!files || files.length == 0) return

        if (files.length === 0) return
        this.props.onDropFile(files.item(0)!)
    }

    private fileInput = React.createRef<HTMLInputElement>()
    
    render() {
        const { dragActive } = this.state
        const { className, activeClassName, passiveClassName, children } = this.props
        const classes = `${className ?? ""} ${dragActive ? (activeClassName ?? ""): (passiveClassName ?? "")}`
        
        return <>
            <input type="file" style={{ display: "none" }} ref={this.fileInput} multiple={false} onChange={this.onUploadFile}></input>
            <div
                className={classes}
                onDrop={this.onDropFile} onDragOver={this.onDragOver} onDragExit={this.onDragExit}
                onClick={this.onClick}
            >{ children ? children(dragActive) : null}</div>
        </>
    }
}
