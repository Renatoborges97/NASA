import axios from "axios";

export const nasaService = axios.create({
  baseURL: 'https://api.nasa.gov/',
  headers: {
    common: {
      "Content-Type": "application/json",

    },
  },
});