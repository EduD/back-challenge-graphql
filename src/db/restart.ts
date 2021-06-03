import database from '@db/db';

(async () => {
  const resultado = await database.sync({ force: true });
  console.log(resultado);
})();
