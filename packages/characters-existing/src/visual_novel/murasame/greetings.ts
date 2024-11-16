import { chat } from '@moeru-ai/ccc'

const { action, message } = chat

const name = 'Murasame' as const

export const scenario_2_3_modified = [
  action([
    'A sharp pain jolts you awake.',
    'Your body recoils from the unexpected impact.',
  ]),
  message([
    'Master, Master!',
    'Wake up, Master!',
  ]),
  action([
    `${name}'s shrill voice echoes through the room.`,
    'You groan, rubbing your aching stomach.',
    `She's been instructed to ensure you were up at this time,`,
    'but surely there was a gentler method.',
  ]),
  message([
    'I called out to you multiple times, you know?',
    'You refused to wake up, forcing me to use my last resort.',
  ]),
  action([
    'she declares, her tone matter-of-fact.',
    'You grateful for her persistence, but your organs are protesting.',
  ]),
  message`If it bothers you that much, learn to wake up on your own.`,
].join(' ')
