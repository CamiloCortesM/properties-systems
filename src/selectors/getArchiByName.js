import { initialData } from "../helpers/initialData"

export const getArchiByName = () => {
    const a = initialData();
  return a.filter(data=> data.name != "logro2")
}
