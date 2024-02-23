import { deleteSync } from "del";
export const reset = async () => {
  return await deleteSync(app.path.clean);
}