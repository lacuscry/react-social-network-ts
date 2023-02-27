type TechnologiesPropsType = {
    technologies: [
        {
            id: number,
            name: string
        }
    ]
}


function Technologies(props: TechnologiesPropsType) {
    const techs = props.technologies.map((tech: {id: number, name: string}) => <li key={tech.id}>{tech.name}</li>);

    return (
        <ul>
            {techs}
        </ul>
    )
}


export default Technologies;