import bcrypt from 'bcrypt'
export const haspass = async (password) => {
    try {
        const saltRounds = 10
        const hashed = await bcrypt.hash(password, saltRounds)
        return hashed

    } catch (error) {
        console.log(error)
    }
}
export const compass = async (password, hashed) => {
    return bcrypt.compare(password, hashed)
}
