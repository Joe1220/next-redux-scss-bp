import * as React from "react"

import { User } from "src/interfaces"

/**
 * Column properties
 */
export interface ListDetailProps {
  item: User
}

const ListDetail: React.FC<ListDetailProps> = ({ item: user }) => (
  <div>
    <h1>Detail for {user.name}</h1>
    <p>ID: {user.id}</p>
  </div>
)

export default ListDetail
