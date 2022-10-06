import { memo } from 'react';

export const Small = memo(({ valor }) => {
    console.log('Me dibuje');
  return (
    <small>{ valor }</small>
  )
})
