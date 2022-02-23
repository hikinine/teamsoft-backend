
import "./memoryUsage"
import "./httpServer";


process.on("uncaughtException", (error, origin) => {
  console.log(`Last layer error exception`);
  console.log({ error, origin });
});


