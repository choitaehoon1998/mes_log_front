import axios from "axios";

const headers =
  "eyJhbGciOiJIUzI1NiJ9.eyJpZCI6NiwiaWF0IjoxNjQ0ODI2MTk5LCJleHAiOjE2NDQ4MzMzOTl9.L5D5gU1ROyRmHtbQhER3oPiumF21gp__jpCTyhBYtEs";
export const API_URL = "http://bdc5-175-119-149-98.ngrok.io";

export const HTTP_API = {
  userSelect(option, body) {
    axios.get(API_URL, option, body, headers);
  },
};
