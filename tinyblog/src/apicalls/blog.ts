import { Dispatch, SetStateAction } from "react";
import mockblog from "../mockblog.json"
export interface IBlog {
    id: number,
    title: string,
    body: string,
    userId: number,
    tags: string[],
    reactions: number
}

const BASE_PATH = process.env.NEXT_PUBLIC_PORT;

/*
export async function fetchBlogs(setBlogs: Dispatch<SetStateAction<IBlog[]>>) {

    const response = await fetch(BASE_PATH!);
    const responseData = await response.json();
    setBlogs(responseData.posts);

}
*/


export function fetchBlogs(setBlogs: Dispatch<SetStateAction<IBlog[]>>) {

   setBlogs(mockblog.posts);

}
