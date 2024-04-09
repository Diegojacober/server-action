export async function Tags() {

    await new Promise(resolve => setTimeout(resolve, 3000));

    const response = await fetch('http://localhost:3333/tags', {
        next: {
            // nome da função
            tags: ['get-tags']
        }
    })

    const data = await response.json();

    return (
        <ul>
            {data.map((tag: any) => <li key={tag.id}>{tag.slug}</li>)}
        </ul>
    )
}