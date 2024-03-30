import React from "react"
import UserDetails from "../../components/UserDetails/UserDetails"
import { User } from "../../types/user.model"

class Profile extends React.Component {
    render(): React.ReactNode {
        const userProps: User = {
            name: "Baburao Apte",
            age: 30,
            email: "baburao.apte@herapheri.com",
            phone: "9876543210",
            address: {
                house: "Kholi number 2",
                street: "MG Road",
                city: "Mumbai",
                state: "Maharashtra",
                country: "India"
            },
            avatar_url: ""
        }

        return (
            <div>
                <UserDetails {...userProps}/>
            </div>
        )
    }
}

export default Profile;