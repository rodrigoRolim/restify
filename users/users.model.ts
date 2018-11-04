
const users = [
    {name: 'rivotril', email: 'rivotril@gmail.com'},
    {name: 'sertralina', email: 'sertralina@gmail.com'}
]

export class User {
    static findAll(): Promise<any[]> {
        return Promise.resolve(users)
    }
}