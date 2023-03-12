import { io } from "socket.io-client";
import { BASE_URL } from "./baseurl";

export const socket = io(BASE_URL);
