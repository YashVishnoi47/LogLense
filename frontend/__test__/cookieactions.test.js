import Cookies from "js-cookie";
import { SetCookie } from "@/utils/Cookies";

jest.mock("js-cookie");

describe("Cookie tesing", () => {
  test("creates a cookie when called ", () => {
    const user = { name: "Yash" };

    SetCookie("user", user);

    expect(Cookies.set).toHaveBeenCalledWith("user", user, {
      expires: 1,
      path: "/",
    });
  });
});
