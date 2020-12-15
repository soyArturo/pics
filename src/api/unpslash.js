import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID kKL2jD75-W6xRLghcKzJrjgKnf7QX1QmNygMYgi-TCY",
  },
});
