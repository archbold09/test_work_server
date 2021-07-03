// const { conexionDB } = require("../config/general/db/postgress");
// const logger = require("../utils/logger");
// class DomiciliarioModel {
//   constructor() {
//     this.conexion = conexionDB;
//   }

//   async listar() {
//     try {
//       const resultado = await conexionDB.query(
//         `
//           SELECT *
//           FROM domiciliario
//         `
//       );
//       return resultado.rows;
//     } catch (error) {
//       logger.error(error);
//       return [];
//     }
//   }
//   async agregar(datos) {
//     try {
//       const resultado = await conexionDB.query(
//         `
//         INSERT INTO domiciliario  (
//           "ID_PROVIDER" ,
//           "ID_SUBSIDIARY" ,
//           "nombre" ,
//           "apellido" ,
//           "contraseña" ,
//           "estado" ,
//           "disponiblidiad" ,
//           "documento_tipo" ,
//           documento_numero ,
//           documento_fecha_exp ,
//           telefono ,
//           "ciudad",
//           "direccion" ,
//           "correo_electronico" ,
//           codigo_rastreo

//       ) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15)
//         `,
//         [
//           datos.ID_PROVIDER,
//           datos.ID_SUBSIDIARY,
//           datos.nombre,
//           datos.apellido,
//           datos.contraseña,
//           datos.estado,
//           datos.disponiblidiad,
//           datos.documento_tipo,
//           datos.documento_numero,
//           datos.documento_fecha_exp,
//           datos.telefono,
//           datos.ciudad,
//           datos.direccion,
//           datos.correo_electronico,
//           datos.codigo_rastreo
//         ]
//       );

//       return resultado.rows;
//     } catch (error) {
//       logger.error(error);
//       return error;
//     }

//   }
//   async editar(datos) {
//     try {
//       const response = await conexionDB.query(
//         `
//         UPDATE domiciliario
//         SET
//         "ID_SUBSIDIARY" = $2,
//         nombre = $3,
//         apellido = $4,
//         contraseña = $5,
//         estado=$6,
//         disponiblidiad = $7,
//         documento_tipo = $8,
//         documento_numero = $9,
//         documento_fecha_exp = $10,
//         telefono = $11,
//         ciudad = $12,
//         direccion = $13,
//         correo_electronico = $14,
//         codigo_rastreo = $15
//         WHERE "ID_PROVIDER" = $1 AND "ID_SUBSIDIARY"= $2

//         `,
//         [
//           datos.ID_PROVIDER,
//           datos.ID_SUBSIDIARY,
//           datos.nombre,
//           datos.apellido,
//           datos.contraseña,
//           datos.estado,
//           datos.disponiblidiad,
//           datos.documento_tipo,
//           datos.documento_numero,
//           datos.documento_fecha_exp,
//           datos.telefono,
//           datos.ciudad,
//           datos.direccion,
//           datos.correo_electronico,
//           datos.codigo_rastreo
//         ]

//       );
//       console.log(datos);
//       return response;
//     } catch (error) {
//       console.log(datos);
//       logger.error(error);
//       return error;

//     }
//   }
//   async eliminar(datos) {
//     try {
//       await conexionDB.query(
//         `DELETE FROM  domiciliario
//         WHERE "ID_PROVIDER" = $1
//         `,
//         [datos.ID_PROVIDER]
//       );
//       return true;
//     } catch (error) {
//       logger.error(error);
//       return false;
//     }
//   }
// }

// module.exports = DomiciliarioModel;
