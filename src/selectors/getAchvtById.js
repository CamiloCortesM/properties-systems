export const getAchvtById = (id,achvt) => {
    return achvt.find(data=> data.id === id)
}
