console.log('beep beep');

const Discord = require('discord.js');
const client = new Discord.Client();

client.login('ODQ4ODU2MjAxNDY2NzQwNzU3.YLSs8Q.aFet_iLvme83STBDp3Mb46TEmO0');

client.on('ready', () => {
    client.user.setActivity(`☾︎𝐏𝐫𝐨𝐭𝐞𝐜𝐭𝐢𝐧𝐠 𝐑𝐨𝐲𝐚𝐥 𝐖𝐨𝐧𝐝𝐞𝐫 𝐅𝐚𝐦𝐢𝐥𝐲☽︎`)
    console.log(`${client.user.username} ✅`)
  })

  client.on('message', message => {
    if (message.content === `لورد کیست`) {    
                  let embed = new Discord.MessageEmbed()
                .setColor("#11cc11")
                  .setTitle('حسین لرد بنیان گزار خانواده و سرپرست خانواده واندر است.همچنین دارای بیشترین درجه در بین خانواده واندر میباشد ')
                  .setThumbnail(`https://media.discordapp.net/attachments/828133672749236239/849659229895131156/InShot__.jpg?width=559&height=559`)
                  message.reply(embed);
    }
  })
  client.on('message', message => {
    if (message.content === `فرزان کیست`) {    
                  let embed = new Discord.MessageEmbed()
                .setColor("#db2c2c")
                  .setTitle('یکی از نویسندگان اصلی بات واندر و ساکن شیراز که ساوابق زیادی در دیسکورد دارد.')
                  .setThumbnail(`https://cdn.discordapp.com/avatars/778307030837755995/f9f074d7962dc04f961ac4710b859b8b.png?size=1024`)
                  message.reply(embed);
    }
  })
  client.on('message', message => {
    if (message.content === `یاقوتی کیست`) {    
                  let embed = new Discord.MessageEmbed()
                .setColor("#11cc11")
                  .setTitle('مبین مردی بسیار بخشنده و مهربانی است و دست به فحشش زیاده ولی فحش هایش به شوخی است وی بسیار حق میگوید ')
                  
                  .setThumbnail(`https://cdn.discordapp.com/avatars/768378377219342336/c325ad022b93824c6d0fa04116395228.png?size=1024`)
                  message.reply(embed);
    }
  })
  client.on('message', message => {
    if (message.content === `متین کیست`) {    
                  let embed = new Discord.MessageEmbed()
                .setColor("#11cc11")
                  .setTitle('متین یکی از دولپر های واندر است .وی بکن ستایش میباشد')
                  .setThumbnail(`https://discord.com/channels/730698053732007966/734078109611196466/851057558595567626`)
                  message.reply(embed);
                }
            })           
            client.on('message', message => {
              if (message.content === `سینا کیست`) {    
                            let embed = new Discord.MessageEmbed()
                          .setColor("#11cc11")
                            .setTitle('سینا پسری 17 ساله از شیراز است که در بین واندر ها از ادب و گفتار سنجیده ای برخوردار است.لواط با وی پسندیده نیست')
                            .setThumbnail(`https://discord.com/channels/730698053732007966/734078109611196466/851060170095067155`)
                            message.reply(embed);
                          }
                      })    
                      client.on('message', message => {
                        if (message.content === `نوترون کیست`) {    
                                      let embed = new Discord.MessageEmbed()
                                    .setColor("#e6f007")
                                      .setTitle('علیرضا نوبخت ملقب به نوترون فردی درون گرا اما باهوش است که به سختی در جمع واندر حضور پیدا میکند')
                                      .setThumbnail(`https://cdn.discordapp.com/avatars/734012098786623518/1c14823abb9cfaac03a8b2579bc354b3.png?size=1024`)
                                      message.reply(embed);
                                    }
                                })                              
  client.on('message', message => {
    if(message.content === "اینوایت"){
        var user = message.author;
  
        message.guild.fetchInvites()
        .then
  
        (invites =>
            {
                const userInvites = invites.array().filter(o => o.inviter.id === user.id);
                var userInviteCount = 0;
                for(var i=0; i < userInvites.length; i++)
                {
                    var invite = userInvites[i];
                    userInviteCount += invite['uses'];
                }
                     message.reply(`شما ${userInviteCount} اینوایت دارید.`);
            }
        )
    }
  });

  client.on('message', message => {
    if (message.content === `وضعیت سرور`) {    
                  let embed = new Discord.MessageEmbed()
                .setColor("#11cc11")
                  .setTitle("Server Info")
                  .setThumbnail(message.guild.iconURL())
                  .setAuthor(`${message.guild.name} اطلاعات سرور`, message.guild.iconURL())
                  .addField(" **اسم سرور : **", `${message.guild.name}`, true)
                  .addField("🆔 **ایدی سرور**", `${message.guild.id}`)
                  .addField(" **تعداد تکست چنل ها**", `${message.guild.channels.cache.filter(r => r.type === "text").size}`)
                  .addField(" **تعداد ویس چنل ها**", `${message.guild.channels.cache.filter(c => c.type === "voice").size}`)
                  .addField(" **ممبر های سرور**", `${message.guild.memberCount}`, true)
                  .addField("🎭 **تعداد رول ها**", `${message.guild.roles.cache.size}`, true)
              message.channel.send(embed);
    }
  })
  client.on('message', message => {
    var images = ["https://media.giphy.com/media/c4tohTCuYFpI4AyysA/giphy.gif",
    "https://media.discordapp.net/attachments/792079880652324865/793460256738508840/doc_2020-10-06_12-35-08-1.gif",
    "https://media.discordapp.net/attachments/797721516887769088/802560301496664094/ezgif.com-gif-maker_3.gif",
    "https://media.discordapp.net/attachments/406413904596434947/781153145504923698/ezgif.com-gif-maker.gif",
    "https://media.giphy.com/media/e65S8xI8p89fpbrIED/giphy.gif",
    "https://media.discordapp.net/attachments/797721516887769088/798647528798158848/UniConverter_20201013210951-1-1.gif",
    "https://media.discordapp.net/attachments/767298868424605699/796835331449028608/image0.gif",
    "https://cdn.discordapp.com/attachments/720062410010132541/794507798863544330/902575cf50f05e11.gif",
    "https://media.discordapp.net/attachments/794143924927201310/816592885956476938/image0-3-1.gif",
    "https://media.discordapp.net/attachments/406413904596434947/798879955127762944/InShot___1.gif",
    "https://gfycat.com/exhaustedsouravocet",
    "https://media.discordapp.net/attachments/560564050518605834/808306925988741201/20210127_125540.gif",
    "https://media.discordapp.net/attachments/703655597530284032/804445392069984296/XiaoYing_Video_1589054162045_HD_7.gif",
    "https://media.discordapp.net/attachments/603523401960914954/771144669048340540/VIDEO_4b9c8532-4981-4072-a88e-ce18d57fa816_1.gif",
    "https://media.giphy.com/media/E3KfTvcSa4AdkxoFZ0/giphy.gif",
    "https://cdn.discordapp.com/attachments/814852609193803807/820538037788082206/InShot_20201015_131358227.gif",
    "https://media.discordapp.net/attachments/792181059721756694/792181299292930058/animation.gif.gif",
    "https://media.discordapp.net/attachments/807551601967104000/808605287329038336/4wbm23-1.gif",
    "https://media.discordapp.net/attachments/712609198520664085/811116721964187678/doc_2021-02-16_02-58-03_-_Copy.gif",
    "https://media.discordapp.net/attachments/681762904055480358/818189289527181322/GIF-210307_012208.gif",
    "https://media.discordapp.net/attachments/812007467046797352/820196368836591636/InShot_20210313_105531829_1.gif",
    "https://media.discordapp.net/attachments/812007467046797352/820196368836591636/InShot_20210313_105531829_1.gif",
    "https://media.discordapp.net/attachments/725820273932369991/817170852307009546/20210305_023431.gif",
    "https://media.discordapp.net/attachments/389423741333012485/813344946424905738/sahih.gif"];
    var image = Math.floor(Math.random() * images.length);
    
    if (message.content === `بات واندر گیف میخوام`) {    
        let random = new Discord.MessageEmbed()
        
        .setAuthor(" گیف برای شما ")
        .setImage(images[image])
        .setTimestamp();
  
    
        message.channel.send(random);
    }
  });
  client.on('message', message => {
    if (message.content === `پینگ بات واندر`) {
        const embed = new Discord.MessageEmbed()
          .setColor("#11cc11")
          .setAuthor(`پینگ ربات واتدر : ${Math.round(message.client.ws.ping)}`)          
            message.channel.send(embed);
          
    }
        });
        