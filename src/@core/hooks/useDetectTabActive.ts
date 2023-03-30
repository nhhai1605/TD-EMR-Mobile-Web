import { useEffect, useState } from "react";


export const useDetectTabActive = () => {
    const [tabActivated, setTabActivated] = useState(false);
    useEffect(() => {
        window.addEventListener("focus", () => setTabActivated(true));
        window.addEventListener("blur", () => setTabActivated(false));
        // Calls focus when the window first loads
        setTabActivated(true);

        return () => {
            window.addEventListener("focus", () => setTabActivated(true));
            window.addEventListener("blur", () => setTabActivated(false));
        };
    }, []);

    return [tabActivated];
};
