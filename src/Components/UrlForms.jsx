import { useContext, useState } from "react"
import { Context } from "../Context"

export function UrlForms(props) {
    const { userUrl, setUserUrl } = useContext(Context);
    const [enteredUrl, setEnteredUrl] = useState("");

    const handleChange = (e) => {
        setEnteredUrl(() => e.target.value)
    }

    const handleGenerate = () => {
        let localData = window.localStorage.getItem("urlEntries");
        localData = JSON.parse(localData);
        localData.push(enteredUrl);
        window.localStorage.setItem("urlEntries", JSON.stringify(localData));
        setUserUrl(enteredUrl);
    }
    return (
        <div className="url-container">
            <div className="url-child">
                <div>
                    <input className="input-field" value={enteredUrl} onChange={handleChange} type="url" name="url-input" placeholder="Enter the URL" />
                </div>
                <div>
                    <button className="generate-button" onClick={handleGenerate}>Generate</button>
                </div>
            </div>
        </div>
    )
}