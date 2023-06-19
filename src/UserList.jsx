import axios from "axios";
import { useEffect, useState } from "react";


export const UserList = () => {

    const [userList, setUserList] = useState([]);

    useEffect(() => {
        let fetchData = async () => {
            let res = await axios.get("http://localhost:8080/user/getUsers", {});
            setUserList(res.data);
            console.log(res.data);
        }
        fetchData();
    }, []);

    // useEffect(async () => {

    //     let res = await axios.get("http://localhost:8080/user/getUsers", {});
    //     setUserList(res.data);

    //     console.log(userList);
    // }, []);

    return (
        <>

            <table>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                </tr>

                {
                    userList.map((item) => (

                        <tr>
                            <td>{item.f_name}</td>
                            <td>{item.l_name}</td>
                            <td>{item.email}</td>
                        </tr>

                    ))
                }

            </table>
        </>
    );
}