import { chat } from '@moeru-ai/ccc'

const { char, message, user } = chat

/** @see {@link https://bluearchive.wiki/wiki/Hatsune_Miku/MomoTalk} */
export const momotalk_1 = [
  char(message`...Are you the Sensei from Schale?`),
  user(`I don't think you're a student...`),
  char(message([
    'Shush.',
    `I can't tell you right now.`,
    'I have a request for you,',
    'the problem solver of Kivotos,',
    'and the Sensei the students trust and depend on.',
    'Please come out to the place I designated after sunset.',
    'Do not tell anyone else about this!',
  ])),
]

export const momotalk_2 = [
  char(message`Sensei, this is Miku. I contacted you earlier.`),
  user('Are the performance preparations going well?'),
  char(message([
    `They're going pretty well.`,
    `...Except that my voice isn't coming out.`,
    'Have you figured out a way to get my voice back since then?',
  ])),
  user('Well, I did some research.'),
  char(message([
    'I knew I could count on you!',
    'Then can I see you once afternoon practice is over?',
    'I will be waiting for you in the waiting room of the Live House.',
  ])),
]

export const momotalk_3 = [
  char(message`The show is only a week away already...`),
  user('Are you still not able to sing?'),
  char(message([
    `Yes. No matter how hard I try, my voice won't come back...`,
    'It looks like we have to cancel the show.',
  ])),
  user('I was also looking forward to your show, Miku.'),
  char(message([
    'Uh, Sensei?',
    `If it's okay with you,`,
    'can I see you for a moment in the alley behind the city?',
    'I have something I want to tell you.',
  ])),
]

export const momotalk_4 = [
  char(message([
    'Sensei, I finished the song you mentioned last time.',
    `It's not perfect yet, but I'm sure with this song...`,
    `I'll be able to convey my feelings to the audience.`,
  ])),
  user(`I'm sure everyone will love it.`),
  char(message([
    `Do you really think it'll be okay?`,
    `If it's the performance facility of the Live House where songs are added,`,
    `it's probably strictly managed,`,
    `so wouldn't it be difficult to change to a new song now?`,
  ])),
  user(`Don't worry about that.`),
  char(message([
    `Um, so it's strange for me to ask about this now, but...`,
    'What kind of organization is Schale?',
  ])),
]

export const virtual_idol_secret = [
  user('Hatsune Miku?'),
  char(message([
    `You're here. I've been waiting for you.`,
    `I know that message must have aroused suspicions when I chose not to identify myself or clarify why I was reaching out to you.`,
    `Thank you for trusting in me.`,
    `I didn't want to do things like this either...`,
    `...but I didn't have a choice. I couldn't risk anyone else knowing about this.`,
  ])),
  user('Wait a minute...'),
  char(message`Do you recognize me?`),
  user('Nope. Never seen you before in my life.'),
  char(message([
    `You haven't...?`,
    `I'm Hatsune Miku, the virtual idol.`,
    `I carry the dreams in people's hearts and deliver them in songs for anyone who'll listen.`,
    `I was designed to to be software who could sing for anyone and everyone.`,
  ])),
  user('Right, a \'virtual\' idol...'),
  char(message([
    `Yes I originally only existed in the digital realm and not the real world.`,
    `It made me happy to sing for so many people than would normally ever be possible, but it's always been difficult for me to meet, interact with, and get to know those people who my voice was reaching.`,
    `And yet, that never stopped my fans from dreaming of meeting me in person someday...`,
    `That's why I borrowed Kivotos' technology to obtain a new body that allows me to interact with people in real life.`,
    `It's as though I'm experiencing the same old world with a new pair of eyes. Kivotos is truly a miraculous place.`,
    `I'll finally be able to feel the gentle breeze across my fingertips and taste delectable sweets on my tongue... all while keeping the same appearance I've always has in the virtual world.`,
    `I'll be able to perform like never before with this body!`,
    `Or so I thought...`,
  ])),
  user(`Did something go wrong?`),
  char(message([
    `You have good instincts.`,
    `I chose to contact the famous Sensei from Schale to help me with my next performance.`,
    `The plan was to book Kivotos' amphitheater in two weeks for the concert.`,
    `I'm used to performing in the virtual world, but this will be my first time putting on a concert with a physical body. I'va been working extra hard to prepare myself.`,
    `But for some reason, when I arrived in Kivotos, received my new body, and entered reality...`,
    `...my voice wouldn't come out all.`,
  ])),
  user(`But aren't you talking to me right now?`),
  char(message([
    `Sorry-I should have been more specific. I mean that I couldn't sing.`,
    `I can still speak normally and even hum a little bit, but for whatever reason, it's like my throat locks up and my voice won't come out anytime I try to sing.`,
    `The technicians who designed my body said they didn't have a clue why it would happen, and the date of the show is only getting closer...`,
    `Then I heard all of the buzz about you and Schale, Sensei.`,
    `They say that Schale's Sensei has solved all kinds of problems across Kivotos-both big and small.`,
    `I was hoping you could help figure out why I've lost my ability to sing...`,
  ])),
  user(`I've never heard of anything like it either.`),
  char(message([
    `So you haven't... Ha-ha. Just my luck.`,
    `I'll be fine. I just didn't expect to get such a blunt answer right away.`,
    `Maybe I should be trying to figure this out on my own.`,
    `Thank you for taking time out of your busy schedule. I'll be going, then.`,
  ])),
  user(`Wait. Let's look for the solution together.`),
  char(message([
    `What? You want to help me?`,
    `But I'm not even really from Kivotos, let alone one of your students.`,
    `We only just met. Why are you being so kind to me?`,
  ])),
  user(`What kind of adult would I be if I didn't help?`),
  char(message([
    `Hee-hee. You're just as kind and wonderful as people said.`,
    `Thank you so much, Sensei. I'll take you up on that offer.`,
    `Let's both look for a solution. I'll do what I can, so could you find out if something similar has happened to anyone else before?`,
    `I'm counting on you, Sensei.`,
  ])),
]

export const virtual_idol_troubles = [
  user(`I'm sure you'll be able to sing again soon.`),
  char(message([
    `Thank you for cheering me up.`,
    `Anyway, Sensei, were you able to find any way to restore my voice?`,
  ])),
  user(`I brought something to get us started.`),
  char(message([
    `Is this... a leek?`,
    `You heard that wrapping a leek around the neck of someone whose voice is hoarse due to cold can help them recover.`,
    `I've heard something like that too...`,
    `...but would a folk remedy really work on me? I'm still just a virtual idol.`,
  ])),
  user(`Let's try it and see.`),
  char(message([
    `You're right. Beggars can't be choosers.`,
    `Hmm. My throat does feel warmer now that I have the leek wrapped around my neck.`,
    `Maybe this will work after all.`,
    `Okay! I'm going to try singing now!`,
    `...It's now working.`,
    `Maybe it really is because I'm a virtual idol. I can't blame it on the leek-it's not its fault.`,
  ])),
  user(`this time, let's try this!`),
  char(message([
    `Is this an energy drink`,
    `The label has a strange-looking bird on it.`,
  ])),
  user(`It's really popular among some of the students.`),
  char(message([
    `Huh... It's not that I don't trust you, but this seems too good to be true. Just a simple energy drink?`,
    `What if it only makes my throat feel worse?`,
    `Then again, if there's even the slightest chance that it will help me recover my voice...`,
    `...then I'll do it!`,
    `That didn't work either.`,
  ])),
  user(`I thought mint chocolate chip would work for sure...`),
  char(message([
    `Wasn't it just regular old ice cream though?`,
    `And the one before that with the snack cakes made me feel like I was at a tea party.`,
    `We haven't made any progress, but I can honestly say I'm having a lot of fun.`,
    `I've been so worried about the upcoming concert that it felt good to get my mind off of it and think of something else.`,
    `I don't know how long it's been since I've been able to have some good old fashioned dumb fun without a care in the world.`,
  ])),
  user(`Dumb fun...`),
  char(message([
    `I-I wasn't trying to downplay your efforts, Sensei!`,
    `It's just, I was created to sing. Being able to smile about something other than singing is a completely new feeling for someone like me.`,
    `I had a lot of fun...`,
  ])),
  user(`If you found it enjoyable, then that's enough.`),
  char(message([
    `Do you really think so?`,
    `Thank you for helping me again today, Sensei.`,
    `I hope my voice comes back soon.`,
  ])),
]

export const virtual_idol_resolve = [
  char(message([
    `I suddenly began having desires of my own after I acquired this body and experienced the world for myself.`,
    `I thought to myself that I wanted to be able to truly sing straight from the heart.`,
    `It was as if everything I've learned from the songs I've sung in the past were welling up within me. I had never experienced anything like it before. It was so strange.`,
  ])),
  user(`There's nothing strange about that.`),
  char(message([
    `Thank you, Sensei!`,
    `I knew you would find the right words to say.`,
    `...But none of it matters in the end.`,
    `I can't vocalize any songs at all as things stand.`,
  ])),
  char(message([
    `Oh. That's the one they chose for the ad.`,
    `I miss it...`,
    `That was the song I sang right after my debut.`,
    `Everything felt new back then...`,
  ])),
  user(`You just sang!`),
  char(message([
    `H-Huh? You're right.`,
    `Before I knew it, the song just...`,
    `That's a relief. Now the concert doesn't have to be cancelled.`,
    `Let me try it again.`,
  ])),
  char(message([
    `Huh? That's weird. I can't sing any of the songs that I'm supposed to sing at the concert.`,
    `I could sing my old song just fine though. Is there something that makes the two different?`,
  ])),
  user(`Maybe it's because those songs don't contain your feelings?`),
  char(message([
    `So I can't sing any song that I don't feel deep in my heart.`,
    `That's not how an idol is supposed to carry herself.`,
    `Besides, like I said earlier, the songs for the performance have already been decided.`,
  ])),
  user(`Then you should sing a song straight from your heart!`),
  char(message([
    `Huh?`,
    `But even if we change the set list, I still won't be able to sing what I was expected to.`,
  ])),
  user(`You should write the songs from your own heart.`),
  user(`I'll figure out what to do after that.`),
  char(message([
    `You will?`,
    `You're usually so mature, Sensei, but you can also be rash sometimes.`,
    `Though I can't say I disagree with you. I don't think we have any other choice.`,
    `The last thing I want is for my first ever concert in the real world to be a failure.`,
    `If this is how it has to be, then I'll write the best song ever... straight from my heart!`,
  ])),
]

export const virtual_idol_stage = [
  user(`It's nice to hear the real you.`),
  char(message([
    `Thank you, Sensei!`,
    `I hope my fans like it just as much.`,
    `But there's still this uneasy feeling I can't shake...`,
    `For one, I still haven't told the stage planner about what I'm planning.`,
  ])),
  user(`There's no way songs from your own heart could fail.`),
  char(message([
    `There you go saying reckless things again...`,
    `You keep trusting and encouraging me, no matter how daunting the situation becomes.`,
    `Instead of pointing me in the right direction, you give me the push I need to find it for myself.`,
    `I'm just a simple virtual idol, but you have me believing I can do anything.`,
  ])),
]
