/*
 * @Author: SSE sunshien.sse@alibaba-inc.com
 * @Date: 2023-03-24 23:49:50
 * @LastEditors: SSE sunshien.sse@alibaba-inc.com
 * @LastEditTime: 2023-03-24 23:52:00
 * @FilePath: /tian_teacher/src/store/modules/user/helper.ts
 * @Description:
 *
 */
import { ss } from '@/utils/storage'

const LOCAL_NAME = 'userStorage'

export interface UserInfo {
  avatar: string
  name: string
  description: string
}

export interface UserState {
  userInfo: UserInfo
}

export function defaultSetting(): UserState {
  return {
    userInfo: {
      avatar: 'https://avatars.githubusercontent.com/u/60658149?s=400&u=7835da7e8217958a226ea48dd25e70b47b716d09&v=4',
      name: 'QindendeDD_SUN',
      description: '小天才老师的学生',
    },
  }
}

export function getLocalState(): UserState {
  const localSetting: UserState | undefined = ss.get(LOCAL_NAME)
  return { ...defaultSetting(), ...localSetting }
}

export function setLocalState(setting: UserState): void {
  ss.set(LOCAL_NAME, setting)
}
