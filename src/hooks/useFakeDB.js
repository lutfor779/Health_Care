import { useEffect, useState } from "react";

const useFakeDB = () => {
    const [data, setData] = useState({});
    useEffect(() => {
        fetch("./fakeDB.json")
            .then(res => res.json())
            .then(data => setData(data))
    }, []);

    return data;
}
export default useFakeDB;