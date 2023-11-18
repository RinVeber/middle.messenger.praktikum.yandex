export type Profile = {
  firstName: string,
  lastName?: string,
  avatar?: unknown,
  message: string,
  count?: number,
  date: string,
  isMine?: boolean,
};

export type Messages = Profile[];

export type RangeMessages = {
  date: string,
  letters: {
    createdDate: string,
    image?: unknown,
    text: string,
  }[],
}[];

export type ProfileDetails = Pick<Profile, 'firstName' | 'lastName'> & {
  rangeMessages: RangeMessages,
}
