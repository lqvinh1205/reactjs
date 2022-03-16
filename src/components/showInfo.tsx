import { useState } from "react"
import type {Person} from "../types/person"
type ShowInfoProps = {
    person: Person
}
const ShowInfo = (props: ShowInfoProps) => {
    console.log(props.person.name);
    
    return(
        <div>Show info</div>
    )
}
export default ShowInfo;