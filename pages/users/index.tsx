import { NextPage } from "next"
import React from "react"
import { Dispatch, bindActionCreators, AnyAction } from "redux"
import Link from "next/link"
import { connect } from "react-redux"

import Layout from "src/components/templates/Layout"
import List from "src/components/List"
import { User } from "src/interfaces"
import { getUsers } from "src/store/modules/user/actions"
import { RootState } from "src/store/reducer"

type IProps = ReturnType<typeof mapDispatchToProps> &
  ReturnType<typeof mapStateToProps> & {
    userList: User[]
    pathname: string
  } & any

const WithInitialProps: NextPage<IProps> = ({ pathname, getUsersRequest, userList, count }) => {
  return (
    <Layout title="Users List | Next.js + TypeScript Example">
      <h1>Users List</h1>
      <h1>count: {count}</h1>

      <p>
        Example fetching data from inside <code>getInitialProps()</code>.
      </p>
      <p>You are currently on: {pathname}</p>
      {userList && userList.length > 0 && <List items={userList} />}
      <p>
        <button onClick={getUsersRequest}>request socket</button>
        <Link href="/">
          <a>Go home</a>
        </Link>
      </p>
    </Layout>
  )
}

WithInitialProps.getInitialProps = async ({ pathname }) => {
  // Example for including initial props in a Next.js function component page.
  // Don't forget to include the respective types for any props passed into
  // the component.

  return { pathname }
}

const mapStateToProps = (state: RootState) => ({
  count: state.user.count
})

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => ({
  getUsersRequest: bindActionCreators(getUsers.request, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(WithInitialProps)
