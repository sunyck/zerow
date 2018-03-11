import AbstractCommand from '../../AbstractCommand';
import {PERMISSION_PRESETS} from '../../../utils/Permission';
import {Message, GuildMember} from 'discord.js';
import Lang from '../../Lang';
import Infraction from '../../../datatypes/Infraction';
import Logging from '../../../utils/Logging';
import moment from 'moment';
import _ from 'lodash';
import DiscordUtils from '../../../utils/DiscordUtils';
import UserUtils from '../../../utils/UserUtils';

class MuteCommand extends AbstractCommand {

    constructor() {
        super("mute", [
            PERMISSION_PRESETS.CONVICTS.MODERATOR, PERMISSION_PRESETS.BOTDEV.MODERATOR, PERMISSION_PRESETS.MAGICANDCHILL.MODS
        ], "<user> <duration|forever> [[for]reason]", "Mute a guild member for a specific period of time");
    }

    async exec(args : Array < string >, reply : (msg : string) => Promise < Message >, user : GuildMember, msg : Message) {

        //Verify argument length
        if (args.length < 2) {
            this.tools.volatileReply(reply, this.getUsage(), 5000, msg);
            return;
        }

        //Extract UID from mention
        const uid :
            ? string = this.tools.extractUID(args[0]);

        //If the UID is invalid, let the user know and stop here
        if (!uid) {
            this.tools.volatileReply(reply, "The given user is not a valid target. Please use a mention or UID format.", 5000, msg);
            return;
        }

        //Fetch the guild member for the user to be muted
        const targetMember :
            ? GuildMember = msg.guild.members.array().find(user => user.id == uid);

        //If we found a reference, make sure we're not muting superiors
        if (targetMember && !DiscordUtils.hasPermission(user, _.maxBy(targetMember.roles.array(), r => r.position), false)) {
            this.tools.volatileReply(reply, _.sample(Lang.NO_PERMISSION) + " It's not possible to mute users ranked equally or higher than you.", 5000, msg);
            return;
        }

        //Obtain duration:
        if (args[1].toLowerCase() != 'forever' && args.length < 3) {
            this.tools.volatileReply(reply, this.getUsage(), 5000, msg);
            return;
        }

        const duration :
            ? number = args[1].toLowerCase() == 'forever'
                ? Number.MAX_SAFE_INTEGER
                : this.tools.parseTime(args[1] + " " + args[2]);

        if (!duration) {
            this.tools.volatileReply(reply, "I don't understand your duration definition of '" + args[1] + " " + args[2] + "'!", 5000, msg);
            return;
        }

        //Obtain a reason if it exists
        let reasonArr = args[1].toLowerCase() == 'forever'
            ? args.slice(2, args.length)
            : args.slice(3, args.length);
        if (reasonArr.length > 0 && reasonArr[0].match(/^for$/i))
            reasonArr.shift();
        const reason = reasonArr.length == 0
            ? null
            : _.capitalize(reasonArr.join(" "));

        //Confirm action
        this.tools.volatileReply(reply, _.sample(Lang.AFFIRMATIVE), 5000, msg);

        //Save an infraction and log it
        await Logging.infractionLog(await new Infraction(uid, moment().unix(), {
            type: 'MUTE',
            increasedNotoriety: false,
            meta: duration
        }, null, {
            executor: user.id,
            reason
        }).save());

        //Obtain the user record of the target user
        let userRecord = await UserUtils.assertUserRecord(uid);

        //Apply the mute
        if (targetMember) {
            targetMember.addRole(await DiscordUtils.getRoleByName(msg.guild, "Muted"));
        }

        //Save it to the user record
        userRecord.mutedUntil = moment().unix() + duration;
        await userRecord.save();
    };

}

export default new MuteCommand();