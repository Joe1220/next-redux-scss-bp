import React from "react"

type IProfile = {
  username: string
  name: string
}

const Profile: React.FC<IProfile> = ({ username, name }) => {
  return (
    <div>
      <b>{username}</b>&nbsp;
      <span>({name})</span>
    </div>
  )
}

export default Profile
