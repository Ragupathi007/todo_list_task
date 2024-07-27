import axios from "axios";
import { useState, useEffect } from "react";
import Table from "../components/UserTable";
import { useDispatch } from "react-redux";
import { addUsers } from "../features/usersSlice";




export const UsersForm = () => {
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                setLoading(true);
                const response = await axios.get(
                    "https://jsonplaceholder.typicode.com/users"
                );
                dispatch(addUsers(response.data));
            } catch (error) {
                console.error("Error fetching the users:", error);

            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    return (
        <> {loading ? <p>Loading...</p> : <Table />} </>
    )
}
