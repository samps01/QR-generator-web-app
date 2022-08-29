import { QRCodeSVG } from "qrcode.react";
import QRCode from "qrcodejs";
import { useContext, useEffect, useRef, useState } from "react"
import { Context } from "../Context"

export function QRCodeCanvas(props) {
    const { userUrl, setUserUrl } = useContext(Context);
    const qrCodeRef = useRef();
    const [showUrl, setShowUrl] = useState("");


    useEffect(() => {
        setShowUrl(userUrl);
        const blob = new Blob(["test"], { type: "text/plain" });
        const url = URL.createObjectURL(blob);
        console.log(url)
    }, [userUrl])

    return (
        <div className="qr-container">
            <div>{showUrl}</div>
            <QRCodeSVG
                value={showUrl}
                size={500}
            />
        </div>
    )
}