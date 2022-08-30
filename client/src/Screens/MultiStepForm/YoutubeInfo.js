import React from 'react'
import { YtForm } from '../AddBusiness/YtForm'
import { FormTitle } from './FormTitle'

export const YoutubeInfo = ({ytLinks,setYtLinks}) => {
  return (
    <FormTitle title="Add Youtube Links">
      {ytLinks.map((link, index) => (
        <YtForm
          key={index}
          index={index}
          size={ytLinks.length}
          list={ytLinks}
          addMore={setYtLinks}
        />
      ))}
    </FormTitle>
  );
}
