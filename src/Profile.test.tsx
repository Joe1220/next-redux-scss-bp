import React from "react"
import { render } from "@testing-library/react"
import Profile from "./Profile"

describe("<Profile />", () => {
  it("matches snapshot", () => {
    const utils = render(<Profile username="jsh" name="조승현" />)
    expect(utils.container).toMatchSnapshot()
  })
  it("shows the props correctly", () => {
    const utils = render(<Profile username="jsh" name="조승현" />)
    utils.getByText("jsh") // velopert 라는 텍스트를 가진 엘리먼트가 있는지 확인
    utils.getByText("(조승현)") // (조승현)) 이라는 텍스트를 가진 엘리먼트가 있는지 확인
    utils.getByText(/조/) // 정규식 /조/ 을 통과하는 엘리먼트가 있는지 확인
  })
})
