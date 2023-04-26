import { Container } from "./style";

import {IoMdStarOutline, IoMdStar } from "react-icons/io"

export function Evaluation({...rest}) {
    return(
        <Container>
            <IoMdStar size={25}/>
            <IoMdStar size={25}/>
            <IoMdStar size={25}/>
            <IoMdStar size={25}/>
            <IoMdStarOutline size={25}/>
        </Container>
    )
}