const express = require("express");
const conversation = require("../controller/conversation");
const intents = require("../controller/intents");
const exemplo = require("../controller/exemplos");
const contraExemplos = require("../controller/contraExemplos");
const entidade = require('../controller/entidades');
const valores = require('../controller/valores');
const dialogos = require('../controller/dialogos');

const router = express.Router();


router.post('/conversa/', conversation.conversa);
router.post('/conversation/', conversation.message);

router.post('/intents/list/', intents.list);
router.post('/intents/create/', intents.create);
router.post('/intents/GetIntent/', intents.listById);
router.post('/intents/update/', intents.update);
router.post('/intents/delete/', intents.delete);

router.post('/exemplos/list', exemplo.list);
router.post('/exemplos/create', exemplo.create);
router.post('/exemplos/GetExemplo/', exemplo.listById);
router.post('/exemplos/update/', exemplo.update);
router.post('/exemplos/delete/', exemplo.delete);

router.post('/contraExemplos/list', contraExemplos.list);
router.post('/contraExemplos/create', contraExemplos.create);
router.post('/contraExemplos/GetcounterExemplo/', contraExemplos.listById);
router.post('/contraExemplos/update/', contraExemplos.update);
router.post('/contraExemplos/delete/', contraExemplos.delete);

router.post('/entidades/list', entidade.list);
router.post('/entidades/create', entidade.create);
router.post('/entidades/GetEntidade', entidade.listById);
router.post('/entidades/update', entidade.update);
router.post('/entidades/delete', entidade.delete);

router.post('/valores/list', valores.list);
router.post('/valores/add', valores.add);
router.post('/valores/GetValor', valores.listById);
router.post('/valores/update', valores.update);
router.post('/valores/delete', valores.delete);

router.post('/dialogos/list', dialogos.list);

module.exports = router;
