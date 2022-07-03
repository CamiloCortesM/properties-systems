export const getArchiByName = (nm,achvt) => {
  return achvt.filter(data=> data.name != nm)
}
