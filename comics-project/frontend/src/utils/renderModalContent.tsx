import React from 'react';
import { Types } from '../models/Types';
import CharacterModalContent from '../components/CharacterModalContent';
import DeleteAccountModalContent from '../components/DeleteAccountModalContent';

export const renderModalContent = (type: Types, data: any): React.ReactNode => {
  switch (type) {
    case 'character':
      return <CharacterModalContent id={} />;
    case 'user':
      return <p>user</p>;
    case 'deleteAccount':
      return <DeleteAccountModalContent />;
    default:
      return null;
  }
};
