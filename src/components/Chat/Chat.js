import React from 'react';
import * as TalkRn from '@talkjs/react-native';

const Chat = () => {
  const me = {
    id: '123456789',
    name: 'Askar',
    email: 'askar@example.com',
    photoUrl: 'https://demo.talkjs.com/img/alice.jpg',
    welcomeMessage: 'Hey there! How are you? :-)',
    role: 'default',
  };

  const other = {
    id: '987654321',
    name: 'Stas',
    email: 'Stas@example.com',
    photoUrl: 'https://demo.talkjs.com/img/sebastian.jpg',
    welcomeMessage: 'Hey, how can I help? https://google.com',
    role: 'default',
  };

  const conversationBuilder = TalkRn.getConversationBuilder(
    TalkRn.oneOnOneId(me, other),
  );

  conversationBuilder.setParticipant(me);
  conversationBuilder.setParticipant(other);

  return (
    <TalkRn.Session appId="thy2SFhO" me={me}>
      <TalkRn.Chatbox conversationBuilder={conversationBuilder} />
    </TalkRn.Session>
  );
};

export default Chat;
