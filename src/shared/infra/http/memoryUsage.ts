import { Color } from './../utils/colorLogger';
import { logger } from "../utils/colorLogger";

function memoryUsage() {
  const used = process.memoryUsage();

  let memoryUsage = ""
  for (let key in used) {
    memoryUsage += `${key} ${Math.round(used[key] / 1024 / 1024 * 100) / 100} MB.\n`
  }
  logger([
    {
      color: Color.cyan,
      message: `Application id (PID) ${process.pid}.\n`
    },
    {
      color: Color.pink,
      message: memoryUsage
    }
  ]);
}

memoryUsage()