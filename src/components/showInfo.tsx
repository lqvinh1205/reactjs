import { useState } from "react"

type ShowInfoProps = {
    name: string;
    age: number,
    person: {
        name: string
    }
}
const ShowInfo = (props: ShowInfoProps) => {
    console.log(props);
    
    return(
        <div>Show info</div>
    )
}
export default ShowInfo;