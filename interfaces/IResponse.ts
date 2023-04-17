interface IResponse<T = void> {
    status: number,
    data?: T
}

export default IResponse;