

type dataType = {
    id: string; //unique identifier
    title: string; //text we see in flatlist
    
}

const DATA: dataType[] = [
    {id: '1', title: 'Gautham'},
    {id: '2', title: 'Prajit'},
    {id: '3', title: 'Aney'},
    {id: '4', title: 'Niv'},
    {id: '5', title: 'Maya'},
]

// export more than one item from a file by NOT
// using the word default an using { } for all items 
// Im exporting

export {dataType, DATA}