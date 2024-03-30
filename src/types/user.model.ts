export type User = {
    name: string,
    age: number,
    address: UserAddress,
    email: string,
    phone: string,
    avatar_url?: string
}

export type UserName = {
    firstName: string,
    lastName: string
}

export type UserAddress = {
    house: string,
    street: string,
    city: string,
    state: string,
    country: string
}