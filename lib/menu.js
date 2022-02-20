/**
 * @ Author: SANBOT Team
 * @ Create Time: 2021-05-31 22:33:11
 * @ Modified by: Danang Dwiyoga A (https://github.com/dngda/)
 * @ Modified time: 2021-08-02 17:58:32
 * @ Description: Menu
 */

/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

const textTnC = () => {
    return `
SANBOT adalah *Bot* yg merupakan akronim dari kata Robot yang berarti sebuah sistem yang diprogram oleh komputer.
Sehingga respon atau balasan yang dilakukan oleh bot bukanlah dari Manusia.

Dengan menggunakan bot ini maka anda *setuju* dengan syarat dan kondisi sebagai berikut:
- Berilah jeda dari setiap perintah.
- Dilarang menelfon bot, atau kalian akan kena block otomatis.
- Dilarang keras melakukan spam. Ketahuan = auto banned.
- Bot tidak akan merespon curhatan kalian.
- Bot tidak menyimpan gambar/media yang dikirimkan.
- Bot tidak menyimpan data pribadi anda di server kami.
- Bot tidak bertanggung jawab atas perintah anda kepada bot ini.
- Bot berjalan di server secara terpisah (Bukan dalam HP owner).
- Bot akan secara berkala dimonitoring oleh owner, jadi ada kemungkinan chat akan terbaca oleh owner.
- Bot akan dilakukan pembersihan setiap awal bulan atau saat dirasa diperlukan.


Best regards, 

-SANBOT.`
}

/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

const textList = (pushname, t, prefix) => {
    let m = (namaMenu) => `*${prefix}${namaMenu}*`
    let n = (new Date(t * 1000)).getHours()
    let ucapan = ''
    if (3 < n && n <= 9) ucapan = `*Selamat pagi 🌤️*`
    else if (9 < n && n <= 14) ucapan = `*Selamat siang ☀️*`
    else if (14 < n && n <= 18) ucapan = `*Selamat sore 🌻*`
    else ucapan = `*Selamat malam 💤*`
    return `
Halo, ${pushname}!
${ucapan} 👋️
Berikut adalah list fitur yang ada pada bot ini!✨
${readMore}
Note: 
Jangan ditelfon atau blocked instantly! ⛔
Kirim perintah tanpa argumen untuk melihat maksud dari setiap fitur.
Selain ${q3}(/)${q3} bot juga akan merespon simbol berikut:
${q3}\\ / ! ^ % & + . , -${q3}

Operasi kalkulator gunakan prefix (=)
(cth: =10+2+4)

╔══✪〘 ‼️ Wajib ‼️ 〙✪
╠> ${m('tnc')} atau ${m('rules')}
╚> Baca dan pahami sebelum melanjutkan

╔══✪〘 ‼️ LIST MENU BOT ‼️ 〙✪
╠>${m('m-info')} atau ${m('minf')}
╠ (Donasi, ping, etc)
║
╠>${m('m-convert')} atau ${m('mcon')}
╠ (Stiker to img, stiker, etc)
║
╠>${m('m-maker')} atau ${m('mker')}
╠ (Membuat efek stiker/gambar, etc)
║
╠>${m('m-dl')} atau ${m('mdl')}
╠ (Download media FB/IG/TW/TT, etc)
║
╠>${m('m-audioconv')} atau ${m('mac')}
╠ (Convert aduio, etc)
║
╠>${m('m-islam')} atau ${m('mslm')}
╠ (Jadwal sholat, Alqur'an, etc)
║
╠>${m('m-random')} atau ${m('mran')}
╠ (Kata bijak, Skripsi, etc)
║
╠>${m('m-search')} atau ${m('msrch')}
╠ (Pencarian image, etc)
║
╠>${m('m-hiburan')} atau ${m('mhib')}
╠ (Kata bijak, Tebak gambar, etc)
║
╠>${m('m-info2')} atau ${m('minf2')}
╠ (info covid, Cuaca, etc)
║
╠>${m('m-toxic')} atau ${m('mat')}
╠ (Dilarang kasar, etc) [Group]
║
╚>${m('more')} atau ${m('mr')}
║
╚══✪

Note :
Reply pesanmu yang berisi perintah
dengan '..' (titik double) untuk mengirimkannya kembali.

Chat dengan trigger (bot, san, SANBOT) atau tag akan dijawab oleh simsimi.

Hope you have a great day!✨
Kalau anda merasa bot ini membantu/berguna silakan *berdonasi* ✨
`
}

const textMinf = (pushname, t, prefix) => {
    let m = (namaMenu) => `*${prefix}${namaMenu}*`
    let n = (new Date(t * 1000)).getHours()
    let ucapan = ''
    if (3 < n && n <= 9) ucapan = `*Selamat pagi 🌤️*`
    else if (9 < n && n <= 14) ucapan = `*Selamat siang ☀️*`
    else if (14 < n && n <= 18) ucapan = `*Selamat sore 🌻*`
    else ucapan = `*Selamat malam 💤*`
    return `
Halo, ${pushname}!
${ucapan} 👋️
Berikut adalah list info yang ada pada bot ini!✨
${readMore}
Note: 
Jangan ditelfon atau blocked instantly! ⛔
Kirim perintah tanpa argumen untuk melihat maksud dari setiap fitur.
Selain ${q3}(/)${q3} bot juga akan merespon simbol berikut:
${q3}\\ / ! ^ % & + . , -${q3}

╔══✪〘 ‼️ Wajib ‼️ 〙✪
╠> ${m('tnc')} atau ${m('rules')}
╚> Baca dan pahami sebelum melanjutkan

╔══✪〘 💬 Informasi 💬 〙✪
╠> ${m('donate')} atau ${m('donasi')}
╠> ${m('ping')} atau ${m('speed')}
╠> ${m('owner')}
╠> ${m('stat')}
╚══✪

Note :
Reply pesanmu yang berisi perintah
dengan '..' (titik double) untuk mengirimkannya kembali.

Chat dengan trigger (bot, san, SANBOT) atau tag akan dijawab oleh simsimi.

Hope you have a great day!✨
Kalau anda merasa bot ini membantu/berguna silakan *berdonasi* ✨
`
}
const textMcon = (pushname, t, prefix) => {
    let m = (namaMenu) => `*${prefix}${namaMenu}*`
    let n = (new Date(t * 1000)).getHours()
    let ucapan = ''
    if (3 < n && n <= 9) ucapan = `*Selamat pagi 🌤️*`
    else if (9 < n && n <= 14) ucapan = `*Selamat siang ☀️*`
    else if (14 < n && n <= 18) ucapan = `*Selamat sore 🌻*`
    else ucapan = `*Selamat malam 💤*`
    return `
Halo, ${pushname}!
${ucapan} 👋️
Berikut adalah list info yang ada pada bot ini!✨
${readMore}
Note: 
Jangan ditelfon atau blocked instantly! ⛔
Kirim perintah tanpa argumen untuk melihat maksud dari setiap fitur.
Selain ${q3}(/)${q3} bot juga akan merespon simbol berikut:
${q3}\\ / ! ^ % & + . , -${q3}

╔══✪〘 ‼️ Wajib ‼️ 〙✪
╠> ${m('tnc')} atau ${m('rules')}
╚> Baca dan pahami sebelum melanjutkan

╔══✪〘 ⚙ Converter ⚙ 〙✪
╠> ${m('getimage')} atau ${m('toimg')}
║   Mengubah sticker menjadi gambar.
╠> ${m('sticker')} atau ${m('stiker')} atau ${m('s')}
║   Mengubah gambar/video menjadi sticker.
╠> ${m('stickergiphy')}
║   Mengubah url giphy menjadi sticker.
╠> ${m('doctopdf')} atau ${m('pdf')}
║   Mengubah dokumen menjadi pdf.
╠> ${m('qrcode')} atau ${m('qr')}
║   Membuat QRcode dari text.
╠> ${m('tts')} atau ${m('say')}
║   Mengubah text menjadi suara Google.
╠> ${m('shortlink')} atau ${m('short')}
║   Pemendek url menggunakan tinyurl.
╠> ${m('sid')}
║   Pemendek url menggunakan s.id.
╠> ${m('translate')}
║   Google translate text.
╠> ${m('memefy')}
║   Menambahkan text pada gambar.
╠> ${m('tomp3')}
║   Convert video ke audio.
╠> ${m('hilih')}
║   Mengubah text vokal menjadi huruf i.
╠> ${m('ssweb')}
║   Screenshot url website.
╠> ${m('take')}
║   Edit sticker pack dan author watermark
╠> ${m('flip')}
║   Balik gambar scr horizontal/vertikal.
╠> ${m('ocr')}
║   Scan text dari gambar.
╚══✪

Note :
Reply pesanmu yang berisi perintah
dengan '..' (titik double) untuk mengirimkannya kembali.

Chat dengan trigger (bot, san, SANBOT) atau tag akan dijawab oleh simsimi.

Hope you have a great day!✨
Kalau anda merasa bot ini membantu/berguna silakan *berdonasi* ✨
`
}

const textMker = (pushname, t, prefix) => {
    let m = (namaMenu) => `*${prefix}${namaMenu}*`
    let n = (new Date(t * 1000)).getHours()
    let ucapan = ''
    if (3 < n && n <= 9) ucapan = `*Selamat pagi 🌤️*`
    else if (9 < n && n <= 14) ucapan = `*Selamat siang ☀️*`
    else if (14 < n && n <= 18) ucapan = `*Selamat sore 🌻*`
    else ucapan = `*Selamat malam 💤*`
    return `
Halo, ${pushname}!
${ucapan} 👋️
Berikut adalah list info yang ada pada bot ini!✨
${readMore}
Note: 
Jangan ditelfon atau blocked instantly! ⛔
Kirim perintah tanpa argumen untuk melihat maksud dari setiap fitur.
Selain ${q3}(/)${q3} bot juga akan merespon simbol berikut:
${q3}\\ / ! ^ % & + . , -${q3}

╔══✪〘 ‼️ Wajib ‼️ 〙✪
╠> ${m('tnc')} atau ${m('rules')}
╚> Baca dan pahami sebelum melanjutkan

╔══✪〘 🧬 Maker 🧬 〙✪
╠> ${m('trigger')} atau ${m('trigger2')}
║   Add trigger effect pd gambar (sticker)
╠> ${m('wasted')}
║   Add wasted effect pd gambar (sticker)
╠> ${m('attp')}
║   Animated text to picture (sticker)
╠> ${m('ttp')}
║   Text to picture (sticker)
╚══✪

Note :
Reply pesanmu yang berisi perintah
dengan '..' (titik double) untuk mengirimkannya kembali.

Chat dengan trigger (bot, san, SANBOT) atau tag akan dijawab oleh simsimi.

Hope you have a great day!✨
Kalau anda merasa bot ini membantu/berguna silakan *berdonasi* ✨
`
}

const textMdl = (pushname, t, prefix) => {
    let m = (namaMenu) => `*${prefix}${namaMenu}*`
    let n = (new Date(t * 1000)).getHours()
    let ucapan = ''
    if (3 < n && n <= 9) ucapan = `*Selamat pagi 🌤️*`
    else if (9 < n && n <= 14) ucapan = `*Selamat siang ☀️*`
    else if (14 < n && n <= 18) ucapan = `*Selamat sore 🌻*`
    else ucapan = `*Selamat malam 💤*`
    return `
Halo, ${pushname}!
${ucapan} 👋️
Berikut adalah list info yang ada pada bot ini!✨
${readMore}
Note: 
Jangan ditelfon atau blocked instantly! ⛔
Kirim perintah tanpa argumen untuk melihat maksud dari setiap fitur.
Selain ${q3}(/)${q3} bot juga akan merespon simbol berikut:
${q3}\\ / ! ^ % & + . , -${q3}

╔══✪〘 ‼️ Wajib ‼️ 〙✪
╠> ${m('tnc')} atau ${m('rules')}
╚> Baca dan pahami sebelum melanjutkan

╔══✪〘 📩 Downloader 📩 〙✪
╠> ${m('tiktokmp3')} atau ${m('ttmp3')}
║   Download musik dari link Tiktok.
╠> ${m('tiktok')} atau ${m('tt')}
║   Download Tiktok tanpa watermark.
╠> ${m('igstory')}
║   Download Igstory dari username.
╠> ${m('ytmp3')}
║   Download mp3 dari link Youtube.
╠> ${m('ytmp4')}
║   Download mp4 dari link Youtube.
╠> ${m('fbdl')}
║   Download media dari link Facebook.
╠> ${m('twdl')}
║   Download media dari link Twitter.
╠> ${m('igdl')}
║   Download media dari link Instagram.
╚══✪

Note :
Reply pesanmu yang berisi perintah
dengan '..' (titik double) untuk mengirimkannya kembali.

Chat dengan trigger (bot, san, SANBOT) atau tag akan dijawab oleh simsimi.

Hope you have a great day!✨
Kalau anda merasa bot ini membantu/berguna silakan *berdonasi* ✨
`
}

const textMac = (pushname, t, prefix) => {
    let m = (namaMenu) => `*${prefix}${namaMenu}*`
    let n = (new Date(t * 1000)).getHours()
    let ucapan = ''
    if (3 < n && n <= 9) ucapan = `*Selamat pagi 🌤️*`
    else if (9 < n && n <= 14) ucapan = `*Selamat siang ☀️*`
    else if (14 < n && n <= 18) ucapan = `*Selamat sore 🌻*`
    else ucapan = `*Selamat malam 💤*`
    return `
Halo, ${pushname}!
${ucapan} 👋️
Berikut adalah list info yang ada pada bot ini!✨
${readMore}
Note: 
Jangan ditelfon atau blocked instantly! ⛔
Kirim perintah tanpa argumen untuk melihat maksud dari setiap fitur.
Selain ${q3}(/)${q3} bot juga akan merespon simbol berikut:
${q3}\\ / ! ^ % & + . , -${q3}

╔══✪〘 ‼️ Wajib ‼️ 〙✪
╠> ${m('tnc')} atau ${m('rules')}
╚> Baca dan pahami sebelum melanjutkan

╔══✪〘 🔊 Audio Converter 🔊 〙✪
║   Menambahkan efek suara pada audio.
╠> ${m('nightcore')}
╠> ${m('deepslow')}
╠> ${m('samarkan')}
╠> ${m('vibrato')}
╠> ${m('earrape')}
╠> ${m('reverse')}
╠> ${m('robot')}
╠> ${m('8d')}
╠══✪
╠> ${m('cf')}
║   Custom ffmpeg complex filter (Expert user only)
╚══✪

Note :
Reply pesanmu yang berisi perintah
dengan '..' (titik double) untuk mengirimkannya kembali.

Chat dengan trigger (bot, san, SANBOT) atau tag akan dijawab oleh simsimi.

Hope you have a great day!✨
Kalau anda merasa bot ini membantu/berguna silakan *berdonasi* ✨
`
}

const textMslm = (pushname, t, prefix) => {
    let m = (namaMenu) => `*${prefix}${namaMenu}*`
    let n = (new Date(t * 1000)).getHours()
    let ucapan = ''
    if (3 < n && n <= 9) ucapan = `*Selamat pagi 🌤️*`
    else if (9 < n && n <= 14) ucapan = `*Selamat siang ☀️*`
    else if (14 < n && n <= 18) ucapan = `*Selamat sore 🌻*`
    else ucapan = `*Selamat malam 💤*`
    return `
Halo, ${pushname}!
${ucapan} 👋️
Berikut adalah list info yang ada pada bot ini!✨
${readMore}
Note: 
Jangan ditelfon atau blocked instantly! ⛔
Kirim perintah tanpa argumen untuk melihat maksud dari setiap fitur.
Selain ${q3}(/)${q3} bot juga akan merespon simbol berikut:
${q3}\\ / ! ^ % & + . , -${q3}

╔══✪〘 ‼️ Wajib ‼️ 〙✪
╠> ${m('tnc')} atau ${m('rules')}
╚> Baca dan pahami sebelum melanjutkan

╔══✪〘 🕋 Islam 🕋 〙✪
╠> ${m('listsurah')}
║   Daftar surah yang tersedia.
╠> ${m('infosurah')}
║   Info surah yang diinginkan.
╠> ${m('jsholat')}
║   Jadwal sholat sesuai daerah.
╠> ${m('alaudio')}
║   Audio dari surah yg diinginkan.
╠> ${m('tafsir')}
║   Tafsir surah yg diinginkan.
╠> ${m('surah')}
║   Menampilkan ayat dari surah yang diinginkan.
╚══✪

Note :
Reply pesanmu yang berisi perintah
dengan '..' (titik double) untuk mengirimkannya kembali.

Chat dengan trigger (bot, san, SANBOT) atau tag akan dijawab oleh simsimi.

Hope you have a great day!✨
Kalau anda merasa bot ini membantu/berguna silakan *berdonasi* ✨
`
}

const textMran = (pushname, t, prefix) => {
    let m = (namaMenu) => `*${prefix}${namaMenu}*`
    let n = (new Date(t * 1000)).getHours()
    let ucapan = ''
    if (3 < n && n <= 9) ucapan = `*Selamat pagi 🌤️*`
    else if (9 < n && n <= 14) ucapan = `*Selamat siang ☀️*`
    else if (14 < n && n <= 18) ucapan = `*Selamat sore 🌻*`
    else ucapan = `*Selamat malam 💤*`
    return `
Halo, ${pushname}!
${ucapan} 👋️
Berikut adalah list info yang ada pada bot ini!✨
${readMore}
Note: 
Jangan ditelfon atau blocked instantly! ⛔
Kirim perintah tanpa argumen untuk melihat maksud dari setiap fitur.
Selain ${q3}(/)${q3} bot juga akan merespon simbol berikut:
${q3}\\ / ! ^ % & + . , -${q3}

╔══✪〘 ‼️ Wajib ‼️ 〙✪
╠> ${m('tnc')} atau ${m('rules')}
╚> Baca dan pahami sebelum melanjutkan

╔══✪〘 🎊 Random 🎊 〙✪
║   Random berarti acak.
╠> ${m('katabijak')}
╠> ${m('skripsi')}
╠> ${m('pantun')}
╠> ${m('fakta')}
╠> ${m('quote')}
╠> ${m('anime')}
╠> ${m('memes')}
╚══✪

Note :
Reply pesanmu yang berisi perintah
dengan '..' (titik double) untuk mengirimkannya kembali.

Chat dengan trigger (bot, san, SANBOT) atau tag akan dijawab oleh simsimi.

Hope you have a great day!✨
Kalau anda merasa bot ini membantu/berguna silakan *berdonasi* ✨
`
}

const textMsrch = (pushname, t, prefix) => {
    let m = (namaMenu) => `*${prefix}${namaMenu}*`
    let n = (new Date(t * 1000)).getHours()
    let ucapan = ''
    if (3 < n && n <= 9) ucapan = `*Selamat pagi 🌤️*`
    else if (9 < n && n <= 14) ucapan = `*Selamat siang ☀️*`
    else if (14 < n && n <= 18) ucapan = `*Selamat sore 🌻*`
    else ucapan = `*Selamat malam 💤*`
    return `
Halo, ${pushname}!
${ucapan} 👋️
Berikut adalah list info yang ada pada bot ini!✨
${readMore}
Note: 
Jangan ditelfon atau blocked instantly! ⛔
Kirim perintah tanpa argumen untuk melihat maksud dari setiap fitur.
Selain ${q3}(/)${q3} bot juga akan merespon simbol berikut:
${q3}\\ / ! ^ % & + . , -${q3}

╔══✪〘 ‼️ Wajib ‼️ 〙✪
╠> ${m('tnc')} atau ${m('rules')}
╚> Baca dan pahami sebelum melanjutkan

╔══✪〘 🔎 Search 🔍 〙✪
╠> ${m('pinterest')} atau ${m('pin')}
║   Search gambar dari pinterest.
╠> ${m('gimages')} atau ${m('gimg')}
║   Search gambar dari Google.
╠> ${m('gsearch')} atau ${m('gs')}
║   Screenshot search dari Google.
╠> ${m('artinama')}
║   Primbon arti nama, hanya hiburan.
╠> ${m('artimimpi')}
║   Primbon arti mimpi, hanya hiburan.
╠> ${m('cekjodoh')} atau ${m('cj')}
║   Primbon cek jodoh, hanya hiburan.
╠> ${m('sreddit')}
║   Search gambar dari Subreddit.
╠> ${m('lirik')}
║   Search lirik lagu.
╠> ${m('play')}
║   Search lagu dari Youtube.
╠> ${m('kbbi')}
║   Search arti kata dalam KBBI.
╠> ${m('yt')}
║   Search Youtube.
╚══✪

Note :
Reply pesanmu yang berisi perintah
dengan '..' (titik double) untuk mengirimkannya kembali.

Chat dengan trigger (bot, san, SANBOT) atau tag akan dijawab oleh simsimi.

Hope you have a great day!✨
Kalau anda merasa bot ini membantu/berguna silakan *berdonasi* ✨
`
}

const textMhib = (pushname, t, prefix) => {
    let m = (namaMenu) => `*${prefix}${namaMenu}*`
    let n = (new Date(t * 1000)).getHours()
    let ucapan = ''
    if (3 < n && n <= 9) ucapan = `*Selamat pagi 🌤️*`
    else if (9 < n && n <= 14) ucapan = `*Selamat siang ☀️*`
    else if (14 < n && n <= 18) ucapan = `*Selamat sore 🌻*`
    else ucapan = `*Selamat malam 💤*`
    return `
Halo, ${pushname}!
${ucapan} 👋️
Berikut adalah list info yang ada pada bot ini!✨
${readMore}
Note: 
Jangan ditelfon atau blocked instantly! ⛔
Kirim perintah tanpa argumen untuk melihat maksud dari setiap fitur.
Selain ${q3}(/)${q3} bot juga akan merespon simbol berikut:
${q3}\\ / ! ^ % & + . , -${q3}

╔══✪〘 ‼️ Wajib ‼️ 〙✪
╠> ${m('tnc')} atau ${m('rules')}
╚> Baca dan pahami sebelum melanjutkan

╔══✪〘 🎉 Hiburan 🎉 〙✪
╠> ${m('tebakgambar')} atau ${m('tbg')}
║   Main tebak gambar.
╠> ${m('tebakjenaka')} atau ${m('tbj')}
║   Main tebak jenaka.
╠> ${m('tebaksiapa')} atau ${m('tbs')}
║   Main tebak siapa aku.
╠> ${m('tebaklirik')} atau ${m('tbl')}
║   Main tebak lirik.
╠> ${m('tebakkata')} atau ${m('tbk')}
║   Main tebak kata.
╠> ${m('tebaksiapa')} atau ${m('tbs')}
║   Main tebak siapa.
╠> ${m('tebaklontong')} atau ${m('tblo')}
║   Main tebak cak lontong.
╠> ${m('apakah')}
║   Puja kerang ajaib!!!
╠> ${m('sfx')}
║   Mengirimkan audio yg tersedia.
╠> ${m('ToD')}
║   Group only. Truth atau dare?
╚══✪

Note :
Reply pesanmu yang berisi perintah
dengan '..' (titik double) untuk mengirimkannya kembali.

Chat dengan trigger (bot, san, SANBOT) atau tag akan dijawab oleh simsimi.

Hope you have a great day!✨
Kalau anda merasa bot ini membantu/berguna silakan *berdonasi* ✨
`
}

const textMinf2 = (pushname, t, prefix) => {
    let m = (namaMenu) => `*${prefix}${namaMenu}*`
    let n = (new Date(t * 1000)).getHours()
    let ucapan = ''
    if (3 < n && n <= 9) ucapan = `*Selamat pagi 🌤️*`
    else if (9 < n && n <= 14) ucapan = `*Selamat siang ☀️*`
    else if (14 < n && n <= 18) ucapan = `*Selamat sore 🌻*`
    else ucapan = `*Selamat malam 💤*`
    return `
Halo, ${pushname}!
${ucapan} 👋️
Berikut adalah list info yang ada pada bot ini!✨
${readMore}
Note: 
Jangan ditelfon atau blocked instantly! ⛔
Kirim perintah tanpa argumen untuk melihat maksud dari setiap fitur.
Selain ${q3}(/)${q3} bot juga akan merespon simbol berikut:
${q3}\\ / ! ^ % & + . , -${q3}

╔══✪〘 ‼️ Wajib ‼️ 〙✪
╠> ${m('tnc')} atau ${m('rules')}
╚> Baca dan pahami sebelum melanjutkan

╔══✪〘 ℹ Info ℹ 〙✪
╠> ${m('cekcovid')}
║   Cek sebaran covid sesuai lokasi.
╠> ${m('resi')}
║   Cek resi barang sesuai kurir.
╚══✪

Note :
Reply pesanmu yang berisi perintah
dengan '..' (titik double) untuk mengirimkannya kembali.

Chat dengan trigger (bot, san, SANBOT) atau tag akan dijawab oleh simsimi.

Hope you have a great day!✨
Kalau anda merasa bot ini membantu/berguna silakan *berdonasi* ✨
`
}

const textMat = (pushname, t, prefix) => {
    let m = (namaMenu) => `*${prefix}${namaMenu}*`
    let n = (new Date(t * 1000)).getHours()
    let ucapan = ''
    if (3 < n && n <= 9) ucapan = `*Selamat pagi 🌤️*`
    else if (9 < n && n <= 14) ucapan = `*Selamat siang ☀️*`
    else if (14 < n && n <= 18) ucapan = `*Selamat sore 🌻*`
    else ucapan = `*Selamat malam 💤*`
    return `
Halo, ${pushname}!
${ucapan} 👋️
Berikut adalah list info yang ada pada bot ini!✨
${readMore}
Note: 
Jangan ditelfon atau blocked instantly! ⛔
Kirim perintah tanpa argumen untuk melihat maksud dari setiap fitur.
Selain ${q3}(/)${q3} bot juga akan merespon simbol berikut:
${q3}\\ / ! ^ % & + . , -${q3}

╔══✪〘 ‼️ Wajib ‼️ 〙✪
╠> ${m('tnc')} atau ${m('rules')}
╚> Baca dan pahami sebelum melanjutkan

╔══✪〘 🤬 Anti Toxic 🤬 〙✪
║   Group only. Anti kata kasar.
╠> ${m('antikasar')}
╠> ${m('klasemen')}
╠> ${m('reset')}
╚══✪

Note :
Reply pesanmu yang berisi perintah
dengan '..' (titik double) untuk mengirimkannya kembali.

Chat dengan trigger (bot, san, SANBOT) atau tag akan dijawab oleh simsimi.

Hope you have a great day!✨
Kalau anda merasa bot ini membantu/berguna silakan *berdonasi* ✨
`
}

const textMore = (pushname, t, prefix) => {
    let m = (namaMenu) => `*${prefix}${namaMenu}*`
    let n = (new Date(t * 1000)).getHours()
    let ucapan = ''
    if (3 < n && n <= 9) ucapan = `*Selamat pagi 🌤️*`
    else if (9 < n && n <= 14) ucapan = `*Selamat siang ☀️*`
    else if (14 < n && n <= 18) ucapan = `*Selamat sore 🌻*`
    else ucapan = `*Selamat malam 💤*`
    return `
Halo, ${pushname}!
${ucapan} 👋️
Berikut adalah list info yang ada pada bot ini!✨
${readMore}
Note: 
Jangan ditelfon atau blocked instantly! ⛔
Kirim perintah tanpa argumen untuk melihat maksud dari setiap fitur.
Selain ${q3}(/)${q3} bot juga akan merespon simbol berikut:
${q3}\\ / ! ^ % & + . , -${q3}

╔══✪〘 ‼️ Wajib ‼️ 〙✪
╠> ${m('tnc')} atau ${m('rules')}
╚> Baca dan pahami sebelum melanjutkan

╔══✪〘 🤩 More Useful 🤩 〙✪
╠> ${m('tagall')} atau ${m('alle')}
║   Group only. Tag seluruh member.
╠> ${m('join')} atau ${m('sewa')}
║   Sewa bot untuk join group kalau slot tersedia.
╠> ${m('listonline')}
║   Group only. Tag seluruh member yang online.
╠> ${m('remind')}
║   Kirimkan pesan ulang sesuai waktu yg ditentukan.
╠> ${m('list')}
║   Membuat list atau daftar yg disimpan di bot.
╠> ${m('note')}
║   Membuat note atau catatan yg disimpan di bot.
╠> ${m('bye')}
║   Group only. Keluarkan bot.
╠> ${m('del')}
║   Hapus pesan bot.
║
╚══✪〘 *SANBOT* 〙✪

Note :
Reply pesanmu yang berisi perintah
dengan '..' (titik double) untuk mengirimkannya kembali.

Chat dengan trigger (bot, san, SANBOT) atau tag akan dijawab oleh simsimi.

Hope you have a great day!✨
Kalau anda merasa bot ini membantu/berguna silakan *berdonasi* ✨
`
}

const textPml = (pushname, t, prefix) => {
    let m = (namaMenu) => `*${prefix}${namaMenu}*`
    let n = (new Date(t * 1000)).getHours()
    let ucapan = ''
    if (3 < n && n <= 9) ucapan = `*Selamat pagi 🌤️*`
    else if (9 < n && n <= 14) ucapan = `*Selamat siang ☀️*`
    else if (14 < n && n <= 18) ucapan = `*Selamat sore 🌻*`
    else ucapan = `*Selamat malam 💤*`
    return `
Halo, ${pushname}!
${ucapan} 👋️
Berikut adalah price list mobile legend!✨
${readMore}
Note: 
Jangan ditelfon atau blocked instantly! ⛔
Kirim perintah tanpa argumen untuk melihat maksud dari setiap fitur.
Selain ${q3}(/)${q3} bot juga akan merespon simbol berikut:
${q3}\\ / ! ^ % & + . , -${q3}

╔══✪〘 ‼️ Wajib ‼️ 〙✪
╠> ${m('tnc')} atau ${m('rules')}
╚> Baca dan pahami sebelum melanjutkan

╔══✪〘 💎 PRICE LIST DM ML 💎 〙✪
║
╠> 86💎 => 20.000
╠> 172💎 => 40.000
╠> 257💎 => 60.000
╠> 344💎 => 80.000
╠> 429💎 => 100.000
╠> 514💎 => 120.000
╠> 600💎 => 139.000
╠> 706💎 => 158.000
╠> 878💎 => 197.000
╠> 963💎 => 210.000
╠> 1050💎 => 236.000
╠> 1412💎 => 314.000   
║
╚══✪〘 *SANBOT* 〙✪

Hope you have a great day!✨
Kalau anda merasa bot ini membantu/berguna silakan *berdonasi* ✨
`
}
// 🎫
/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

const textAdmin = (prefix) => {
    let m = (namaMenu) => `*${prefix}${namaMenu}*`
    return `
⚠ [ *Admin Group Only* ] ⚠ 
Berikut adalah fitur admin grup yang ada pada bot ini!

╔══✪〘 Admin Only 〙✪
╠> ${m('groupstats')}
║   Cek status pengaturan group
╠> ${m('mutegroup')} atau ${m('group')} buka/tutup
║   Selain admin gabisa kirim pesan
╠> ${m('enablebot')} atau ${m('disablebot')}
║   Hidupkan atau matikan bot untuk group.
╠> ${m('antilinkgroup')} on/off
║   Kick otomatis yg kirim link group
╠> ${m('antikasarkick')} on/off
║   Kick otomatis yg toksik di group
╠> ${m('antilink')} on/off
║   Kick otomatis yg kirim semua jenis link
╠> ${m('antivirtex')} on/off
║   Kick otomatis yg kirim pesan terlalu panjang
╠> ${m('antidelete')} on/off
║   Anti delete pesan di group
╠> ${m('welcome')} on/off
║   Menyambut member baru join
╠> ${m('setprofile')}
║   Ganti foto group
╠> ${m('setname')}
║   Ganti nama group
╠> ${m('grouplink')}
║   Untuk mendapatkan group link
╠> ${m('promote')}
║   Jadiin admin
╠> ${m('demote')}
║   Cabut hak admin
╠> ${m('revoke')}
║   Reset group link
╠> ${m('kick')}
║   Kick member
╠> ${m('add')}
║   Tambah member
║
║ (fitur welcome sering error, mending gak usah)
║
╚═〘 *SANBOT* 〙
`
}

/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

const textOwner = (prefix) => {
    let m = (namaMenu) => `*${prefix}${namaMenu}*`
    return `
⚠ [ *Owner Only* ] ⚠ 
Berikut adalah fitur owner yang ada pada bot ini!

╔══✪〘 Owner Only 〙✪
╠> ${m('addkasar')}
║   Add kata kasar ke database. Restart required.
╠> ${m('restart')}
║   Restart nodejs. Windows only.
╠> ${m('listgroup')}
║   Return all group list
╠> ${m('listsewa')}
║   Return all group list
╠> ${m('ban')}
║   Ban user.
╠> ${m('unban')}
║   Unban user.
╠> ${m('bc')}
║   Broadcast all chats.
╠> ${m('bcgroup')}
║   Broadcast all group.
╠> ${m('leaveall')}
║   Leave all group kecuali premium (Pembersihan)
╠> ${m('clearexitedgroup')}
║   Delete chat group yang sudah keluar.
╠> ${m('deleteall')}
║   Delete semua chat termasuk group tanpa keluar group.
╠> ${m('clearall')}
║   Clear semua chat tanpa menghapus chats.
╠> ${m('cleanchat')}
║   Simulate clean all chat seperti saat 01:01
╠> ${m('unblock')} atau ${m('u')}
║   Unblock user.
╠> ${m('getinfo')}
║   Get info dari link group.
╠> ${m('getstory')}
║   Get story wa.
╠> ${m('addprem')}
║   Add group ke premium.
╠> _>_
║   Eval.
╠> _$_
║   Shell.
║
╚═〘 *SANBOT* 〙
`
}

/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

const textDonasi = () => {
    return `
Hai, terimakasih telah menggunakan bot ini, untuk mendukung bot ini kamu dapat membantu dengan berdonasi dengan cara:

Ovo/Gopay/Dana: 0838 4136 5567
Pulsa: 0838 4136 5567

Berapapun nominalnya akan sangat membantu pengembangan bot ini.
Terimakasih. ~Ichsan`
}

export default {
    textTnC,
    textList,
    textOwner,
    textAdmin,
    textDonasi,
    textMinf,
    textMcon,
    textMker,
    textMdl,
    textMac,
    textMslm,
    textMran,
    textMsrch,
    textMhib,
    textMinf2,
    textMat,
    textMore,
    textPml
}