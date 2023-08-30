import { ReactNode } from "react"
import { createPortal } from "react-dom"

type Props = {
    children: ReactNode,
    open: boolean,
    handleClose: () => void
}

function Modal({ children, open, handleClose }: Props) {
    if (open) {
        return createPortal(
            <div
                className={`h-screen w-full p-6 backdrop-blur-sm bg-black/30 fixed top-0 left-0 ${open ? `flex` : `hidden`} justify-center items-center z-10`}
                onClick={() => handleClose()}
            >
                {children}
            </div>,
            document.getElementById('root')!
        )
    }
    return (<></>)
}

export default Modal