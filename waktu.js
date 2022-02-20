import axios from "axios";
import moment from "moment-timezone";

const { get } = axios
var date = new Date();
var jam = date.toLocaleTimeString();
var tgl = moment(date).format('YYYY/MM/DD')
let { data: jadwalData } = await get(`https://api.myquran.com/v1/sholat/jadwal/1102/${tgl}`)
// if (jadwalData.status === 'false') return reply('Internal server error')
var jadwal = jadwalData.data.jadwal
let js = jadwal.subuh.substring(0,2)
let ms = jadwal.subuh.substring(3,6)
let subuh = jadwal.subuh
console.log(subuh)
console.log(js)
console.log(ms)
console.log(jam.substring(0, 2))
console.log(jam.substring(3, 5))
console.log(jam)