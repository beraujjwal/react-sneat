export default function AuthHeader() {
    const userToken = localStorage.getItem("userToken");

    if (userToken) {
      return {
        Authorization: "Bearer " + userToken,
        "Content-type": "application/json"
      };
    } else {
      return { "Content-type": "application/json" };
    }
}