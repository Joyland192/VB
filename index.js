const { prefix } = require('./Config.json'); //prefix, token을 불러옴
//const prefix = "++"; //prefix, token을 불러옴
const token = process.env.token;
const Discord = require(`discord.js`); // discord.js를 불러옴
const client = new Discord.Client(); // 새로운 디스코드 클라이언트를 만듬
const fs = require('fs');
const vars = require('./Test.json');
// 저장
//fs.writeFileSync("C:\Users\JoyLand192\PycharmProjects\깁치봇\venv\VB.JS\Exp.json", JSON.stringify(save));
// 불러오기
//save = JSON.parse(fs.readFileSync("C:\Users\JoyLand192\PycharmProjects\깁치봇\venv\VB.JS\Exp.json"));
// 만약에 클라이언트가 준비되었다면, 아래의코드를 실행합니다
// 이 이벤트는 봇이 로그인 되고 한번만 실행될것입니다
//커밋 완료4
const joutube = new Discord.MessageEmbed()
	.setColor('#FF9900')
	.setTitle('조이 유튜브 채널 가기')
	.setURL('https://www.youtube.com/channel/UCQ0Rn67N-SgEcaOqA3JS2mA')
	.setAuthor('조이', 'https://cdn.discordapp.com/attachments/719852428777750590/719877042304450620/download20200502163021.png')
	.setDescription('안뇽')
	.setThumbnail('https://cdn.discordapp.com/attachments/719852428777750590/719877042304450620/download20200502163021.png')
	//.addFields(
	//	{ name: 'Regular field title', value: 'Some value here' },
	//	{ name: '\u200B', value: '\u200B' },
	//	{ name: 'Inline field title', value: 'Some value here', inline: true },
	//	{ name: 'Inline field title', value: 'Some value here', inline: true },
	//)
	//.addField('Inline field title', 'Some value here', true)
	//.setImage('https://i.imgur.com/wSTFkRM.png')
	.setTimestamp()
    .setFooter(`VB`, 'https://cdn.discordapp.com/attachments/719852428777750590/719877042304450620/download20200502163021.png');
//임베드 함수 생성
client.once('ready', () => {
	console.log("Bot Login.");
	const loginlog = client.channels.cache.get('724231205570215946');
	loginlog.send(`봇 로그인.`);
	client.user.setActivity(`${prefix} 도움 레벨을 입력해보세요.                                `);
});
client.on('message', ( message ) => {
    if(message.channel.type === "dm" ) { 
        if (message.content === `${prefix} ID`){
            if ((message.author.plsstop != 0) && (!message.author.yee)) {
                message.channel.send("여기 아니야 임마...");
                message.channel.send(`이번만 해준다.. ${message.author.id}`);
                message.author.left = 4;
                message.channel.send(`${message.author.left}번만 더 해준다...`);
                message.author.plsstop = 1;
                message.author.yee = true;
            } else if (message.author.plsstop <= 4) {
                message.channel.send("여기 아니야 임마...");
                message.channel.send(`이번만 해준다.. ${message.author.id}`);
                message.author.left = 4 - message.author.plsstop;
                message.channel.send(`${message.author.left}번만 더 해준다...`);
                message.author.plsstop += 1;
            } else if (message.author.plsstop > 4) {
                message.channel.send("작작해 내가 노예도 아니고 ㅠㅠ");
            }
        }
    }
});
client.on('message', ( message ) => {
    if (message.channel.type === "dm") {
        message.author.dm = true
    }
    if(!message.author.dm) {
        const args = message.content.split(" ");
        if (message.content === `${prefix} ID`) {
            message.channel.send(`${message.author.id}`);
        }
    }
});
client.on('message', (message) => {
    const pre = message.content.slice(prefix.length).split(" ") // 메세지에서 프리픽스의 글자 수만큼 잘라내고, String.split 메서드를 이용하여 Array로 바꾼다.
    const command = pre.shift().toLowerCase() // Array의 첫번 째 값을 없애고 반환하는 Array.shift 메서드에 String.toLowerCase 메서드로 소문자화 한다.
    const kwriterid = client.users.cache.get('282831530286645258');
    const developerid = client.users.cache.get('414266558974656518');
    const args = message.content.split(" ");
    const sharpct = client.channels.cache.get('720124444236054545');
    const blueholdcn = client.channels.cache.get('721252326249070652');
    const reinforcejd = client.channels.cache.get('541904100607131658');
    const namutest = client.channels.cache.get('697389133361971315');
    message.author.maxexp = message.author.level*300;
    if (message.content === "0.02" ) {
        // "Pong"으로 되돌려 칩니다.
        message.channel.send("안한다구요!!");
    }
    if (message.content === `${prefix} 뭐해`) {
        message.author.what = Math.floor(Math.random() * 5) + 1;
        if (message.author.what === 1) {
            message.channel.send("몰라");
        }
        if (message.author.what === 2) {
            message.channel.send("잠");
        }
        if (message.author.what === 3) {
            message.channel.send("마인크래프트 하는데");
        }
        if (message.author.what === 4) {
            message.channel.send("ㅇ?");
        }
        if (message.author.what === 5) {
            message.channel.send("M자 탈모 박치기");
        }
    }
    if (message.content === `${prefix} 재시작`) {
        if ((message.author.id = 414266558974656518) || (message.author.id = 282831530286645258)) {
            message.channel.send("클라이언트를 재시작합니다.").then(() => process.exit());
        } else {
            message.channel.send("관리자만 사용할 수 있는 기능입니다.");
        }
    }
    if (message.content.startsWith (`${prefix} 통계`)) {
        message.channel.send('https://status.discord.com');
    }
    if (message.content.startsWith (`${prefix} 테섭`)) {
        message.channel.send('https://discord.gg/bRYDfzg');
    }
    if(message.content.startsWith(`${prefix} 블홀공지`)) {
        let bhkj = message.content.slice(`${prefix} 블홀공지`.length);
        blueholdcn.send(bhkj);
	if (message.author.id = 414266558974656518) {
		blueholdcn.send('..라고 개발자가 말하라 시켰어');
	}
	if (message.author.id != 414266558974656518) {
        	blueholdcn.send(`..라고 ${message.author.tag} (이)가 말하라 시켰어`);
	}
        message.reply('메시지를 전송했습니다.');
    }
    if(message.content.startsWith(`${prefix} 나무채팅`)) {
        let nmtt = message.content.slice(`${prefix} 나무채팅`.length);
        namutest.send(nmtt);
	if (message.author.id = 414266558974656518) {
		namutest.send('..라고 개발자가 말하라 시켰어');
	}
	if (message.author.id != 414266558974656518) {
        	namutest.send(`..라고 ${message.author.tag} (이)가 말하라 시켰어`);
	}
        message.reply('메시지를 전송했습니다.');
    }
    //if ((args[0] === `${prefix}`) && (args[1] === `렌포잡담`)) {
    //    reinforcejd.send(`${args[2]}`);
    //}
    if(message.content.startsWith(`${prefix} 렌포잡담`)) {
        let rfjd = message.content.slice(`${prefix} 렌포잡담`.length);
        reinforcejd.send(rfjd);
	if (message.author.id = 414266558974656518) {
		reinforcejd.send('..라고 개발자가 말하라 시켰어');
	}
	if (message.author.id != 414266558974656518) {
        reinforcejd.send(`..라고 ${message.author.tag} (이)가 말하라 시켰어`);
	}
        message.reply('메시지를 전송했습니다.');
    }
    if (message.content.startsWith(`${prefix} 개발자 문의`)) {
        let dvdm = message.content.slice(`${prefix} 개발자 문의`.length);
        developerid.send(dvdm);
        developerid.send(`-${message.author.tag}-`)
        message.reply('메시지를 전송했습니다.');
    }
    if (message.content.startsWith(`${prefix} 오이`)) {
        let oodm = message.content.slice(`${prefix} 오이`.length);
        kwriterid.send(oodm);
	if (message.author.id = 414266558974656518) {
		kwriterid.send('..라고 개발자가 말하라 시켰어');
	}
	if (message.author.id != 414266558974656518) {
        	kwriterid.send(`..라고 ${message.author.tag} (이)가 말하라 시켰어`);
	}
        message.reply('메시지를 전송했습니다.');
    }
    if(message.content.startsWith(`${prefix} 렌포비밀잡담`)) {
        let rfjd = message.content.slice(`${prefix} 렌포비밀잡담`.length);
        reinforcejd.send(rfjd);
        message.reply('메시지를 전송했습니다.');
    }
    if(message.content.startsWith(`${prefix} 샤프채팅`)) {
        let spct = message.content.slice(`${prefix} 샤프채팅`.length);
        sharpct.send(spct);
        message.reply('메시지를 전송했습니다.');
    }
    if (message.content === `테스트`) {
        message.author.test = Math.floor(Math.random() * 2) + 1;
        if (message.author.test === 1) {
            message.channel.send("ㅇ");
        }
        if (message.author.test === 2) {
            message.channel.send("잘 되는데?");
        }
    }
    if (message.content.startsWith(`${prefix} 메시지`)) {
        let sendmsg = client.users.cache.get(args[2]);
        sendmsg.send(args[3]);
        message.reply('메시지를 전송했습니다.');
    }
    if (command === "12") {
        message.reply("34");
    }
    if (message.content === `${prefix} 반응 달아`) {
        message.author.reac = Math.floor(Math.random() * 3) + 1;
        if (message.author.reac === 1) {
            message.react('704949221605769226');
        }
        if (message.author.reac === 2) {
            message.react('712539046135463977');
        }
        if (message.author.reac === 3) {
            message.channel.send("싫은데");
        }
    }
    if (message.content === "0.03") {
        message.channel.send("안한다구요!!");       
    }
    if (message.content === "띵킹") {
        message.react('🤔');
    }
    if (message.content === "몸 어때") {
        message.channel.send("갠찮아");       
    }
    if (message.author.id == 414266558974656518) {
    	if (message.content === `${prefix} 사랑해`) {
    	    message.channel.send("난 아닌데?");       
    	}
    	if (message.content === `${prefix} 닥쳐`) {
    	    message.channel.send("ㅇ");       
    	}
    	if (message.content === `${prefix} 비웬`) {
    	    message.channel.send("바보");       
    	}
    	if (message.content === `${prefix} 죽어`) {
    	    message.channel.send("?");       
    	}
    	if (message.content === `${prefix} 바보`) {
    	    message.channel.send("너보단 똑똑해요");       
    	}
    	if (message.content === `${prefix} 야`) {
    	    message.channel.send("ㅇ");       
    	}
    	if (message.content === `${prefix} 잘가`) {
    	    message.channel.send("어딜가");       
    	}
    	if (message.content === `${prefix} 안녕`) {
            message.react("😡");       
    	}
    	if (message.content === `${prefix} 히히`) {
            message.channel.send("?")    
    	}
    	if (message.content === `${prefix} 블홀`) {
            message.channel.send("바본데 너보단 나음")    
    	}
    	if (message.content === `${prefix} ㅇ`) {
            message.channel.send("?")    
    	}
    	if (message.content === `${prefix} 끌게`) {
            message.channel.send("? ㅅㅂ 잠만")    
    	}
    }
    if (message.author.id != 414266558974656518) {
    	if (message.content === `${prefix} 사랑해`) {
    	    message.channel.send("저도요 히히");       
    	}
    	if (message.content === `${prefix} 닥쳐`) {
    	    message.channel.send("죄송합니다..");       
    	}
    	if (message.content === `${prefix} 비웬`) {
    	    message.channel.send("귤");       
    	}
    	if (message.content === `${prefix} 죽어`) {
    	    message.channel.send("네? 제가 뭘 잘못했나요? ㅠㅠ");       
    	}
    	if (message.content === `${prefix} 바보`) {
    	    message.channel.send(":/");       
    	}
    	if (message.content === `${prefix} 야`) {
    	    message.channel.send("네?");       
    	}
    	if (message.content === `${prefix} 잘가`) {
    	    message.channel.send("바이바이");       
    	}
    	if (message.content === `${prefix} 안녕`) {
            message.react("👋");       
    	}
    	if (message.content === `${prefix} 히히`) {
            message.channel.send("히히")    
    	}
    	if (message.content === `${prefix} 블홀`) {
            message.channel.send("바보")    
    	}
    	if (message.content === `${prefix} ㅇ`) {
            message.channel.send("음..?")    
    	}
    	if (message.content === `${prefix} 끌게`) {
            message.channel.send("네? 절 끄실 수 있어요?")    
    	}
    }
    if (message.content === `${prefix} 도움 레벨`) {
        message.channel.send(`${prefix} 경험치 설정 -> 경험치를 0으로 설정합니다. **이 작업을 수행하지 않으면 경험치가 오르지 않습니다.**`);
        message.channel.send(`${prefix} 경험치 -> 보유 경험치를 확인합니다.`);
        message.channel.send(`${prefix} 레벨 -> 유저의 레벨을 확인합니다.`);
        message.channel.send(`~~${prefix} 경험치 올리기-> 경험치를 일정량 올립니다.~~ **사용불가**`);
        message.channel.send(`주의! 베타 버전이기 때문에 봇이 재시동될때마다 경험치가 초기화됩니다.`);
    }
    if (message.content === `${prefix} 지워`) {
        message.author.plsdel = Math.floor(Math.random() * 5) + 1;
        if (message.author.plsdel === 1) {
            message.channel.send("시러");
        }	
        if (message.author.plsdel === 2) {
            message.delete();
        }
        if (message.author.plsdel === 3) {
            message.delete();
        }
        if (message.author.plsdel === 4) {
            message.delete();
        }
        if (message.author.plsdel === 5) {
            message.delete();
        }
    }
    if (message.content === `${prefix} 나 누구야`) {
        message.channel.send(`너..그..어.. ${message.author.name} ?`);       
    }
    if (message.content === `${prefix} 경험치 설정`) {
        message.channel.send(`경험치를 0으로 설정했습니다.`);   
        message.author.exp = 0;
        message.author.level = 1;
    }
    if (message.content === `${prefix} 경험치 올리기`) {
        //message.channel.send(`경험치를 100만큼 올립니다.`);
        message.channel.send(`어...그거 이제 막혔는데`);  
        //message.author.exp += 100;
    }
    if(message.author.exp >= message.author.maxexp) {
        message.author.exp -= message.author.maxexp;
        message.author.level++;
        message.channel.send("축하합니다! 레벨업 하셨습니다!");
    }
    if (message.content === `${prefix} 경험치`) {
        message.channel.send(`당신의 보유 경험치는 ${message.author.exp}/${message.author.maxexp} 입니다.`);       
    }
    if (message.content === `${prefix} 레벨`) {
        message.channel.send(`당신의 레벨은 ${message.author.level}Lv 입니다.`);       
    }
    if (message.content === `${prefix} 레벨 올리기`) {
        while(message.author.exp >= message.author.maxexp) {
            message.channel.send(`축하합니다! 레벨업 하셨습니다!`);
            message.author.exp -= message.author.maxexp;
            message.author.level++;
            message.author.maxexp = message.author.level*300;
        }
        message.channel.send(`더는 올릴 레벨이 없습니다.`);
    }
    if (message.content === `${prefix} 유튜브`) {
        message.channel.send(joutube);       
    }
    if ((message.content.startsWith (`${prefix} 경험치 조정`)) && ((message.author.id = 414266558974656518) || (message.author.id = 282831530286645258))) {
        var setexp = message.content.slice(`${prefix} 경험치 조정`.length);
        message.author.exp = setexp
        message.channel.send(`경험치를 ${setexp}로 조정했습니다.`);
    }
    if ((message.content.startsWith (`${prefix} 경험치 조정`)) && (message.author.id != 414266558974656518) && (message.author.id != 282831530286645258)) {
        message.channel.send(`관리자만 사용할 수 있는 기능입니다.`);
    }
    if (message.content.startsWith (`${prefix} 닉네임`)) {
        message.author.nicknames = message.content.slice(`${prefix} 닉네임 `.length);
        client.user.setUsername(message.author.nicknames);
        message.channel.send(`닉네임을 ${message.author.nicknames} 으로 설정 했어.`);
        if (message.author.nicknames == `${client.user.username}`) {
            message.channel.send(`원래 이거였는데?`);
        }
        if (message.author.nicknames == `바보`) {
            message.channel.send(`..디질래?`);
        }
    }
    if (message.channel.id === '541904100607131658') {
        if (message.content.startsWith (`ㅅㅂ`)) {
            message.delete();
        }
        if (message.content.startsWith (`시발`)) {
            message.delete();
        }
        if (message.content.startsWith (`씨발`)) {
            message.delete();
        }
        if (message.content.startsWith (`ㅆㅂ`)) {
            message.delete();
        }
        if (message.content.startsWith (`시벌`)) {
            message.delete();
        }
    }
    if (message.content === `${prefix} 여기 어디야`) {
        message.channel.send(`여기 거긴데 그..`)
        message.channel.send(`**${message.guild.name}**`)
    }
    if (message.channel.id == '699431283935412294') {
        const gamasot = client.channels.cache.get('699431332002136155');
        gamasot.send(`${message.author.name} : ${message.content}`);
    }
    if (message.guild.id != '699319360719814686') {
        if (message.content.startsWith (`ㅅㅂ`)) {
            message.channel.send('욕설은 자제해주세요.');
        }
        if (message.content.startsWith (`시발`)) {
            message.channel.send('욕설은 자제해주세요.');
        }
        if (message.content.startsWith (`씨발`)) {
            message.channel.send('욕설은 자제해주세요.');
        }
        if (message.content.startsWith (`ㅆㅂ`)) {
            message.channel.send('욕설은 자제해주세요.');
        }
        if (message.content.startsWith (`시벌`)) {
            message.channel.send('욕설은 자제해주세요.');
        }
    }
    if (message.content.startsWith (`소환`)) {
        message.react('🤔');
    }
    if (message.content.startsWith (`수버 등장`)) {
        message.author.surber = Math.floor(Math.random() * 3) + 1;
        if (message.author.surber === 1) {
            message.channel.send('스윽');
        }
        if (message.author.surber === 2) {
            message.channel.send('쾅');
        }
        if (message.author.surber === 3) {
            message.channel.send('펑');
        }
    }
    if (message.content === `${prefix} 꿀벌`) {
        message.channel.send(`야 ${message.author.tag}.. 왜 울고있는거야..?`).then(() => message.channel.send ('..소난다..'));
    }
    if (message.content === `${prefix} 평가`) {
        message.channel.send('VB의 기능에 대해 평가해주세요.').then(sentMessage => {
		sentMessage.react('👍');
		sentMessage.react('👎');
    	});
    }
    if (message.content === `${prefix} 재배맨!`) {
        message.channel.send(`무 무슨`);
        message.channel.send(`https://cdn.discordapp.com/attachments/541904100607131658/707165754541342780/d0c8d91c15525df7.jpg`)
    }
    if (message.content === `${prefix} 재배맨`) {
        message.channel.send(`무 무슨`);
        message.channel.send(`https://cdn.discordapp.com/attachments/541904100607131658/707165754541342780/d0c8d91c15525df7.jpg`)
    }
    if (message.content === `<@556660274380406805>`) {
        message.channel.send(`으악 핑`);
        message.channel.send(`왜 불러`);
    }
    if (message.content === `${prefix} 강작가`) {
        message.channel.send(`밥오`);
    }
    if (args[0] === `${prefix}문자열테스트`) {
        message.channel.send(`(문자열 1:) ${args[1]} (문자열 2:) ${args[2]} (문자열 3:) ${args[3]}`);
    }
    if (message.content === `${prefix} 순서 1`) {
        message.author.qna = 1;
        message.channel.send(`JL의 턴입니다.`);
    }
    if (message.content === `${prefix} 순서 2`) {
        message.author.qna = 2;
        message.channel.send(`V의 턴입니다.`);
    }
    if (message.content === `${prefix} 순서 3`) {
        message.author.qna = 3;
        message.channel.send(`AR의 턴입니다.`);
    }
    if (message.content === `${prefix} 순서 `) {
        if (message.author.qna == 1) {
            message.channel.send(`JL의 턴입니다.`);
        }
        if (message.author.qna == 2) {
            message.channel.send(`V의 턴입니다.`);
        }
        if (message.author.qna == 3) {
            message.channel.send(`AR의 턴입니다.`);
        }
    }
    if ((args[0] === `${prefix}`) && (args[1] === `랜덤`)) {
        message.author.randomvar = Math.floor(Math.random() * args[3] + args[2])
        message.channel.send (message.author.randomvar);
    }
    if (message.content === `${prefix} 바보`) {
        message.author.addRole(guild.roles.find(role => role.name == "바보"));
    }
    if(message.content.startsWith(`${prefix} 말해`)) {
        let saypls = message.content.slice(`${prefix} 말해`.length);
        message.channel.send(saypls);
    }
    if (message.content === '!fruits') {
	message.react('🍎');
	message.react('🍊');
	message.react('🍇');
    }
    if (message.content.startsWith(`${prefix} 변수 저장`)) {
        savevar = message.content.slice(`${prefix} 변수 저장`.length);

        client.vars [`${message.author.id}.savedvar`] = {
            message: savevar
        }
        fs.writeFile ("./Test.json", JSON.stringify (client.vars, null, 4), err => {
            if (err) throw err;
        });
        message.channel.send(`변수가 저장되었습니다.`);
    }
    message.author.exp += 20;
});


client.on("guildMemberAdd", (member) => {
    const guild = member.guild;
    const newUser = member.user;
    const welcomeChannel = guild.channels.find(channel => channel.name == welcomeChannelName);
  
    welcomeChannel.send(`<@${newUser.id}> ${welcomeChannelComment}\n`);
  
    member.addRole(guild.roles.find(role => role.name == "게스트"));
  });
  
  client.on("guildMemberRemove", (member) => {
    const guild = member.guild;
    const deleteUser = member.user;
    const byeChannel = guild.channels.find(channel => channel.name == byeChannelName);
  
    byeChannel.send(`<@${deleteUser.id}> ${byeChannelComment}\n`);
  });
  
  client.on("guildMemberAdd", (member) => {
    const guild = member.guild;
    const newUser = member.user;
    const welcomeChannel = guild.channels.find(channel => channel.name == welcomeChannelName);
  
    welcomeChannel.send(`<@${newUser.id}> ${welcomeChannelComment}\n`);
  
    member.addRole(guild.roles.find(role => role.name == "게스트"));
  });
  
  client.on("guildMemberRemove", (member) => {
    const guild = member.guild;
    const deleteUser = member.user;
    const byeChannel = guild.channels.find(channel => channel.name == byeChannelName);
  
    byeChannel.send(`<@${deleteUser.id}> ${byeChannelComment}\n`);
  });
  
  client.on('message', (message) => {
    if(message.author.bot) return;
  
    if(message.content == 'ping') {
      return message.reply('pong');
    }
  
    if(message.content.startsWith('!전체공지')) {
      if(checkPermission(message)) return
      if(message.member != null) { // 채널에서 공지 쓸 때
        let contents = message.content.slice('!전체공지'.length);
        message.member.guild.members.array().forEach(x => {
          if(x.user.bot) return;
          x.user.send(`<@${message.author.id}> ${contents}`);
        });
    
        return message.reply('공지를 전송했습니다.');
      } else {
        return message.reply('채널에서 실행해주세요.');
      }
    }
  });
  
  function checkPermission(message) {
    if(!message.member.hasPermission("MANAGE_MESSAGES")) {
      message.channel.send(`<@${message.author.id}> ` + "명령어를 수행할 관리자 권한을 소지하고 있지않습니다.")
      return true;
    } else {
      return false;
    }
  }





client.login(token);
// 여러분의 디스코드 토큰으로 디스코드에 로그인합니다
