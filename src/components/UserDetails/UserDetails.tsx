import React from "react";
import { User } from "../../types/user.model";
import "./UserDetails.css";
import UserContext from "../../utils/contexts/user.context";

class UserDetails extends React.Component {

    constructor(props: User) {
        super(props)
        this.state = {
            followers: 5,
            userDetails: props
        }
    }

    addFollower() {
        this.setState({
            followers: (this.state as any).followers + 1
        })
    }

    async componentDidMount() {
        const resp = await fetch("https://api.github.com/users/anand1296");
        const data = await resp.json();
        console.log(data);
        this.setState({
            userDetails: data
        })
    }

    componentWillUnmount(): void {
        console.log('User details component unmounted');
    }

  render(): React.ReactNode {

    // const {name, age, address, email, phone} = this.props as User;
    const {name, avatar_url} = (this.state as any).userDetails
    const { followers } = this.state as any;

    return (
      <div className="profile default-page-wrapper">
        <div className="primary-details">
            <div className="avatar">
                { avatar_url?.length ? <img src={avatar_url} alt="avatar" /> : null }
            </div>
            {/* <h1>{name.firstName} {name.lastName}</h1> */}
            {/* <h1>{name}</h1> */}
            <UserContext.Consumer>
                {
                    ({loggedInUser}) => (
                        <h1>{loggedInUser}</h1>
                    )
                }
            </UserContext.Consumer>
            <i>Followers: <b>{followers}</b> <span style={{cursor: 'pointer'}} onClick={() => this.addFollower()}>⬆</span></i>
        </div>
        {/* <div className="secondary-details">
            <h3>{email} | {phone}</h3>
            <p>{address.house}, {address.street}, {address.city}, {address.state}, {address.country}</p>
        </div> */}
      </div>
    );
  }
}

export default UserDetails;
