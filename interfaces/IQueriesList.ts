interface IQueryItem {
    name: string,
    link: string
}

interface IQueryCategory {
    name: string,
    items: IQueryItem[]
}

interface IQueriesList {
    [key: string]: IQueryCategory
}

export default IQueriesList;