const dynamic = "force-dynamic"; // It must be a constant meana const type always. Let will not work here.

let GET = () => {
  return Response.json({
    time: new Date().toLocaleTimeString(),
  });
};
export { dynamic, GET };
