const Discord = require('discord.js');

exports.run = async(client, message, args) => {
  if (!message.member.voiceChannel || !message.member.hasPermission("ADMINISTRATOR") || message.member.voiceChannel.members.size === 1) return message.channel.send('<a:canuyari:603528216275058718> Bu Komudu Kullanabilmek İçin `YÖNETİCİ` Yetkiniz Olmalıdır ! *(Ayrıca ses kanallarında 1 den fazla üye olmalıdır)*');
  if (!message.guild.me.hasPermission("ADMINISTRATOR")) return message.reply('<a:canuyari:603528216275058718> Bu Çekilişi Yapabilmem İçin ``YÖNETİCİ`` Yetkim Olmalıdır !');
  let mesaj = await message.channel.send('**<a:parti:601758360198709259> Çekiliş Başlatılıyor...**');
  setTimeout(() => {
          mesaj.edit('<a:parti:601758360198709259> Çekiliş Yapılıyor <a:bes:672788643198533642>')
      }, 1000);
        setTimeout(() => {
          mesaj.edit('<a:parti:601758360198709259> Çekiliş Yapılıyor <a:dort:672788642997207090>')
      }, 3000);
        setTimeout(() => {
          mesaj.edit('<a:parti:601758360198709259> Çekiliş Yapılıyor <a:uc:672788643752050698> ')
      }, 5000);
setTimeout(() => {
          mesaj.edit('<a:parti:601758360198709259> Çekiliş Yapılıyor <a:iki:672788643072704542>')
      }, 7000);
setTimeout(() => {
          mesaj.edit('<a:parti:601758360198709259> Çekiliş Yapılıyor <a:bir:672788631248961537>')
      }, 9000);
  setTimeout(() => {
    mesaj.edit(new Discord.RichEmbed().setDescription(`<a:parti:601758360198709259> Çekilişi kazanan kişi: ${message.member.voiceChannel.members.filter(a => a.id !== message.author.id).random()} Hayırlı Olsun ! <a:havali:601758375906377738>`));
  }, 12000);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['sesli-çekiliş'],
  permLevel: 3
};

exports.help = { 
  name: 'ses-çekiliş', 
  description: 'Ses çekilişi.',
  usage: 'ses-çekiliş',
};